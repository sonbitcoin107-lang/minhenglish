// src/data/lessons/phrases.js
// Chủ đề 20: Câu giao tiếp hàng ngày

export default [
  {
    id: 'phr-1', type: 'multiple_choice',
    question: '"How old are you?" nghĩa là gì?', audio: 'How old are you',
    options: [
      { text: 'Bạn bao nhiêu tuổi?', emoji: '🎂', correct: true },
      { text: 'Bạn tên gì?', emoji: '👤', correct: false },
      { text: 'Bạn ở đâu?', emoji: '📍', correct: false },
      { text: 'Bạn khỏe không?', emoji: '💪', correct: false },
    ],
  },
  {
    id: 'phr-2', type: 'multiple_choice',
    question: '"Where are you from?" nghĩa là gì?', audio: 'Where are you from',
    options: [
      { text: 'Bạn từ đâu đến?', emoji: '🗺️', correct: true },
      { text: 'Bạn đang ở đâu?', emoji: '📍', correct: false },
      { text: 'Bạn đang đi đâu?', emoji: '🚶', correct: false },
      { text: 'Bạn muốn gì?', emoji: '🤔', correct: false },
    ],
  },
  {
    id: 'phr-3', type: 'match_pairs',
    question: 'Nối câu với nghĩa',
    pairs: [
      { en: 'I am fine 😊', vi: 'Tôi khỏe' },
      { en: 'Me too! 🙋', vi: 'Tôi cũng vậy!' },
      { en: 'I don\'t know 🤷', vi: 'Tôi không biết' },
      { en: 'Of course! ✅', vi: 'Tất nhiên rồi!' },
    ],
  },
  {
    id: 'phr-4', type: 'fill_blank',
    question: '"___ you speak English?" (Bạn có nói tiếng Anh không?)',
    audio: 'Can you speak English', answer: 'Can', hint: 'C_n',
    options: ['Can', 'Are', 'Do', 'Is'],
  },
  {
    id: 'phr-5', type: 'multiple_choice',
    question: '"What time is it?" nghĩa là gì?', audio: 'What time is it',
    options: [
      { text: 'Mấy giờ rồi?', emoji: '⏰', correct: true },
      { text: 'Hôm nay thứ mấy?', emoji: '📅', correct: false },
      { text: 'Bạn làm gì?', emoji: '🤔', correct: false },
      { text: 'Bạn thích gì?', emoji: '❤️', correct: false },
    ],
  },
  {
    id: 'phr-6', type: 'tap_words',
    question: 'Sắp xếp: "Tên tôi là Minh, tôi 7 tuổi"',
    answer: ['My', 'name', 'is', 'Minh', 'I', 'am', 'seven'],
    wordBank: ['My', 'name', 'is', 'Minh', 'I', 'am', 'seven', 'eight', 'your'],
  },
  {
    id: 'phr-7', type: 'multiple_choice',
    question: '"Excuse me" nghĩa là gì?', audio: 'Excuse me',
    options: [
      { text: 'Xin lỗi / Cho tôi hỏi', emoji: '🙋', correct: true },
      { text: 'Cảm ơn', emoji: '🙏', correct: false },
      { text: 'Tạm biệt', emoji: '👋', correct: false },
      { text: 'Chào buổi sáng', emoji: '🌅', correct: false },
    ],
  },
  {
    id: 'phr-8', type: 'match_pairs',
    question: 'Nối câu giao tiếp',
    pairs: [
      { en: 'Well done! 🏆', vi: 'Làm tốt lắm!' },
      { en: 'Be careful! ⚠️', vi: 'Cẩn thận!' },
      { en: 'Come here! 👋', vi: 'Lại đây!' },
      { en: 'Hurry up! 🏃', vi: 'Nhanh lên!' },
    ],
  },
];
