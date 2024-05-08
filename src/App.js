// App.js
import React, { useState } from 'react';
import './App.css';
import CommandInput from './CommandInput';
import Table from './Table';
import Robot from './Robot';

const App = () => {
  const [position, setPosition] = useState({ x: null, y: null });
  const [direction, setDirection] = useState(null);

  const handleCommandSubmit = (command) => {
    // Implement command parsing and execution
    const [action, payload] = command.split(' ');
    switch (action) {
      case 'PLACE':
        const [x, y, facing] = payload.split(',');
        const newX = parseInt(x, 10);
        const newY = parseInt(y, 10);
        setPosition({ x: newX, y: newY });
        setDirection(facing);
        break;
      case 'MOVE':
        if (direction === 'NORTH') {
          if (position.y < 4) setPosition((prevPos) => ({ ...prevPos, y: prevPos.y + 1 }));
        } else if (direction === 'SOUTH') {
          if (position.y > 0) setPosition((prevPos) => ({ ...prevPos, y: prevPos.y - 1 }));
        } else if (direction === 'EAST') {
          if (position.x < 4) setPosition((prevPos) => ({ ...prevPos, x: prevPos.x + 1 }));
        } else if (direction === 'WEST') {
          if (position.x > 0) setPosition((prevPos) => ({ ...prevPos, x: prevPos.x - 1 }));
        }
        break;
      case 'LEFT':
        if (direction === 'NORTH') setDirection('WEST');
        else if (direction === 'WEST') setDirection('SOUTH');
        else if (direction === 'SOUTH') setDirection('EAST');
        else if (direction === 'EAST') setDirection('NORTH');
        break;
      case 'RIGHT':
        if (direction === 'NORTH') setDirection('EAST');
        else if (direction === 'EAST') setDirection('SOUTH');
        else if (direction === 'SOUTH') setDirection('WEST');
        else if (direction === 'WEST') setDirection('NORTH');
        break;
      case 'REPORT':
        console.log(`Current position: ${position.x},${position.y},${direction}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="app">
      <h1>Toy Robot Simulation</h1>
      <Table />
      <Robot position={position} direction={direction} />
      <CommandInput onCommandSubmit={handleCommandSubmit} />
    </div>
  );
};

export default App;
