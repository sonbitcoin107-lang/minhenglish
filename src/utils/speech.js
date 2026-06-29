// src/utils/speech.js
// Web Speech Recognition & Synthesis utilities
// Uses browser built-in APIs — 100% free, no API key needed

// ─── CONSTANTS ────────────────────────────────────────────────
const WORD_TIME_MS = 600;     // ms per word for dynamic mic timeout
const MIN_MIC_MS   = 5000;   // minimum mic wait
const MAX_MIC_MS   = 12000;  // maximum mic wait

// ─── HELPERS ──────────────────────────────────────────────────
// Normalize a word for comparison
const normalize = (word) =>
  word
    .toLowerCase()
    .replace(/[.,!?'"]/g, '')
    .replace(/n't/g, ' not')
    .replace(/i'm/g, 'i am')
    .replace(/it's/g, 'it is')
    .replace(/let's/g, 'let us')
    .replace(/what's/g, 'what is')
    .replace(/that's/g, 'that is')
    .replace(/don't/g, 'do not')
    .replace(/doesn't/g, 'does not')
    .trim();

// Calculate mic timeout based on sentence length
export const getMicTimeout = (text) => {
  const words = text.split(/\s+/).length;
  return Math.min(MAX_MIC_MS, Math.max(MIN_MIC_MS, words * WORD_TIME_MS + 2000));
};

// ─── WORD COMPARISON ──────────────────────────────────────────
/**
 * Compare spoken text against expected text word by word.
 * Returns array of { word, correct } for each expected word.
 * Words marked [NAME] or [SKIP] are always correct.
 */
export const compareWords = (spokenRaw, expectedText, requiredWords) => {
  const spoken = normalize(spokenRaw || '').split(/\s+/).filter(Boolean);

  return expectedText.split(/\s+/).map((raw) => {
    // Placeholder words always correct
    if (raw.startsWith('[') && raw.endsWith(']')) {
      return { word: raw.slice(1, -1), correct: true, placeholder: true };
    }

    const norm = normalize(raw);

    // Only check "required" words if list provided
    if (requiredWords && !requiredWords.includes(norm)) {
      return { word: raw, correct: true, optional: true };
    }

    // Check if spoken contains this word (order-tolerant for simple words)
    const found = spoken.some(s => normalize(s) === norm || s.includes(norm) || norm.includes(s));
    return { word: raw, correct: found };
  });
};

// ─── TTS — Text To Speech ─────────────────────────────────────
export const speakText = (text, onEnd) => {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.82;
  utterance.pitch = 1.05;
  utterance.volume = 1;

  // Prefer a female en-US voice if available
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    v.lang.startsWith('en') && v.name.toLowerCase().includes('female')
  ) || voices.find(v => v.lang.startsWith('en-US')) || null;

  if (preferred) utterance.voice = preferred;
  if (onEnd) utterance.onend = onEnd;

  window.speechSynthesis.speak(utterance);
  return utterance;
};

export const stopSpeaking = () => window.speechSynthesis.cancel();

// ─── SPEECH RECOGNITION ───────────────────────────────────────
const SpeechRecognitionAPI =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export const isSpeechSupported = () => !!SpeechRecognitionAPI;

/**
 * Start speech recognition session.
 * @param {Function} onInterim - called with interim transcript string
 * @param {Function} onFinal   - called with final transcript string
 * @param {Function} onError   - called on error
 * @param {number}   timeout   - ms before auto-stop
 * @returns {Function} stop()  - function to manually stop
 */
export const startRecognition = (onInterim, onFinal, onError, timeout = 7000) => {
  if (!SpeechRecognitionAPI) {
    onError?.('NOT_SUPPORTED');
    return () => {};
  }

  const recognition = new SpeechRecognitionAPI();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 3;

  let finalResult = '';
  let autoTimer = null;
  let ended = false;

  const finish = (transcript) => {
    if (ended) return;
    ended = true;
    clearTimeout(autoTimer);
    recognition.abort();
    onFinal?.(transcript || finalResult);
  };

  recognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) {
        finalResult = t;
        finish(t);
      } else {
        interim += t;
      }
    }
    if (interim) onInterim?.(interim);
  };

  recognition.onerror = (e) => {
    if (ended) return;
    if (e.error === 'no-speech') {
      finish('');
    } else {
      ended = true;
      onError?.(e.error);
    }
  };

  recognition.onend = () => {
    if (!ended) finish(finalResult);
  };

  recognition.start();

  // Auto-stop after timeout
  autoTimer = setTimeout(() => finish(finalResult), timeout);

  return () => finish(finalResult); // manual stop
};
