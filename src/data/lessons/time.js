// src/data/lessons/time.js
// Chủ đề 13: Thời gian

export default [
  {
    id: 'tim-1', type: 'multiple_choice',
    question: '"Today" có nghĩa là gì?', audio: 'Today',
    options: [
      { text: 'Hôm nay', emoji: '📅', correct: true },
      { text: 'Hôm qua', emoji: '⬅️', correct: false },
      { text: 'Ngày mai', emoji: '➡️', correct: false },
      { text: 'Tuần này', emoji: '🗓️', correct: false },
    ],
  },
  {
    id: 'tim-2', type: 'match_pairs',
    question: 'Nối từ chỉ thời gian',
    pairs: [
      { en: 'Yesterday 📆', vi: 'Hôm qua' },
      { en: 'Tomorrow 🌅', vi: 'Ngày mai' },
      { en: 'Morning ☀️', vi: 'Buổi sáng' },
      { en: 'Night 🌙', vi: 'Ban đêm' },
    ],
  },
  {
    id: 'tim-3', type: 'multiple_choice',
    question: '"Monday" là thứ mấy?', audio: 'Monday',
    options: [
      { text: 'Thứ Hai', emoji: '📅', correct: true },
      { text: 'Thứ Ba', emoji: '📅', correct: false },
      { text: 'Thứ Tư', emoji: '📅', correct: false },
      { text: 'Thứ Sáu', emoji: '📅', correct: false },
    ],
  },
  {
    id: 'tim-4', type: 'multiple_choice',
    question: '"Weekend" có nghĩa là gì?', audio: 'Weekend',
    options: [
      { text: 'Cuối tuần', emoji: '🎉', correct: true },
      { text: 'Ngày thường', emoji: '📅', correct: false },
      { text: 'Ngày lễ', emoji: '🎊', correct: false },
      { text: 'Mùa hè', emoji: '☀️', correct: false },
    ],
  },
  {
    id: 'tim-5', type: 'fill_blank',
    question: '"___ is my favorite day!" (Thứ Sáu là ngày yêu thích của tôi!)',
    audio: 'Friday is my favorite day', answer: 'Friday', hint: 'Fri...',
    options: ['Friday', 'Monday', 'Sunday', 'Tuesday'],
  },
  {
    id: 'tim-6', type: 'match_pairs',
    question: 'Nối các thứ trong tuần',
    pairs: [
      { en: 'Tuesday', vi: 'Thứ Ba' },
      { en: 'Wednesday', vi: 'Thứ Tư' },
      { en: 'Thursday', vi: 'Thứ Năm' },
      { en: 'Saturday', vi: 'Thứ Bảy' },
    ],
  },
  {
    id: 'tim-7', type: 'tap_words',
    question: 'Sắp xếp: "Hôm nay là thứ Hai"',
    answer: ['Today', 'is', 'Monday'],
    wordBank: ['Today', 'is', 'Monday', 'Yesterday', 'Friday', 'Sunday'],
  },
  {
    id: 'tim-8', type: 'multiple_choice',
    question: '"Year" có nghĩa là gì?', audio: 'Year',
    options: [
      { text: 'Năm', emoji: '🗓️', correct: true },
      { text: 'Tháng', emoji: '📅', correct: false },
      { text: 'Tuần', emoji: '📆', correct: false },
      { text: 'Ngày', emoji: '☀️', correct: false },
    ],
  },
];
