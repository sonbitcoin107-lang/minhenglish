// src/pages/Speaking.jsx
// Family & Friends — Speaking Practice
// State machine: SERIES_SELECT → UNIT_SELECT → INTRO → MASCOT_SPEAK → LISTEN_READY → MIC_ACTIVE → RESULT → (next turn) → COMPLETE

import { useState, useEffect, useRef, useCallback } from 'react';
import { SERIES_LIST } from '../data/speaking/index';
import { loadProfile, DEFAULT_AVATAR } from '../utils/storage';
import {
  speakText, stopSpeaking,
  startRecognition, isSpeechSupported,
  compareWords, getMicTimeout,
} from '../utils/speech';
import { useGame } from '../context/GameContext';
import './Speaking.css';

// ── Timing constants ──────────────────────────────────────────
const PAUSE_AFTER_MASCOT = 800;   // ms gap after TTS finishes before mic opens
const CORRECT_HOLD       = 2500;  // ms to show green before auto-advance
const RETRY_COUNTDOWN    = 4;     // seconds to show retry button before auto-skip

// ── State names ───────────────────────────────────────────────
const S = {
  SERIES_SELECT:  'SERIES_SELECT',  // ← chọn FF1 / FF2
  UNIT_SELECT:    'UNIT_SELECT',
  INTRO:          'INTRO',
  MASCOT_SPEAK:   'MASCOT_SPEAK',
  LISTEN_READY:   'LISTEN_READY',   // ← mới: chờ bé bấm mic
  MIC_ACTIVE:     'MIC_ACTIVE',
  RESULT:         'RESULT',
  COMPLETE:       'COMPLETE',
};

