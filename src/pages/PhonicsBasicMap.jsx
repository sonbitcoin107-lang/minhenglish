// src/pages/PhonicsBasicMap.jsx
import { useNavigate } from 'react-router-dom';
import curriculum from '../data/phonics/basic_phonics_curriculum.json';
import './PhonicsBasicMap.css';

const bgColors = [
  '#FCA5A5', // Nhóm 1 - Đỏ nhạt
  '#FCD34D', // Nhóm 2 - Vàng
  '#86EFAC', // Nhóm 3 - Xanh lá
  '#93C5FD', // Nhóm 4 - Xanh dương
  '#C4B5FD', // Nhóm 5 - Tím
  '#F9A8D4', // Nhóm 6 - Hồng
  '#FDBA74'  // Nhóm 7 - Cam
];

export default function PhonicsBasicMap() {
  const navigate = useNavigate();

  return (
    <div className="phonics-basic-map-page">
      <div className="basic-map-header">
        <button className="btn-back" onClick={() => navigate('/phonics')}>◀</button>
        <h1>Jolly Phonics 🔤</h1>
      </div>
      <p className="basic-map-subtitle">Hành trình 42 âm cốt lõi cho bé</p>

      <div className="basic-groups-list">
        {curriculum.map((group, index) => {
          const bgColor = bgColors[index % bgColors.length];
          // Get letters to display
          const letters = group.sounds.map(s => s.letter).join(' • ');

          return (
            <div 
              key={group.group_id} 
              className="basic-group-card"
              style={{ backgroundColor: bgColor }}
              onClick={() => navigate(`/phonics-basic/${group.group_id}`)}
            >
              <div className="group-card-badge">Nhóm {group.group_id}</div>
              <h2 className="group-letters">{letters}</h2>
              <p className="group-desc">{group.description}</p>
              <div className="group-play-icon">▶</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
