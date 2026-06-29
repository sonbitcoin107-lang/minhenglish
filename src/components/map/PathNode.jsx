// src/components/map/PathNode.jsx
import './PathNode.css';

const NODE_ICONS = {
  listen:    '🎧',
  vocab:     '📖',
  practice:  '🎬',
  challenge: '⭐',
};

export default function PathNode({ nodeType, status, stars = 0, onClick, isFirst }) {
  const icon = status === 'locked' ? '🔒' : NODE_ICONS[nodeType] || '⭐';

  return (
    <div className="path-node-wrapper" onClick={status !== 'locked' ? onClick : undefined}>
      {/* Active badge "BẮT ĐẦU" */}
      {status === 'active' && (
        <div className="path-node-badge">
          <span>BẮT ĐẦU!</span>
          <div className="path-node-badge-arrow" />
        </div>
      )}

      {/* The circle */}
      <div className={`path-node ${status}`}>
        {status === 'active' && <div className="path-node-ring" />}
        <span className="path-node-icon">{icon}</span>
      </div>

      {/* Stars below — only for completed */}
      {status === 'completed' && (
        <div className="path-node-stars">
          {[0, 1, 2].map((i) => (
            <span key={i} className={i < stars ? 'star' : 'star empty'}>⭐</span>
          ))}
        </div>
      )}
    </div>
  );
}
