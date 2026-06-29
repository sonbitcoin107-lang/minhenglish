// src/data/courses.js
// Master course list with all 20 topics

import greetings from './lessons/greetings.js';
import colors from './lessons/colors.js';
import animals from './lessons/animals.js';
import food from './lessons/food.js';
import family from './lessons/family.js';
import numbers from './lessons/numbers.js';
import weather from './lessons/weather.js';
import school from './lessons/school.js';
import body from './lessons/body.js';
import transport from './lessons/transport.js';
import home from './lessons/home.js';
import clothes from './lessons/clothes.js';
import time from './lessons/time.js';
import emotions from './lessons/emotions.js';
import actions from './lessons/actions.js';
import hobbies from './lessons/hobbies.js';
import city from './lessons/city.js';
import adjectives from './lessons/adjectives.js';
import nature from './lessons/nature.js';
import phrases from './lessons/phrases.js';

export const COURSES = [
  {
    id: 'greetings', title: 'Chào hỏi', titleEn: 'Greetings', emoji: '👋',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: greetings, totalXp: 100, description: 'Học cách chào hỏi bằng tiếng Anh',
  },
  {
    id: 'colors', title: 'Màu sắc', titleEn: 'Colors', emoji: '🎨',
    color: '#FF9600', colorDark: '#CC7A00', colorLight: '#FFE7C0',
    lessons: colors, totalXp: 80, description: 'Các màu sắc trong tiếng Anh',
  },
  {
    id: 'animals', title: 'Động vật', titleEn: 'Animals', emoji: '🐶',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: animals, totalXp: 100, description: 'Tên các con vật bằng tiếng Anh',
  },
  {
    id: 'food', title: 'Đồ ăn', titleEn: 'Food', emoji: '🍎',
    color: '#FF4B4B', colorDark: '#CC3C3C', colorLight: '#FFDDDD',
    lessons: food, totalXp: 100, description: 'Thức ăn và đồ uống',
  },
  {
    id: 'family', title: 'Gia đình', titleEn: 'Family', emoji: '👨‍👩‍👧',
    color: '#CE82FF', colorDark: '#9B5FC0', colorLight: '#F0D9FF',
    lessons: family, totalXp: 80, description: 'Các thành viên trong gia đình',
  },
  {
    id: 'numbers', title: 'Con số', titleEn: 'Numbers', emoji: '🔢',
    color: '#FFD900', colorDark: '#D4A800', colorLight: '#FFF9C4',
    lessons: numbers, totalXp: 80, description: 'Đếm số bằng tiếng Anh',
  },
  {
    id: 'weather', title: 'Thời tiết', titleEn: 'Weather', emoji: '☀️',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: weather, totalXp: 60, description: 'Nói về thời tiết',
  },
  {
    id: 'school', title: 'Trường học', titleEn: 'School', emoji: '🏫',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: school, totalXp: 80, description: 'Đồ dùng và hoạt động ở trường',
  },
  {
    id: 'body', title: 'Cơ thể', titleEn: 'Body', emoji: '💪',
    color: '#FF9600', colorDark: '#CC7A00', colorLight: '#FFE7C0',
    lessons: body, totalXp: 80, description: 'Các bộ phận cơ thể',
  },
  {
    id: 'transport', title: 'Phương tiện', titleEn: 'Transport', emoji: '🚗',
    color: '#FF4B4B', colorDark: '#CC3C3C', colorLight: '#FFDDDD',
    lessons: transport, totalXp: 80, description: 'Các loại phương tiện giao thông',
  },
  {
    id: 'home', title: 'Ngôi nhà', titleEn: 'Home', emoji: '🏠',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: home, totalXp: 80, description: 'Các phòng và đồ vật trong nhà',
  },
  {
    id: 'clothes', title: 'Quần áo', titleEn: 'Clothes', emoji: '👕',
    color: '#CE82FF', colorDark: '#9B5FC0', colorLight: '#F0D9FF',
    lessons: clothes, totalXp: 80, description: 'Trang phục và phụ kiện',
  },
  {
    id: 'time', title: 'Thời gian', titleEn: 'Time', emoji: '⏰',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: time, totalXp: 80, description: 'Các ngày trong tuần và thời gian',
  },
  {
    id: 'emotions', title: 'Cảm xúc', titleEn: 'Emotions', emoji: '😄',
    color: '#FFD900', colorDark: '#D4A800', colorLight: '#FFF9C4',
    lessons: emotions, totalXp: 80, description: 'Diễn đạt cảm xúc bằng tiếng Anh',
  },
  {
    id: 'actions', title: 'Hành động', titleEn: 'Actions', emoji: '🏃',
    color: '#FF9600', colorDark: '#CC7A00', colorLight: '#FFE7C0',
    lessons: actions, totalXp: 80, description: 'Các động từ hành động',
  },
  {
    id: 'hobbies', title: 'Sở thích', titleEn: 'Hobbies', emoji: '⚽',
    color: '#FF4B4B', colorDark: '#CC3C3C', colorLight: '#FFDDDD',
    lessons: hobbies, totalXp: 80, description: 'Sở thích và thể thao',
  },
  {
    id: 'city', title: 'Thành phố', titleEn: 'City', emoji: '🏙️',
    color: '#58CC02', colorDark: '#3D9900', colorLight: '#D7FFB8',
    lessons: city, totalXp: 80, description: 'Các địa điểm trong thành phố',
  },
  {
    id: 'adjectives', title: 'Mô tả', titleEn: 'Adjectives', emoji: '✨',
    color: '#CE82FF', colorDark: '#9B5FC0', colorLight: '#F0D9FF',
    lessons: adjectives, totalXp: 80, description: 'Tính từ mô tả sự vật',
  },
  {
    id: 'nature', title: 'Thiên nhiên', titleEn: 'Nature', emoji: '🌿',
    color: '#1CB0F6', colorDark: '#0099D5', colorLight: '#DDF4FF',
    lessons: nature, totalXp: 80, description: 'Thiên nhiên và môi trường',
  },
  {
    id: 'phrases', title: 'Giao tiếp', titleEn: 'Phrases', emoji: '💬',
    color: '#FFD900', colorDark: '#D4A800', colorLight: '#FFF9C4',
    lessons: phrases, totalXp: 80, description: 'Câu giao tiếp hàng ngày',
  },
];

export const getCourseById = (id) => COURSES.find(c => c.id === id);
export const getTotalCourses = () => COURSES.length;
