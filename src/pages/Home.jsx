// src/pages/Home.jsx
// Duolingo-style Learning Path Map

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { COURSES } from '../data/courses';
import PathNode from '../components/map/PathNode';
import UnitBanner from '../components/map/UnitBanner';
import Guidebook from '../components/map/Guidebook';
import './Home.css';

// 4 node types per unit — matches the 4 PathNode positions
const NODE_TYPES = ['listen', 'vocab', 'practice', 'challenge'];

// Zigzag: horizontal offset for each of the 4 nodes
// Positions go: right → center-right → left → center-left
// Using % of container width (the container is max 400px)
const ZIGZAG = [
  { justify: 'flex-end',   marginRight: '16px' },   // 0 — right
  { justify: 'center',     marginRight: '0px'  },   // 1 — center
  { justify: 'flex-start', marginLeft:  '16px' },   // 2 — left
  { justify: 'center',     marginLeft:  '0px'  },   // 3 — center
];

// Group courses into sections of 5 (Duolingo-style: Section 1 = units 1-5, etc.)
const SECTION_SIZE = 5;

/**
 * Node status from courseProgress (0-100).
 * Each of the 4 nodes covers 25% of progress.
 */
function getNodeStatus(progress, nodeIdx, courseIdx, prevProgress) {
  const completedThreshold = (nodeIdx + 1) * 25;
  const activeThreshold    = nodeIdx * 25;

  if (progress >= completedThreshold) return 'completed';

  // A course is unlocked if it's first OR previous course has any progress
  const unlocked = courseIdx === 0 || prevProgress > 0;
  if (!unlocked) return 'locked';

  if (progress >= activeThreshold) return 'active';
  return 'locked';
}

function getNodeStars(progress, nodeIdx) {
  const segment = progress - nodeIdx * 25;
  if (segment <= 0) return 0;
  return Math.min(3, Math.ceil(segment / 9));
}

export default function Home() {
  const navigate    = useNavigate();
  const { getCourseProgress } = useGame();
  const [guidebookUnit, setGuidebookUnit] = useState(null);
  const activeRef   = useRef(null);

  // Auto-scroll to first active node
  useEffect(() => {
    if (activeRef.current) {
      setTimeout(() => {
        activeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
    }
  }, []);

  const handleNodeClick = (course) => {
    navigate('/lesson', { state: { courseId: course.id } });
  };

  // Called from Guidebook footer button
  const handleStartFromGuidebook = (courseId) => {
    navigate('/lesson', { state: { courseId } });
  };

  return (
    <div className="map-page">
      <div className="map-scroll">
        {COURSES.map((course, courseIdx) => {
          const progress     = getCourseProgress(course.id);
          const prevProgress = courseIdx > 0 ? getCourseProgress(COURSES[courseIdx - 1].id) : 100;
          const sectionNum   = Math.floor(courseIdx / SECTION_SIZE) + 1;
          const doorNum      = (courseIdx % SECTION_SIZE) + 1;

          // Is there an active node in this unit (for scroll anchor)?
          const firstActiveIdx = [0, 1, 2, 3].findIndex(
            (ni) => getNodeStatus(progress, ni, courseIdx, prevProgress) === 'active'
          );

          return (
            <div key={course.id} className="map-section">
              {/* Section divider line when new section starts */}
              {doorNum === 1 && courseIdx > 0 && (
                <div className="map-section-divider">
                  <div className="map-section-line" />
                  <span className="map-section-label">PHẦN {sectionNum}</span>
                  <div className="map-section-line" />
                </div>
              )}

              {/* Unit banner */}
              <UnitBanner
                unit={course}
                unitNumber={doorNum}
                sectionNumber={sectionNum}
                onGuidebook={() => setGuidebookUnit(course)}
              />

              {/* Node zigzag column */}
              <div className="map-nodes">
                {[0, 1, 2, 3].map((nodeIdx) => {
                  const status = getNodeStatus(progress, nodeIdx, courseIdx, prevProgress);
                  const stars  = getNodeStars(progress, nodeIdx);
                  const zz     = ZIGZAG[nodeIdx];
                  const isFirstActive = nodeIdx === firstActiveIdx;

                  return (
                    <div key={nodeIdx} className="map-node-group">
                      {/* Connector BETWEEN previous node and this one */}
                      {nodeIdx > 0 && (
                        <PathConnector
                          fromPos={ZIGZAG[nodeIdx - 1].justify}
                          toPos={zz.justify}
                          done={getNodeStatus(progress, nodeIdx - 1, courseIdx, prevProgress) === 'completed'}
                        />
                      )}

                      {/* Node row */}
                      <div
                        className="map-row"
                        style={{ justifyContent: zz.justify }}
                        ref={isFirstActive ? activeRef : null}
                      >
                        <div style={{
                          marginLeft:  zz.marginLeft  || undefined,
                          marginRight: zz.marginRight || undefined,
                        }}>
                          <PathNode
                            nodeType={NODE_TYPES[nodeIdx]}
                            status={status}
                            stars={stars}
                            onClick={() => handleNodeClick(course)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Bottom padding */}
        <div style={{ height: 48 }} />
      </div>

      {/* Guidebook modal */}
      {guidebookUnit && (
        <Guidebook
          unit={guidebookUnit}
          onClose={() => setGuidebookUnit(null)}
          onStart={handleStartFromGuidebook}
        />
      )}
    </div>
  );
}

/**
 * Visual path segment between two nodes.
 * Renders as a short vertical bar with the right color.
 * fromPos / toPos: 'flex-start' | 'center' | 'flex-end'
 */
function PathConnector({ fromPos, toPos, done }) {
  // Determine the lean direction
  const lean =
    fromPos === 'flex-end'   && toPos === 'center'     ? 'left'     :
    fromPos === 'center'     && toPos === 'flex-start'  ? 'left'     :
    fromPos === 'flex-start' && toPos === 'center'      ? 'right'    :
    fromPos === 'center'     && toPos === 'flex-end'    ? 'right'    :
    'straight';

  return (
    <div className={`path-connector path-connector-${lean} ${done ? 'done' : 'pending'}`} />
  );
}
