// src/data/lessons/actions.js
// Chủ đề 15: Hành động & Động từ

export default [
  {
    id: 'act-1', type: 'multiple_choice',
    question: '"Run" có nghĩa là gì?', audio: 'Run',
    options: [
      { text: 'Chạy', emoji: '🏃', correct: true },
      { text: 'Nhảy', emoji: '🤸', correct: false },
      { text: 'Đi bộ', emoji: '🚶', correct: false },
      { text: 'Bơi', emoji: '🏊', correct: false },
    ],
  },
  {
    id: 'act-2', type: 'multiple_choice',
    question: '"Jump" có nghĩa là gì?', audio: 'Jump',
    options: [
      { text: 'Nhảy', emoji: '🤸', correct: true },
      { text: 'Chạy', emoji: '🏃', correct: false },
      { text: 'Ngã', emoji: '🤕', correct: false },
      { text: 'Leo', emoji: '🧗', correct: false },
    ],
  },
  {
    id: 'act-3', type: 'match_pairs',
    question: 'Nối động từ với nghĩa',
    pairs: [
      { en: 'Eat 🍽️', vi: 'Ăn' },
      { en: 'Drink 💧', vi: 'Uống' },
      { en: 'Sleep 😴', vi: 'Ngủ' },
      { en: 'Play 🎮', vi: 'Chơi' },
    ],
  },
  {
    id: 'act-4', type: 'fill_blank',
    question: '"I like to ___ in the pool" (Tôi thích bơi trong hồ)',
    audio: 'I like to swim in the pool', answer: 'swim', hint: 'sw..m',
    options: ['swim', 'sing', 'spin', 'slim'],
  },
  {
    id: 'act-5', type: 'multiple_choice',
    question: '"Draw" có nghĩa là gì?', audio: 'Draw',
    options: [
      { text: 'Vẽ', emoji: '🎨', correct: true },
      { text: 'Đọc', emoji: '📖', correct: false },
      { text: 'Viết', emoji: '✏️', correct: false },
      { text: 'Hát', emoji: '🎤', correct: false },
    ],
  },
  {
    id: 'act-6', type: 'tap_words',
    question: 'Sắp xếp: "Tôi có thể nhảy rất cao"',
    answer: ['I', 'can', 'jump', 'very', 'high'],
    wordBank: ['I', 'can', 'jump', 'very', 'high', 'run', 'fast'],
  },
  {
    id: 'act-7', type: 'match_pairs',
    question: 'Nối thêm hành động',
    pairs: [
      { en: 'Sing 🎵', vi: 'Hát' },
      { en: 'Dance 💃', vi: 'Nhảy múa' },
      { en: 'Read 📖', vi: 'Đọc sách' },
      { en: 'Write ✏️', vi: 'Viết' },
    ],
  },
  {
    id: 'act-8', type: 'multiple_choice',
    question: '"Fly" có nghĩa là gì?', audio: 'Fly',
    options: [
      { text: 'Bay', emoji: '✈️', correct: true },
      { text: 'Bơi', emoji: '🏊', correct: false },
      { text: 'Chạy', emoji: '🏃', correct: false },
      { text: 'Nhảy', emoji: '🤸', correct: false },
    ],
  },
];
