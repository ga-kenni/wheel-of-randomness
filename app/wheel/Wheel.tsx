'use client';

import React, { useState } from 'react';

interface WheelOfFortuneProps {
  items: string[];
}

const WheelOfFortune: React.FC<WheelOfFortuneProps> = ({ items }) => {
  const [rotation, setRotation] = useState<number>(0);

  const spin = () => {
    const spins = Math.floor(Math.random() * 5) + 3; // Spin at least 3 times and at most 8 times
    const degrees = Math.floor(Math.random() * 360);
    const totalRotation = spins * 360 + degrees;
    setRotation(rotation + totalRotation);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-72 h-72 rounded-full border-4 border-gray-800 relative transform transition-transform duration-1000 ease-in-out"
           style={{ transform: `rotate(${rotation}deg)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute w-1/2 h-1/2 bg-${index % 2 === 0 ? 'gray-300' : 'gray-400'} text-center line-clamp-1 leading-36 transform-origin-right-top`}
            style={{
              transform: `translateY(50%) translateX(50%) rotate(${360 / items.length * index}deg) rotate(90deg)`
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button 
        onClick={spin}
        className="mt-4 p-2 px-4 bg-blue-600 text-white rounded"
      >
        Spin
      </button>
    </div>
  );
}

export default WheelOfFortune;
