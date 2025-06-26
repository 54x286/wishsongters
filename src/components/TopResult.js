// src/components/TopResult.js
import React from 'react';

const TopResult = ({ song }) => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-xl font-semibold">🎵 Your Top Pick</h2>
      <p className="text-2xl mt-2">{song.title}</p>
      <a
        href={song.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        ▶️ Listen on Spotify
      </a>
    </div>
  );
};

export default TopResult;

