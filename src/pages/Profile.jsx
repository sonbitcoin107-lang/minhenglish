// src/pages/Profile.jsx
import { useEffect, useRef, useState } from 'react';
import { useGame } from '../context/GameContext';
import { loadProfile, saveProfile, clearAll } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import './Profile.css';

const LEVEL_NAMES  = ['', 'Mới bắt đầu', 'Học sinh', 'Giỏi', 'Xuất sắc', 'Thiên tài', 'Huyền thoại', 'Bậc thầy'];
const LEVEL_COLORS = ['', '#8B8B8B', '#CD7F32', '#C0C0C0', '#FFD700', '#00BFFF', '#9B59B6', '#58CC02'];
const AVATARS      = ['🦊', '🐼', '🐸', '🦄', '🐯', '🐙', '🦁', '🐺', '🐨', '🐻'];

const BADGES_CONFIG = [
  { id: 'first_lesson',   name: 'Bài học đầu tiên',  emoji: '🌟',    desc: 'Hoàn thành bài học đầu tiên' },
  { id: 'streak_3',       name: 'Streak 3 ngày',      emoji: '🔥',    desc: 'Học 3 ngày liên tiếp' },
  { id: 'streak_7',       name: 'Streak 7 ngày',      emoji: '🔥🔥',  desc: 'Học 7 ngày liên tiếp' },
  { id: 'xp_100',         name: '100 XP',             emoji: '⚡',    desc: 'Đạt 100 XP' },
  { id: 'xp_500',         name: '500 XP',             emoji: '⚡⚡',  desc: 'Đạt 500 XP' },
  { id: 'course_complete',name: 'Hoàn thành chủ đề',  emoji: '🏆',    desc: 'Hoàn thành 1 chủ đề học' },
  { id: 'perfect_lesson', name: 'Bài học hoàn hảo',   emoji: '💎',    desc: 'Không sai câu nào' },
];

