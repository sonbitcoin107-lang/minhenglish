// src/data/lessons/nature.js
// Chủ đề 19: Thiên nhiên

export default [
  {
    id: 'nat-1', type: 'multiple_choice',
    question: '"Sun" có nghĩa là gì?', audio: 'Sun',
    options: [
      { text: 'Mặt trời', emoji: '☀️', correct: true },
      { text: 'Mặt trăng', emoji: '🌙', correct: false },
      { text: 'Ngôi sao', emoji: '⭐', correct: false },
      { text: 'Đám mây', emoji: '☁️', correct: false },
    ],
  },
  {
    id: 'nat-2', type: 'match_pairs',
    question: 'Nối thiên nhiên',
    pairs: [
      { en: 'Moon 🌙', vi: 'Mặt trăng' },
      { en: 'Star ⭐', vi: 'Ngôi sao' },
      { en: 'Cloud ☁️', vi: 'Đám mây' },
      { en: 'Rain 🌧️', vi: 'Cơn mưa' },
    ],
  },
  {
    id: 'nat-3', type: 'multiple_choice',
    question: '"Ocean" có nghĩa là gì?', audio: 'Ocean',
    options: [
      { text: 'Đại dương', emoji: '🌊', correct: true },
      { text: 'Hồ', emoji: '🏞️', correct: false },
      { text: 'Sông', emoji: '🏔️', correct: false },
      { text: 'Suối', emoji: '💧', correct: false },
    ],
  },
  {
    id: 'nat-4', type: 'fill_blank',
    question: '"I see a beautiful ___" (Tôi nhìn thấy một ngọn núi đẹp)',
    audio: 'I see a beautiful mountain', answer: 'mountain', hint: 'mou...',
    options: ['mountain', 'fountain', 'counting', 'mounting'],
  },
  {
    id: 'nat-5', type: 'multiple_choice',
    question: '"Forest" có nghĩa là gì?', audio: 'Forest',
    options: [
      { text: 'Rừng', emoji: '🌲', correct: true },
      { text: 'Đồng cỏ', emoji: '🌾', correct: false },
      { text: 'Sa mạc', emoji: '🏜️', correct: false },
      { text: 'Bãi biển', emoji: '🏖️', correct: false },
    ],
  },
  {
    id: 'nat-6', type: 'tap_words',
    question: 'Sắp xếp: "Bầu trời ban đêm có nhiều ngôi sao"',
    answer: ['The', 'night', 'sky', 'has', 'many', 'stars'],
    wordBank: ['The', 'night', 'sky', 'has', 'many', 'stars', 'clouds', 'day'],
  },
  {
    id: 'nat-7', type: 'match_pairs',
    question: 'Nối địa hình thiên nhiên',
    pairs: [
      { en: 'River 🏞️', vi: 'Con sông' },
      { en: 'Desert 🏜️', vi: 'Sa mạc' },
      { en: 'Island 🏝️', vi: 'Hòn đảo' },
      { en: 'Waterfall 💦', vi: 'Thác nước' },
    ],
  },
  {
    id: 'nat-8', type: 'multiple_choice',
    question: '"Rainbow" có nghĩa là gì?', audio: 'Rainbow',
    options: [
      { text: 'Cầu vồng', emoji: '🌈', correct: true },
      { text: 'Sấm sét', emoji: '⚡', correct: false },
      { text: 'Tuyết', emoji: '❄️', correct: false },
      { text: 'Gió', emoji: '💨', correct: false },
    ],
  },
];
