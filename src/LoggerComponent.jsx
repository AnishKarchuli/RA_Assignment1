import React from 'react';
import { useLogger } from './customHooks/useLogger';

function LoggerComponent() {
  const { value, setValue } = useLogger('');

  return (
    <div>
      <h2>Logger Component</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
    </div>
  );
}

export default LoggerComponent;