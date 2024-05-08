// CommandInput.js
import React, { useState } from 'react';

const CommandInput = ({ onCommandSubmit }) => {
  const [command, setCommand] = useState('');

  const handleChange = (e) => {
    setCommand(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommandSubmit(command);
    setCommand('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={command}
        onChange={handleChange}
        placeholder="Enter command..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommandInput;
