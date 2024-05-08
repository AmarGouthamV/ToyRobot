// Table.js
import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <div className="table">
      {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {[...Array(5)].map((_, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