export default function Profile() {
  const { state, reset, getCourseProgress } = useGame();
  const navigate    = useNavigate();
  const fileInputRef = useRef(null);

  const [profile, setProfile]           = useState(null);
  const [showReset, setShowReset]       = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName]         = useState('');
  const [editEmoji, setEditEmoji]       = useState('🦊');
  const [editPhoto, setEditPhoto]       = useState(null); // base64

  useEffect(() => {
    const p = loadProfile();
    setProfile(p);
    if (p) {
      setEditName(p.name   || '');
      setEditEmoji(p.avatar || '🦊');
      setEditPhoto(p.photo  || null);
    }
  }, []);

  // ── Compress & save uploaded photo ──────────────────────────
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX = 200;
        const ratio = Math.min(MAX / img.width, MAX / img.height);
        canvas.width  = img.width  * ratio;
        canvas.height = img.height * ratio;
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        setEditPhoto(canvas.toDataURL('image/jpeg', 0.75));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  // ── Save edits ───────────────────────────────────────────────
  const handleSaveEdit = () => {
    const updated = {
      ...profile,
      name:   editName.trim() || profile?.name || 'Bé yêu',
      avatar: editEmoji,
      photo:  editPhoto,
    };
    saveProfile(updated);
    setProfile(updated);
    setShowEditModal(false);
  };

  const handleReset = () => {
    reset();
    clearAll();
    navigate('/onboarding');
  };

  const levelColor = LEVEL_COLORS[state.level] || '#58CC02';
  const levelName  = LEVEL_NAMES[state.level]  || 'Bậc thầy';
  const xpToNextLevel = [100, 300, 600, 1000, 1500, 2500, 99999][state.level - 1] || 99999;
  const xpProgress = Math.min(100, (state.xp / xpToNextLevel) * 100);

  const earnedBadges   = BADGES_CONFIG.filter(b =>  state.badges.includes(b.id));
  const unearnedBadges = BADGES_CONFIG.filter(b => !state.badges.includes(b.id));
  const completedCourses = COURSES.filter(c => getCourseProgress(c.id) >= 100).length;

  return (
    <div className="profile-page">

      {/* ── Profile Card ──────────────────────────────────────── */}
      <div className="profile-card" style={{ '--level-color': levelColor }}>

        {/* Avatar — bấm vào để chỉnh */}
        <button className="profile-avatar-btn" onClick={() => setShowEditModal(true)}>
          {profile?.photo
            ? <img src={profile.photo} alt="avatar" className="profile-avatar-img" />
            : <span className="profile-avatar-emoji">{profile?.avatar || '🦊'}</span>
          }
          <span className="profile-avatar-edit-badge">✏️</span>
        </button>

        <div className="profile-info">
          <h1 className="profile-name">{profile?.name || 'Bé yêu'}</h1>
          <div className="profile-level" style={{ background: levelColor }}>
            Cấp {state.level} — {levelName}
          </div>
        </div>

        {/* XP bar */}
        <div className="profile-xp-section">
          <div className="profile-xp-label">
            <span>⚡ {state.xp} XP</span>
            <span>→ {xpToNextLevel} XP</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${xpProgress}%` }} />
          </div>
        </div>
      </div>

      {/* ── Stats Row ─────────────────────────────────────────── */}
      <div className="profile-stats-grid">
        <div className="profile-stat-item">
          <span className="pstat-icon">🔥</span>
          <span className="pstat-val">{state.streak}</span>
          <span className="pstat-label">Ngày streak</span>
        </div>
        <div className="profile-stat-item">
          <span className="pstat-icon">📚</span>
          <span className="pstat-val">{state.totalLessonsCompleted}</span>
          <span className="pstat-label">Bài đã học</span>
        </div>
        <div className="profile-stat-item">
          <span className="pstat-icon">💎</span>
          <span className="pstat-val">{state.gems}</span>
          <span className="pstat-label">Gems</span>
        </div>
        <div className="profile-stat-item">
          <span className="pstat-icon">🏆</span>
          <span className="pstat-val">{completedCourses}</span>
          <span className="pstat-label">Chủ đề xong</span>
        </div>
      </div>

      {/* ── Course Progress ───────────────────────────────────── */}
      <div className="profile-section">
        <h2 className="profile-section-title">📊 Tiến độ học</h2>
        <div className="course-progress-list">
          {COURSES.map(course => {
            const progress = getCourseProgress(course.id);
            return (
              <div key={course.id} className="course-progress-item">
                <span className="cp-emoji">{course.emoji}</span>
                <div className="cp-info">
                  <span className="cp-name">{course.title}</span>
                  <div className="cp-track">
                    <div className="cp-fill" style={{ width: `${progress}%`, background: course.color }} />
                  </div>
                </div>
                <span className="cp-pct">{progress}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Badges ────────────────────────────────────────────── */}
      <div className="profile-section">
        <h2 className="profile-section-title">🏅 Huy hiệu của bạn</h2>
        <div className="badges-grid">
          {earnedBadges.map(badge => (
            <div key={badge.id} className="badge-item earned" title={badge.desc}>
              <span className="badge-emoji">{badge.emoji}</span>
              <span className="badge-name">{badge.name}</span>
            </div>
          ))}
          {unearnedBadges.map(badge => (
            <div key={badge.id} className="badge-item locked" title={`Cách mở khóa: ${badge.desc}`}>
              <span className="badge-emoji" style={{ filter: 'grayscale(1) opacity(0.4)' }}>{badge.emoji}</span>
              <span className="badge-name">{badge.name}</span>
              <span className="badge-lock">🔒</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Reset ─────────────────────────────────────────────── */}
      <div className="profile-section">
        {!showReset ? (
          <button id="btn-show-reset" className="btn btn-ghost btn-full" onClick={() => setShowReset(true)}>
            🗑️ Xóa dữ liệu
          </button>
        ) : (
          <div className="reset-confirm">
            <p>Xóa toàn bộ tiến trình học?</p>
            <div className="flex gap-3">
              <button id="btn-reset-confirm" className="btn btn-danger flex-1" onClick={handleReset}>Xóa hết</button>
              <button className="btn btn-secondary flex-1" onClick={() => setShowReset(false)}>Hủy</button>
            </div>
          </div>
        )}
      </div>

      {/* ── Edit Avatar Modal ──────────────────────────────────── */}
      {showEditModal && (
        <div className="av-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="av-modal" onClick={e => e.stopPropagation()}>
            <h3 className="av-modal-title">Chỉnh hồ sơ</h3>

            {/* Preview */}
            <div className="av-preview">
              {editPhoto
                ? <img src={editPhoto} alt="preview" className="av-preview-img" />
                : <span className="av-preview-emoji">{editEmoji}</span>
              }
            </div>

            {/* Upload */}
            <input ref={fileInputRef} type="file" accept="image/*"
              style={{ display: 'none' }} onChange={handleFileChange} />
            <button className="btn btn-secondary btn-full"
              onClick={() => fileInputRef.current?.click()}>
              📷 Chọn ảnh từ điện thoại
            </button>
            {editPhoto && (
              <button className="btn btn-ghost btn-full" onClick={() => setEditPhoto(null)}>
                🗑️ Xóa ảnh, dùng emoji
              </button>
            )}

            {/* Emoji picker — chỉ hiện khi chưa có ảnh */}
            {!editPhoto && (
              <>
                <p className="av-or-label">— hoặc chọn avatar —</p>
                <div className="av-emoji-grid">
                  {AVATARS.map(em => (
                    <button key={em}
                      className={`av-emoji-btn ${editEmoji === em ? 'selected' : ''}`}
                      onClick={() => setEditEmoji(em)}
                    >{em}</button>
                  ))}
                </div>
              </>
            )}

            {/* Sửa tên */}
            <input type="text" className="av-name-input"
              value={editName} onChange={e => setEditName(e.target.value)}
              placeholder="Tên của bé..." maxLength={20} />

            {/* Actions */}
            <div className="av-actions">
              <button className="btn btn-primary flex-1" onClick={handleSaveEdit}>Lưu</button>
              <button className="btn btn-ghost flex-1" onClick={() => setShowEditModal(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ height: 32 }} />
    </div>
  );
}
