import { useState } from 'react';
import './App.css';

function App() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  const colorCodeLength = 6;

  function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function randomRgb() {
    const r = getRandomNumber(255);
    const g = getRandomNumber(255);
    const b = getRandomNumber(255);
    setColor(`rgb(${r},${g},${b})`);
  }

  function randomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < colorCodeLength; i++) {
      hexColor += hex[getRandomNumber(hex.length)];
    }
    setColor(hexColor);
  }

  return (
    <div style={{ background: color }} className='w-[100vw] h-[100vh]'>
      <div className='flex items-start justify-center gap-1 pt-1'>
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
      <div className='flex justify-center items-center mt-12 text-white flex-col'>
        <h3>{colorType}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default App;
