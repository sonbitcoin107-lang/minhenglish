// src/components/exercises/TapWords.jsx
import { useState, useMemo } from 'react';
import './TapWords.css';

// Fisher-Yates shuffle — trộn ngẫu nhiên mỗi lần render câu mới
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TapWords({ question, answer, wordBank, onAnswer, disabled }) {
  // Shuffle một lần khi câu hỏi thay đổi (key prop ở Lesson.jsx reset component)
  const shuffledBank = useMemo(() => shuffle(wordBank), [wordBank]);
  const [selected, setSelected] = useState([]);

  const handleWordBankClick = (word, idx) => {
    if (disabled) return;
    if (selected.find(s => s.idx === idx)) return;
    setSelected(prev => [...prev, { word, idx }]);
  };

  const handleAnswerClick = (idx) => {
    if (disabled) return;
    setSelected(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCheck = () => {
    const userAnswer = selected.map(s => s.word);
    const correct = JSON.stringify(userAnswer) === JSON.stringify(answer);
    onAnswer(correct);
  };

  const isWordUsed = (idx) => selected.some(s => s.idx === idx);

  return (
    <div className="tapwords-container fade-in">
      <h2 className="tapwords-question">{question}</h2>

      {/* Answer area */}
      <div className="answer-area tapwords-answer">
        {selected.length === 0 ? (
          <span className="tapwords-placeholder">Chạm vào các từ bên dưới...</span>
        ) : (
          selected.map((item, i) => (
            <button
              key={i}
              id={`answer-word-${i}`}
              className="word-chip active"
              onClick={() => handleAnswerClick(i)}
            >
              {item.word}
            </button>
          ))
        )}
      </div>

      <div className="tapwords-divider" />

      {/* Word bank — đã được shuffle ngẫu nhiên */}
      <div className="tapwords-bank">
        {shuffledBank.map((word, idx) => (
          <button
            key={idx}
            id={`bank-word-${idx}`}
            className={`word-chip ${isWordUsed(idx) ? 'used' : ''}`}
            onClick={() => handleWordBankClick(word, idx)}
            disabled={disabled}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Check button */}
      {!disabled && selected.length > 0 && (
        <button
          id="btn-check-tapwords"
          className="btn btn-primary btn-full mt-4"
          onClick={handleCheck}
        >
          Kiểm tra ✓
        </button>
      )}
    </div>
  );
}
