// src/data/lessons/clothes.js
// Chủ đề 12: Quần áo

export default [
  {
    id: 'clo-1', type: 'multiple_choice',
    question: '"Shirt" có nghĩa là gì?', audio: 'Shirt',
    options: [
      { text: 'Áo sơ mi', emoji: '👕', correct: true },
      { text: 'Quần dài', emoji: '👖', correct: false },
      { text: 'Váy', emoji: '👗', correct: false },
      { text: 'Áo khoác', emoji: '🧥', correct: false },
    ],
  },
  {
    id: 'clo-2', type: 'multiple_choice',
    question: '"Shoes" có nghĩa là gì?', audio: 'Shoes',
    options: [
      { text: 'Đôi giày', emoji: '👟', correct: true },
      { text: 'Đôi tất', emoji: '🧦', correct: false },
      { text: 'Cái mũ', emoji: '🧢', correct: false },
      { text: 'Cái túi', emoji: '👜', correct: false },
    ],
  },
  {
    id: 'clo-3', type: 'match_pairs',
    question: 'Nối quần áo',
    pairs: [
      { en: 'Hat 🎩', vi: 'Cái mũ' },
      { en: 'Dress 👗', vi: 'Cái váy' },
      { en: 'Jacket 🧥', vi: 'Áo khoác' },
      { en: 'Socks 🧦', vi: 'Đôi tất' },
    ],
  },
  {
    id: 'clo-4', type: 'fill_blank',
    question: '"I wear a ___ to school" (Tôi mặc áo sơ mi đi học)',
    audio: 'I wear a shirt to school', answer: 'shirt', hint: 'sh..t',
    options: ['shirt', 'skirt', 'short', 'sharp'],
  },
  {
    id: 'clo-5', type: 'multiple_choice',
    question: '"Pants" có nghĩa là gì?', audio: 'Pants',
    options: [
      { text: 'Quần dài', emoji: '👖', correct: true },
      { text: 'Quần short', emoji: '🩳', correct: false },
      { text: 'Váy', emoji: '👗', correct: false },
      { text: 'Áo phông', emoji: '👕', correct: false },
    ],
  },
  {
    id: 'clo-6', type: 'tap_words',
    question: 'Sắp xếp: "Tôi thích mặc áo màu xanh"',
    answer: ['I', 'like', 'wearing', 'a', 'blue', 'shirt'],
    wordBank: ['I', 'like', 'wearing', 'a', 'blue', 'shirt', 'red', 'hat'],
  },
  {
    id: 'clo-7', type: 'multiple_choice',
    question: '"Gloves" có nghĩa là gì?', audio: 'Gloves',
    options: [
      { text: 'Đôi găng tay', emoji: '🧤', correct: true },
      { text: 'Đôi giày', emoji: '👟', correct: false },
      { text: 'Cái mũ', emoji: '🎩', correct: false },
      { text: 'Cái khăn', emoji: '🧣', correct: false },
    ],
  },
  {
    id: 'clo-8', type: 'match_pairs',
    question: 'Nối thêm phụ kiện',
    pairs: [
      { en: 'Scarf 🧣', vi: 'Cái khăn quàng' },
      { en: 'Bag 👜', vi: 'Cái túi' },
      { en: 'Belt 🪢', vi: 'Cái dây lưng' },
      { en: 'Glasses 👓', vi: 'Cái kính' },
    ],
  },
];
