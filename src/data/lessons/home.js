// src/data/lessons/home.js
// Chủ đề 11: Ngôi nhà & Phòng ốc

export default [
  {
    id: 'hom-1', type: 'multiple_choice',
    question: '"Kitchen" có nghĩa là gì?', audio: 'Kitchen',
    options: [
      { text: 'Nhà bếp', emoji: '🍳', correct: true },
      { text: 'Phòng ngủ', emoji: '🛏️', correct: false },
      { text: 'Phòng khách', emoji: '🛋️', correct: false },
      { text: 'Nhà vệ sinh', emoji: '🚿', correct: false },
    ],
  },
  {
    id: 'hom-2', type: 'multiple_choice',
    question: '"Bedroom" có nghĩa là gì?', audio: 'Bedroom',
    options: [
      { text: 'Phòng ngủ', emoji: '🛏️', correct: true },
      { text: 'Nhà bếp', emoji: '🍳', correct: false },
      { text: 'Phòng tắm', emoji: '🚿', correct: false },
      { text: 'Sân vườn', emoji: '🌿', correct: false },
    ],
  },
  {
    id: 'hom-3', type: 'match_pairs',
    question: 'Nối phòng với tên tiếng Anh',
    pairs: [
      { en: 'Living room 🛋️', vi: 'Phòng khách' },
      { en: 'Bathroom 🚿', vi: 'Phòng tắm' },
      { en: 'Garden 🌿', vi: 'Sân vườn' },
      { en: 'Garage 🚗', vi: 'Nhà để xe' },
    ],
  },
  {
    id: 'hom-4', type: 'multiple_choice',
    question: '"Door" có nghĩa là gì?', audio: 'Door',
    options: [
      { text: 'Cái cửa', emoji: '🚪', correct: true },
      { text: 'Cái cửa sổ', emoji: '🪟', correct: false },
      { text: 'Cái bàn', emoji: '🪑', correct: false },
      { text: 'Cái ghế', emoji: '🛋️', correct: false },
    ],
  },
  {
    id: 'hom-5', type: 'fill_blank',
    question: '"I sleep in my ___" (Tôi ngủ trong phòng ngủ)',
    audio: 'I sleep in my bedroom', answer: 'bedroom', hint: 'bed...',
    options: ['bedroom', 'bathroom', 'kitchen', 'garden'],
  },
  {
    id: 'hom-6', type: 'multiple_choice',
    question: '"Table" có nghĩa là gì?', audio: 'Table',
    options: [
      { text: 'Cái bàn', emoji: '🪑', correct: true },
      { text: 'Cái ghế', emoji: '💺', correct: false },
      { text: 'Cái đèn', emoji: '💡', correct: false },
      { text: 'Cái tủ', emoji: '🗄️', correct: false },
    ],
  },
  {
    id: 'hom-7', type: 'tap_words',
    question: 'Sắp xếp: "Nhà tôi có 3 phòng ngủ"',
    answer: ['My', 'house', 'has', 'three', 'bedrooms'],
    wordBank: ['My', 'house', 'has', 'three', 'bedrooms', 'two', 'kitchen'],
  },
  {
    id: 'hom-8', type: 'match_pairs',
    question: 'Nối đồ vật trong nhà',
    pairs: [
      { en: 'Sofa 🛋️', vi: 'Ghế sofa' },
      { en: 'Lamp 💡', vi: 'Đèn' },
      { en: 'Mirror 🪞', vi: 'Gương' },
      { en: 'Bed 🛏️', vi: 'Cái giường' },
    ],
  },
];
