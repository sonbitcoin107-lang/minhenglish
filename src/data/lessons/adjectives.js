// src/data/lessons/adjectives.js
// Chủ đề 18: Tính từ mô tả

export default [
  {
    id: 'adj-1', type: 'multiple_choice',
    question: '"Big" có nghĩa là gì?', audio: 'Big',
    options: [
      { text: 'To / Lớn', emoji: '🐘', correct: true },
      { text: 'Nhỏ', emoji: '🐭', correct: false },
      { text: 'Cao', emoji: '🦒', correct: false },
      { text: 'Thấp', emoji: '🐢', correct: false },
    ],
  },
  {
    id: 'adj-2', type: 'multiple_choice',
    question: '"Fast" có nghĩa là gì?', audio: 'Fast',
    options: [
      { text: 'Nhanh', emoji: '🚀', correct: true },
      { text: 'Chậm', emoji: '🐌', correct: false },
      { text: 'Mạnh', emoji: '💪', correct: false },
      { text: 'Yếu', emoji: '😞', correct: false },
    ],
  },
  {
    id: 'adj-3', type: 'match_pairs',
    question: 'Nối tính từ trái nghĩa',
    pairs: [
      { en: 'Hot 🥵', vi: 'Nóng' },
      { en: 'Cold ❄️', vi: 'Lạnh' },
      { en: 'Long 📏', vi: 'Dài' },
      { en: 'Short 📐', vi: 'Ngắn' },
    ],
  },
  {
    id: 'adj-4', type: 'fill_blank',
    question: '"The elephant is very ___" (Con voi rất to)',
    audio: 'The elephant is very big', answer: 'big', hint: 'b_g',
    options: ['big', 'bad', 'bag', 'bug'],
  },
  {
    id: 'adj-5', type: 'multiple_choice',
    question: '"Beautiful" có nghĩa là gì?', audio: 'Beautiful',
    options: [
      { text: 'Đẹp / Xinh đẹp', emoji: '🌸', correct: true },
      { text: 'Xấu', emoji: '😕', correct: false },
      { text: 'Tốt', emoji: '😊', correct: false },
      { text: 'Tồi', emoji: '😞', correct: false },
    ],
  },
  {
    id: 'adj-6', type: 'tap_words',
    question: 'Sắp xếp: "Con mèo nhỏ và dễ thương"',
    answer: ['The', 'cat', 'is', 'small', 'and', 'cute'],
    wordBank: ['The', 'cat', 'is', 'small', 'and', 'cute', 'big', 'ugly'],
  },
  {
    id: 'adj-7', type: 'match_pairs',
    question: 'Nối tính từ',
    pairs: [
      { en: 'Tall 🦒', vi: 'Cao' },
      { en: 'Strong 💪', vi: 'Mạnh mẽ' },
      { en: 'Funny 😂', vi: 'Buồn cười' },
      { en: 'Brave 🦁', vi: 'Dũng cảm' },
    ],
  },
  {
    id: 'adj-8', type: 'multiple_choice',
    question: '"Delicious" có nghĩa là gì?', audio: 'Delicious',
    options: [
      { text: 'Ngon / Thơm ngon', emoji: '😋', correct: true },
      { text: 'Đắng', emoji: '😖', correct: false },
      { text: 'Cay', emoji: '🌶️', correct: false },
      { text: 'Chua', emoji: '🍋', correct: false },
    ],
  },
];
