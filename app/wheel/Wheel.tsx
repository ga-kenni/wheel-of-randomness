'use client';

import React, { useState, useRef } from 'react';

interface Props {
  options: string[];
}

const Wheel: React.FC<Props> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const rotationRef = useRef<number>(0);

  const spinWheel = () => {
    const spins = Math.floor(Math.random() * 4 + 3); // 3 to 6 full spins
    const randomDegree = Math.random() * 360;
    rotationRef.current += 360 * spins + randomDegree;
    const selectedIdx = Math.floor(options.length * (randomDegree / 360));
    setSelectedOption(options[selectedIdx]);

    document.getElementById('wheel')!.style.transform = `rotate(${rotationRef.current}deg)`;
  };

  return (
    <div className="flex flex-col items-center">
      <div
        id="wheel"
        className="w-64 h-64 border-4 border-gray-900 rounded-full bg-white text-center relative"
      >
        {options.map((option, idx) => (
          <div
            key={idx}
            className="absolute w-full h-full text-gray-900"
            style={{
              transform: `rotate(${idx * (360 / options.length)}deg)`,
            }}
          >
            <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-1/2 text-sm">
              {option}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={spinWheel}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Spin the Wheel!
      </button>
      {selectedOption && <div className="mt-4">Selected: {selectedOption}</div>}
    </div>
  );
};

export default Wheel;