export default function Speaking() {
  const { addXp } = useGame();

  const [screen, setScreen]               = useState(S.SERIES_SELECT);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedUnit, setSelectedUnit]   = useState(null);
  const [turnIdx, setTurnIdx]             = useState(0);
  const [interimText, setInterimText]     = useState('');
  const [wordResults, setWordResults]     = useState(null);
  const [isCorrect, setIsCorrect]         = useState(null);
  const [retryCountdown, setRetryCountdown] = useState(null);
  const [sessionXp, setSessionXp]         = useState(0);
  const [micTimeout, setMicTimeout]       = useState(0);
  const [micElapsed, setMicElapsed]       = useState(0);
  const [history, setHistory]             = useState([]);
  const [profile, setProfile] = useState(() => loadProfile()); // lazy: đọc đồng bộ, không flash


  const stopRecRef  = useRef(null);
  const timerRef    = useRef(null);
  const countRef    = useRef(null);
  const micTimerRef = useRef(null);
  const bottomRef   = useRef(null); // auto-scroll anchor

  const dialogues   = selectedUnit?.dialogues || [];
  const currentTurn = dialogues[turnIdx];
  const totalTurns  = dialogues.length;
  const isLastTurn  = turnIdx >= totalTurns - 1;

  const clearTimers = () => {
    clearTimeout(timerRef.current);
    clearInterval(countRef.current);
    clearInterval(micTimerRef.current);
  };

  // ── Auto-scroll to bottom whenever content changes ───────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [history, screen, wordResults, interimText]);

  // ── Advance to next turn ──────────────────────────────────────
  const nextTurn = useCallback((finalWordResults, finalIsCorrect) => {
    clearTimers();
    stopRecRef.current?.();
    stopSpeaking();

    // Save completed turn to history
    if (currentTurn && finalWordResults !== undefined) {
      setHistory(h => [...h, {
        mascotText:  currentTurn.mascot.text,
        wordResults: finalWordResults,
        correct:     finalIsCorrect,
      }]);
    }

    setInterimText('');
    setWordResults(null);
    setIsCorrect(null);
    setRetryCountdown(null);

    if (isLastTurn) {
      setScreen(S.COMPLETE);
    } else {
      setTurnIdx(i => i + 1);
      setScreen(S.MASCOT_SPEAK);
    }
  }, [isLastTurn, currentTurn]);

  // ── Recognition result handler ───────────────────────────────
  const handleFinal = useCallback((transcript) => {
    clearTimers();
    if (!currentTurn) return;

    const results = compareWords(
      transcript,
      currentTurn.child.text,
      currentTurn.child.required,
    );
    const allCorrect = results.every(r => r.correct);

    setWordResults(results);
    setIsCorrect(allCorrect);
    setInterimText('');
    setScreen(S.RESULT);

    if (allCorrect) {
      setSessionXp(x => x + 10);
      addXp?.(10);
      timerRef.current = setTimeout(() => nextTurn(results, true), CORRECT_HOLD);
    } else {
      let count = RETRY_COUNTDOWN;
      setRetryCountdown(count);
      countRef.current = setInterval(() => {
        count--;
        setRetryCountdown(count);
        if (count <= 0) {
          clearInterval(countRef.current);
          nextTurn(results, false);
        }
      }, 1000);
    }
  }, [currentTurn, nextTurn, addXp]);

  // ── Activate microphone ──────────────────────────────────────
  const activateMic = useCallback(() => {
    if (!currentTurn) return;
    const timeout = getMicTimeout(currentTurn.child.text);
    setMicTimeout(timeout);
    setMicElapsed(0);
    setScreen(S.MIC_ACTIVE);
    setInterimText('');

    micTimerRef.current = setInterval(() => {
      setMicElapsed(e => e + 100);
    }, 100);

    stopRecRef.current = startRecognition(
      (interim) => setInterimText(interim),
      (final)   => { clearInterval(micTimerRef.current); handleFinal(final); },
      ()        => { clearInterval(micTimerRef.current); handleFinal(''); },
      timeout,
    );
  }, [currentTurn, handleFinal]);

  // ── Run mascot turn ──────────────────────────────────────────
  const runMascotTurn = useCallback(() => {
    if (!currentTurn) return;
    setScreen(S.MASCOT_SPEAK);
    speakText(currentTurn.mascot.speak, () => {
      // TTS xong → vào LISTEN_READY, bé tự bấm mic
      setScreen(S.LISTEN_READY);
    });
  }, [currentTurn]);

  // Trigger mascot when turnIdx changes
  useEffect(() => {
    if (screen === S.MASCOT_SPEAK && currentTurn) {
      runMascotTurn();
    }
  }, [turnIdx]); // eslint-disable-line

  // ── Replay mascot (bé bấm 🔊 trong LISTEN_READY) ─────────────
  const replayMascot = useCallback(() => {
    if (!currentTurn) return;
    stopSpeaking();
    setScreen(S.MASCOT_SPEAK);
    speakText(currentTurn.mascot.speak, () => {
      setScreen(S.LISTEN_READY);
    });
  }, [currentTurn]);

  // ── Start a unit ─────────────────────────────────────────────
  const startUnit = (unit) => {
    if (!isSpeechSupported()) {
      alert('Trình duyệt không hỗ trợ mic. Hãy dùng Chrome!');
      return;
    }
    setSelectedUnit(unit);
    setTurnIdx(0);
    setSessionXp(0);
    setHistory([]);
    setScreen(S.INTRO);
  };

  // ── Start conversation from intro screen ─────────────────────
  const startConversation = () => {
    setScreen(S.MASCOT_SPEAK);
    setTimeout(() => {
      if (selectedUnit?.dialogues[0]) {
        speakText(selectedUnit.dialogues[0].mascot.speak, () => {
          setScreen(S.LISTEN_READY);
        });
      }
    }, 300);
  };

  // ── Retry current turn ───────────────────────────────────────
  const retryTurn = () => {
    clearTimers();
    setWordResults(null);
    setIsCorrect(null);
    setRetryCountdown(null);
    setInterimText('');
    activateMic();
  };

  // ── Cleanup ──────────────────────────────────────────────────
  useEffect(() => () => {
    clearTimers();
    stopRecRef.current?.();
    stopSpeaking();
  }, []);

  // ════════════════════════════════════════════════════════════
  // RENDER
  // ════════════════════════════════════════════════════════════

  // ── SERIES SELECT ────────────────────────────────────────────
  if (screen === S.SERIES_SELECT) {
    return (
      <div className="speaking-page">
        <div className="speaking-header">
          <img src="/mascot.png" alt="MinhTi" className="sp-header-mascot" />
          <div>
            <h1 className="sp-header-title">Luyện Nói</h1>
            <p className="sp-header-sub">Chọn bộ sách</p>
          </div>
        </div>
        <p className="sp-instruction">Chọn sách để bắt đầu luyện hội thoại!</p>
        <div className="sp-series-list">
          {SERIES_LIST.map((series) => (
            <button
              key={series.id}
              id={`btn-series-${series.id}`}
              className={`sp-series-card ${series.locked ? 'sp-series-locked' : ''}`}
              style={{ '--series-color': series.color, '--series-dark': series.colorDark }}
              onClick={() => {
                if (series.locked) return;
                setSelectedSeries(series);
                setScreen(S.UNIT_SELECT);
              }}
              disabled={series.locked}
            >
              <span className="sp-series-emoji">
                {series.locked ? '🔒' : series.emoji}
              </span>
              <div className="sp-series-info">
                <strong>{series.title}</strong>
                <span>{series.subtitle}</span>
              </div>
              {!series.locked && (
                <span className="sp-series-count">{series.units.length} unit</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── UNIT SELECT ──────────────────────────────────────────────
  if (screen === S.UNIT_SELECT) {
    const units = selectedSeries?.units || [];
    return (
      <div className="speaking-page">
        <div className="speaking-header">
          <button className="sp-back-btn" onClick={() => setScreen(S.SERIES_SELECT)}>←</button>
          <img src="/mascot.png" alt="MinhTi" className="sp-header-mascot" />
          <div>
            <h1 className="sp-header-title">Luyện Nói</h1>
            <p className="sp-header-sub">{selectedSeries?.title}</p>
          </div>
        </div>
        <p className="sp-instruction">Chọn Unit để bắt đầu luyện nói hội thoại!</p>
        <div className="sp-unit-list">
          {units.map((unit) => (
            <button key={unit.id} id={`btn-unit-${unit.unit}`}
              className="sp-unit-card"
              style={{ '--unit-color': unit.color, '--unit-dark': unit.colorDark }}
              onClick={() => startUnit(unit)}
            >
              <span className="sp-unit-emoji">{unit.emoji}</span>
              <div className="sp-unit-info">
                <strong>Unit {unit.unit}: {unit.title}</strong>
                <span>{unit.description}</span>
              </div>
              <span className="sp-unit-count">{unit.dialogues.length} câu</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // INTRO
  if (screen === S.INTRO) {
    return (
      <div className="speaking-page sp-center">
        <img src="/mascot.png" alt="MinhTi" className="sp-intro-mascot bounce-in" />
        <h2 className="sp-intro-title">Unit {selectedUnit.unit}: {selectedUnit.title}</h2>
        <p className="sp-intro-desc">{selectedUnit.description}</p>
        <div className="sp-intro-tips">
          <div className="sp-tip">🔊 Nghe MinhTi nói mẫu rồi bấm 🎤 để luyện!</div>
          <div className="sp-tip">🟢 Từ đúng sẽ xanh, 🔴 từ sai sẽ đỏ</div>
          <div className="sp-tip">💬 {selectedUnit.dialogues.length} câu hội thoại</div>
        </div>
        <button id="btn-start-conv" className="btn btn-primary btn-full" onClick={startConversation}>
          Bắt đầu! 🚀
        </button>
        <button className="btn btn-ghost btn-full" onClick={() => setScreen(S.UNIT_SELECT)}>
          ← Chọn Unit khác
        </button>
      </div>
    );
  }

  // CONVERSATION (+ COMPLETE inline)
  const correctCount   = history.filter(h => h.correct).length;
  const stars          = correctCount === totalTurns ? 3 : correctCount >= Math.ceil(totalTurns * 0.6) ? 2 : 1;
  const completeMsg    = stars === 3 ? 'Tuyệt vời! Con làm rất tốt! 🎉'
                       : stars === 2 ? 'Giỏi lắm! Tiếp tục cố lên! 💪'
                       : 'Cố gắng hơn nữa nhé! 🌱';
  const unitIdx  = selectedSeries?.units?.findIndex(u => u.id === selectedUnit?.id) ?? -1;
  const nextUnit = selectedSeries?.units?.[unitIdx + 1] ?? null;
  return (
    <div className="speaking-page sp-conversation">
      {/* Progress bar */}
      <div className="sp-progress-row">
        <button className="sp-back-btn" onClick={() => {
          clearTimers(); stopRecRef.current?.(); stopSpeaking();
          setScreen(S.UNIT_SELECT);
        }}>✕</button>
        <div className="sp-progress-bar-wrap">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${screen === S.COMPLETE ? 100 : (turnIdx / totalTurns) * 100}%` }} />
          </div>
        </div>
        <span className="sp-turn-num">{screen === S.COMPLETE ? `${totalTurns}/${totalTurns}` : `${turnIdx + 1}/${totalTurns}`}</span>
      </div>

      {/* Unit badge */}
      <div className="sp-unit-badge" style={{ background: selectedUnit.color }}>
        {selectedUnit.emoji} Unit {selectedUnit.unit}: {selectedUnit.title}
      </div>

      {/* ── Scrollable chat area ── */}
      <div className="sp-chat-area">

        {/* History: completed turns */}
        {history.map((h, idx) => (
          <div key={idx} className="sp-history-block">
            {/* MinhTi đã nói */}
            <div className="sp-turn sp-turn-mascot sp-turn-done">
              <img src="/mascot.png" alt="MinhTi" className="sp-turn-avatar sp-avatar-sm" />
              <div className="sp-bubble sp-bubble-mascot sp-bubble-done">
                <p>{h.mascotText}</p>
              </div>
            </div>
            {/* Con đã nói */}
            <div className="sp-turn sp-turn-child sp-turn-done">
              <div className="sp-bubble sp-bubble-child sp-bubble-done">
                <div className="sp-word-row">
                  {h.wordResults.map((w, i) => (
                    <span key={i}
                      className={`sp-word ${w.correct ? 'sp-word-correct' : 'sp-word-wrong'} ${w.placeholder ? 'sp-word-placeholder' : ''}`}
                    >{w.word}</span>
                  ))}
                </div>
              </div>
              <div className="sp-result-badge">{h.correct ? '✅' : '⏭️'}</div>
            </div>
          </div>
        ))}

        {/* COMPLETE: thay current block */}
        {screen === S.COMPLETE ? (
          <div className="sp-complete-inline">
            <div className="sp-complete-stars">{'\u2b50'.repeat(stars)}</div>
            <p className="sp-complete-msg">{completeMsg}</p>
            <div className="sp-complete-xp-badge">⚡ +{sessionXp} XP</div>
            {nextUnit ? (
              <button className="btn btn-primary btn-full sp-complete-next"
                onClick={() => startUnit(nextUnit)}>
                Unit tiếp theo: {nextUnit.title} →
              </button>
            ) : (
              <button className="btn btn-primary btn-full sp-complete-next"
                onClick={() => {
                  clearTimers(); stopRecRef.current?.(); stopSpeaking();
                  setHistory([]); setSessionXp(0);
                  setScreen(S.UNIT_SELECT); setSelectedUnit(null); setTurnIdx(0);
                }}>← Về danh sách unit</button>
            )}
            <button className="btn btn-secondary btn-full"
              onClick={() => startUnit(selectedUnit)}>🔄 Luyện lại unit này</button>
          </div>
        ) : (
        <div className="sp-current-block">
          {/* MinhTi nói */}
          <div className={`sp-turn sp-turn-mascot ${screen === S.MASCOT_SPEAK ? 'active' : ''}`}>
            <img src="/mascot.png" alt="MinhTi"
              className={`sp-turn-avatar ${screen === S.LISTEN_READY ? 'sp-avatar-listen' : ''}`} />
            <div className="sp-bubble sp-bubble-mascot">
              <p>{currentTurn?.mascot.text}</p>
              {screen === S.MASCOT_SPEAK && (
                <span className="sp-speaking-dot">🔊 đang nói...</span>
              )}
            </div>
            {/* Nút replay — chỉ hiện khi LISTEN_READY */}
            {screen === S.LISTEN_READY && (
              <button className="sp-replay-btn" onClick={replayMascot} title="Nghe lại">
                🔊
              </button>
            )}
          </div>

          {/* LISTEN_READY: chỉ còn mic pulsing — nằm SAU word boxes */}

          {/* Con nói */}
          <div className={`sp-turn sp-turn-child ${screen === S.MIC_ACTIVE ? 'active' : ''}`}>
            <div className="sp-bubble sp-bubble-child">
              <div className="sp-word-row">
                {currentTurn && (wordResults
                  ? wordResults.map((w, i) => (
                      <span key={i}
                        className={`sp-word ${w.correct ? 'sp-word-correct' : 'sp-word-wrong'} ${w.placeholder ? 'sp-word-placeholder' : ''}`}
                      >{w.word}</span>
                    ))
                  : currentTurn.child.text.split(/\s+/).map((w, i) => {
                      const isPlaceholder = w.startsWith('[') && w.endsWith(']');
                      const display = isPlaceholder ? w.slice(1, -1) : w;
                      return (
                        <span key={i}
                          className={`sp-word ${isPlaceholder ? 'sp-word-placeholder' : ''} ${(screen === S.MIC_ACTIVE || screen === S.LISTEN_READY) ? 'sp-word-idle' : ''}`}
                        >{display}</span>
                      );
                    })
                )}
              </div>
              {interimText && screen === S.MIC_ACTIVE && (
                <div className="sp-interim">🎤 "{interimText}"</div>
              )}
            </div>
            <div className={`sp-mic-indicator ${screen === S.MIC_ACTIVE ? 'listening' : ''}`}>
              {screen === S.MIC_ACTIVE
                ? '🎤'
                : profile?.photo
                  ? <img src={profile.photo} alt="avatar" className="sp-child-avatar" />
                : <span>{profile?.avatar || DEFAULT_AVATAR}</span>
              }
            </div>
          </div>

          {/* Mic pulsing — chỉ hiện LISTEN_READY, nằm dưới word boxes */}
          {screen === S.LISTEN_READY && (
            <div className="sp-listen-ready-row">
              <button className="sp-mic-big" onClick={activateMic}>
                <span className="sp-mic-ring sp-mic-ring-1" />
                <span className="sp-mic-ring sp-mic-ring-2" />
                <span className="sp-mic-ring sp-mic-ring-3" />
                <span className="sp-mic-icon">🎤</span>
              </button>
            </div>
          )}

          {/* Mic progress bar */}
          {screen === S.MIC_ACTIVE && (
            <div className="sp-mic-bar-wrap">
              <div className="sp-mic-bar-fill"
                style={{ width: `${Math.min(100, (micElapsed / micTimeout) * 100)}%` }}
              />
            </div>
          )}

          {/* Result banner */}
          {screen === S.RESULT && (
            <div className={`sp-result-banner ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? (
                <span>✅ Tuyệt vời! Đúng rồi! 🎉</span>
              ) : (
                <div className="sp-retry-row">
                  <span>❌ Chưa đúng lắm!</span>
                  <button id="btn-retry-speak" className="sp-retry-btn" onClick={retryTurn}>
                    🔄 Thử lại {retryCountdown > 0 ? `(${retryCountdown}s)` : ''}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        )}

        {/* Auto-scroll anchor */}
        <div ref={bottomRef} style={{ height: 32 }} />
      </div>
    </div>
  );
}
