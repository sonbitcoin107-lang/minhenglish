// src/data/lessons/hobbies.js
// Chủ đề 16: Sở thích & Trò chơi

export default [
  {
    id: 'hob-1', type: 'multiple_choice',
    question: '"Football" có nghĩa là gì?', audio: 'Football',
    options: [
      { text: 'Bóng đá', emoji: '⚽', correct: true },
      { text: 'Bóng rổ', emoji: '🏀', correct: false },
      { text: 'Bóng chuyền', emoji: '🏐', correct: false },
      { text: 'Bóng bầu dục', emoji: '🏈', correct: false },
    ],
  },
  {
    id: 'hob-2', type: 'multiple_choice',
    question: '"Reading" có nghĩa là gì?', audio: 'Reading',
    options: [
      { text: 'Đọc sách', emoji: '📚', correct: true },
      { text: 'Vẽ tranh', emoji: '🎨', correct: false },
      { text: 'Chơi game', emoji: '🎮', correct: false },
      { text: 'Xem phim', emoji: '🎬', correct: false },
    ],
  },
  {
    id: 'hob-3', type: 'match_pairs',
    question: 'Nối sở thích',
    pairs: [
      { en: 'Cooking 👨‍🍳', vi: 'Nấu ăn' },
      { en: 'Painting 🎨', vi: 'Vẽ tranh' },
      { en: 'Singing 🎤', vi: 'Ca hát' },
      { en: 'Dancing 💃', vi: 'Khiêu vũ' },
    ],
  },
  {
    id: 'hob-4', type: 'fill_blank',
    question: '"My hobby is ___" (Sở thích của tôi là vẽ)',
    audio: 'My hobby is drawing', answer: 'drawing', hint: 'draw...',
    options: ['drawing', 'drinking', 'driving', 'dreaming'],
  },
  {
    id: 'hob-5', type: 'multiple_choice',
    question: '"Swimming" có nghĩa là gì?', audio: 'Swimming',
    options: [
      { text: 'Bơi lội', emoji: '🏊', correct: true },
      { text: 'Chạy bộ', emoji: '🏃', correct: false },
      { text: 'Đạp xe', emoji: '🚲', correct: false },
      { text: 'Leo núi', emoji: '🧗', correct: false },
    ],
  },
  {
    id: 'hob-6', type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích chơi bóng đá"',
    answer: ['I', 'like', 'playing', 'football'],
    wordBank: ['I', 'like', 'playing', 'football', 'basketball', 'hate', 'reading'],
  },
  {
    id: 'hob-7', type: 'multiple_choice',
    question: '"Gaming" có nghĩa là gì?', audio: 'Gaming',
    options: [
      { text: 'Chơi trò chơi điện tử', emoji: '🎮', correct: true },
      { text: 'Xem phim', emoji: '🎬', correct: false },
      { text: 'Nghe nhạc', emoji: '🎵', correct: false },
      { text: 'Đọc sách', emoji: '📚', correct: false },
    ],
  },
  {
    id: 'hob-8', type: 'match_pairs',
    question: 'Nối thể thao',
    pairs: [
      { en: 'Tennis 🎾', vi: 'Quần vợt' },
      { en: 'Chess ♟️', vi: 'Cờ vua' },
      { en: 'Cycling 🚲', vi: 'Đạp xe' },
      { en: 'Fishing 🎣', vi: 'Câu cá' },
    ],
  },
];
