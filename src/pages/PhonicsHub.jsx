// src/pages/PhonicsHub.jsx
import { useNavigate } from 'react-router-dom';
import './PhonicsHub.css';

export default function PhonicsHub() {
  const navigate = useNavigate();

  return (
    <div className="phonics-hub-page">
      <div className="hub-header">
        <h1>Âm vần Tiếng Anh</h1>
        <p>Chọn lộ trình phù hợp với độ tuổi của bé</p>
      </div>

      <div className="hub-cards-container">
        {/* Card 1: Basic Phonics */}
        <div 
          className="hub-card basic-card"
          onClick={() => navigate('/phonics-basic')}
        >
          <div className="hub-card-icon">🔤</div>
          <div className="hub-card-content">
            <h2>Phonics Cơ Bản</h2>
            <div className="hub-card-subtitle">Dành cho bé 4-7 tuổi</div>
            <p>Học 42 âm cốt lõi, ghép vần qua hành động và câu chuyện vui nhộn.</p>
          </div>
          <div className="hub-card-arrow">›</div>
        </div>

        {/* Card 2: 60 Rules */}
        <div 
          className="hub-card rules-card"
          onClick={() => navigate('/phonics-rules')}
        >
          <div className="hub-card-icon">📖</div>
          <div className="hub-card-content">
            <h2>60 Quy Tắc Đánh Vần</h2>
            <div className="hub-card-subtitle">Dành cho bé 8+ tuổi</div>
            <p>Giải mã quy luật phát âm, trọng âm và khẩu hình miệng nâng cao.</p>
          </div>
          <div className="hub-card-arrow">›</div>
        </div>
      </div>
    </div>
  );
}
