import React from 'react';
import { useLocalStorage } from './customHooks/useLocalStorage';

function LocalStorageComponent() {
  const { value, setValue } = useLocalStorage('inputValue', '');

  return (
    <div>
      <h2>Local Storage Persistence</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Stored value: {value}</p>
    </div>
  );
}

export default LocalStorageComponent;