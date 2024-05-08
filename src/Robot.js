// Robot.js
import React from 'react';
import './Robot.css';

const Robot = ({ position, direction }) => {
  return (
    <div className="robot" style={{ gridColumn: position.x + 1, gridRow: 5 - position.y }}>
      <div className={`arrow arrow-${direction}`}></div>
    </div>
  );
};

export default Robot;
