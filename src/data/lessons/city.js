// src/data/lessons/city.js
// Chủ đề 17: Thành phố & Địa điểm

export default [
  {
    id: 'cit-1', type: 'multiple_choice',
    question: '"Hospital" có nghĩa là gì?', audio: 'Hospital',
    options: [
      { text: 'Bệnh viện', emoji: '🏥', correct: true },
      { text: 'Trường học', emoji: '🏫', correct: false },
      { text: 'Siêu thị', emoji: '🏪', correct: false },
      { text: 'Công viên', emoji: '🌳', correct: false },
    ],
  },
  {
    id: 'cit-2', type: 'multiple_choice',
    question: '"Park" có nghĩa là gì?', audio: 'Park',
    options: [
      { text: 'Công viên', emoji: '🌳', correct: true },
      { text: 'Bãi biển', emoji: '🏖️', correct: false },
      { text: 'Rừng', emoji: '🌲', correct: false },
      { text: 'Hồ nước', emoji: '🏞️', correct: false },
    ],
  },
  {
    id: 'cit-3', type: 'match_pairs',
    question: 'Nối địa điểm',
    pairs: [
      { en: 'Bank 🏦', vi: 'Ngân hàng' },
      { en: 'Library 📚', vi: 'Thư viện' },
      { en: 'Restaurant 🍽️', vi: 'Nhà hàng' },
      { en: 'Hotel 🏨', vi: 'Khách sạn' },
    ],
  },
  {
    id: 'cit-4', type: 'fill_blank',
    question: '"Let\'s go to the ___!" (Đến công viên thôi!)',
    audio: 'Lets go to the park', answer: 'park', hint: 'p..k',
    options: ['park', 'dark', 'bark', 'mark'],
  },
  {
    id: 'cit-5', type: 'multiple_choice',
    question: '"Supermarket" có nghĩa là gì?', audio: 'Supermarket',
    options: [
      { text: 'Siêu thị', emoji: '🛒', correct: true },
      { text: 'Chợ', emoji: '🏪', correct: false },
      { text: 'Cửa hàng', emoji: '🏬', correct: false },
      { text: 'Nhà kho', emoji: '🏭', correct: false },
    ],
  },
  {
    id: 'cit-6', type: 'tap_words',
    question: 'Sắp xếp: "Bệnh viện gần trường học"',
    answer: ['The', 'hospital', 'is', 'near', 'the', 'school'],
    wordBank: ['The', 'hospital', 'is', 'near', 'the', 'school', 'far', 'park'],
  },
  {
    id: 'cit-7', type: 'multiple_choice',
    question: '"Zoo" có nghĩa là gì?', audio: 'Zoo',
    options: [
      { text: 'Vườn thú', emoji: '🦁', correct: true },
      { text: 'Vườn hoa', emoji: '🌸', correct: false },
      { text: 'Công viên nước', emoji: '💦', correct: false },
      { text: 'Rạp chiếu phim', emoji: '🎬', correct: false },
    ],
  },
  {
    id: 'cit-8', type: 'match_pairs',
    question: 'Nối thêm địa điểm',
    pairs: [
      { en: 'Airport ✈️', vi: 'Sân bay' },
      { en: 'Stadium ⚽', vi: 'Sân vận động' },
      { en: 'Museum 🏛️', vi: 'Bảo tàng' },
      { en: 'Cinema 🎬', vi: 'Rạp chiếu phim' },
    ],
  },
];
