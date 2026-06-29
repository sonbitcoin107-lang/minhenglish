// src/data/lessons/emotions.js
// Chủ đề 14: Cảm xúc

export default [
  {
    id: 'emo-1', type: 'multiple_choice',
    question: '"Happy" có nghĩa là gì?', audio: 'Happy',
    options: [
      { text: 'Vui / Hạnh phúc', emoji: '😄', correct: true },
      { text: 'Buồn', emoji: '😢', correct: false },
      { text: 'Tức giận', emoji: '😠', correct: false },
      { text: 'Sợ hãi', emoji: '😨', correct: false },
    ],
  },
  {
    id: 'emo-2', type: 'multiple_choice',
    question: '"Sad" có nghĩa là gì?', audio: 'Sad',
    options: [
      { text: 'Buồn', emoji: '😢', correct: true },
      { text: 'Vui', emoji: '😄', correct: false },
      { text: 'Ngạc nhiên', emoji: '😲', correct: false },
      { text: 'Mệt', emoji: '😴', correct: false },
    ],
  },
  {
    id: 'emo-3', type: 'match_pairs',
    question: 'Nối cảm xúc',
    pairs: [
      { en: 'Angry 😠', vi: 'Tức giận' },
      { en: 'Scared 😨', vi: 'Sợ hãi' },
      { en: 'Surprised 😲', vi: 'Ngạc nhiên' },
      { en: 'Tired 😴', vi: 'Mệt mỏi' },
    ],
  },
  {
    id: 'emo-4', type: 'fill_blank',
    question: '"I am very ___!" (Tôi rất vui!)', audio: 'I am very happy',
    answer: 'happy', hint: 'ha..y',
    options: ['happy', 'hungry', 'hairy', 'hasty'],
  },
  {
    id: 'emo-5', type: 'multiple_choice',
    question: '"Hungry" có nghĩa là gì?', audio: 'Hungry',
    options: [
      { text: 'Đói bụng', emoji: '🍽️', correct: true },
      { text: 'Khát nước', emoji: '💧', correct: false },
      { text: 'Buồn ngủ', emoji: '😴', correct: false },
      { text: 'Đau bụng', emoji: '🤢', correct: false },
    ],
  },
  {
    id: 'emo-6', type: 'tap_words',
    question: 'Sắp xếp: "Con mèo rất hạnh phúc"',
    answer: ['The', 'cat', 'is', 'very', 'happy'],
    wordBank: ['The', 'cat', 'is', 'very', 'happy', 'sad', 'dog'],
  },
  {
    id: 'emo-7', type: 'multiple_choice',
    question: '"Excited" có nghĩa là gì?', audio: 'Excited',
    options: [
      { text: 'Hào hứng / Phấn khích', emoji: '🤩', correct: true },
      { text: 'Chán nản', emoji: '😑', correct: false },
      { text: 'Lo lắng', emoji: '😟', correct: false },
      { text: 'Xấu hổ', emoji: '😳', correct: false },
    ],
  },
  {
    id: 'emo-8', type: 'match_pairs',
    question: 'Nối thêm cảm xúc',
    pairs: [
      { en: 'Bored 😑', vi: 'Chán nản' },
      { en: 'Nervous 😟', vi: 'Lo lắng' },
      { en: 'Proud 😤', vi: 'Tự hào' },
      { en: 'Shy 😳', vi: 'Xấu hổ' },
    ],
  },
];
