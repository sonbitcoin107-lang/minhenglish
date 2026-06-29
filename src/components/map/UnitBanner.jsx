// src/components/map/UnitBanner.jsx
import './UnitBanner.css';

export default function UnitBanner({ unit, onGuidebook, unitNumber, sectionNumber }) {
  return (
    <div
      className="unit-banner"
      style={{ background: `linear-gradient(135deg, ${unit.color} 0%, ${unit.colorDark} 100%)` }}
    >
      <div className="unit-banner-left">
        <span className="unit-banner-section">
          PHẦN {sectionNumber}, CỬA {unitNumber}
        </span>
        <span className="unit-banner-title">{unit.title}</span>
        <span className="unit-banner-desc">{unit.description}</span>
      </div>

      <button
        className="unit-banner-book-btn"
        onClick={(e) => { e.stopPropagation(); onGuidebook?.(); }}
        title="Xem sổ tay từ vựng"
        aria-label="Mở sổ tay"
      >
        📒
      </button>
    </div>
  );
}
