// src/data/speaking/index.js
// Registry tất cả series sách — thêm FF3, FF4... vào đây khi có sách mới
// Speaking.jsx import từ file này, không import trực tiếp từng series

import { FF1_UNITS } from './ff1/units';
import { FF2_UNITS } from './ff2/units';

// Danh sách series để render UI chọn sách
export const SERIES_LIST = [
  {
    id: 'ff1',
    title: 'Family & Friends 1',
    subtitle: 'Starter – Unit 15',
    emoji: '📗',
    color: '#58CC02',
    colorDark: '#3D9900',
    units: FF1_UNITS,
    locked: false,
  },
  {
    id: 'ff2',
    title: 'Family & Friends 2',
    subtitle: 'Sắp có — năm học mới',
    emoji: '📘',
    color: '#1CB0F6',
    colorDark: '#0099D5',
    units: FF2_UNITS,
    locked: true,   // ← đổi thành false khi đã có nội dung
  },
];

// Re-export để các file khác có thể import nếu cần
export { FF1_UNITS } from './ff1/units';
export { FF2_UNITS } from './ff2/units';
