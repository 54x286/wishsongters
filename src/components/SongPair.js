// src/components/SongPair.js
import React from 'react';

const SongPair = ({ left, right, onChoose }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
      <button
        onClick={() => onChoose(left)}
        className="w-full md:w-1/3 p-4 bg-purple-100 hover:bg-purple-200 rounded shadow"
      >
        {left.title}
      </button>
      <span className="text-lg font-bold">VS</span>
      <button
        onClick={() => onChoose(right)}
        className="w-full md:w-1/3 p-4 bg-pink-100 hover:bg-pink-200 rounded shadow"
      >
        {right.title}
      </button>
    </div>
  );
};

export default SongPair;

