import { useState } from 'react';
import './App.css';

function App() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  const colorCodeLength = 6;

  function randomRgb() {}

  function randomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < colorCodeLength; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  }

  function handleGenerate() {}

  return (
    <div
      style={{ background: color }}
      className='w-[100vw] h-[100vh] bg-red-400 flex items-start justify-center gap-1 pt-1'
    >
      <button className='btn' onClick={() => setColorType('hex')}>
        Create HEX Color
      </button>
      <button className='btn' onClick={() => setColorType('rgb')}>
        Create RGB Color
      </button>
      <button
        className='btn'
        onClick={colorType === 'hex' ? randomHex : randomRgb}
      >
        Generate Random Color
      </button>
    </div>
  );
}

export default App;
