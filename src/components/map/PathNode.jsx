// src/components/map/PathNode.jsx
import './PathNode.css';

const NODE_ICONS = {
  listen:    '🎧',
  vocab:     '📖',
  practice:  '🎬',
  challenge: '⭐',
};

export default function PathNode({ nodeType, status, stars = 0, onClick }) {
  // ALWAYS show the type icon — locked nodes just look grayed out
  const icon = NODE_ICONS[nodeType] || '⭐';

  return (
    <div
      className={`path-node-wrapper ${status}`}
      onClick={status !== 'locked' ? onClick : undefined}
    >
      {/* "BẮT ĐẦU!" badge — only on active node */}
      {status === 'active' && (
        <div className="path-node-badge">
          <span>BẮT ĐẦU!</span>
          <div className="path-node-badge-arrow" />
        </div>
      )}

      {/* Circle */}
      <div className={`path-node ${status}`}>
        {/* Pulsing ring for active */}
        {status === 'active' && <div className="path-node-ring" />}

        <span className="path-node-icon">{icon}</span>

        {/* Small lock overlay for locked nodes */}
        {status === 'locked' && (
          <div className="path-node-lock">🔒</div>
        )}
      </div>

      {/* Stars — only for completed */}
      {status === 'completed' && (
        <div className="path-node-stars">
          {[0, 1, 2].map((i) => (
            <span key={i} className={i < stars ? 'star' : 'star empty'}>⭐</span>
          ))}
        </div>
      )}

      {/* Placeholder height to keep layout stable for non-completed */}
      {status !== 'completed' && <div className="path-node-stars-placeholder" />}
    </div>
  );
}
