import { useEffect, useState } from 'react';
import songs from '../data/songs.json';
import { useRouter } from 'next/router';

export default function Sorter() {
  const [queue, setQueue] = useState([]);
  const [results, setResults] = useState({});
  const [current, setCurrent] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const shuffled = [...songs].sort(() => 0.5 - Math.random());
    setQueue(shuffled);
    setCurrent([shuffled[0], shuffled[1]]);
  }, []);

  const vote = (winner) => {
    const newResults = { ...results };
    newResults[winner] = (newResults[winner] || 0) + 1;
    setResults(newResults);

    if (queue.length <= 2) {
      const sorted = Object.entries(newResults).sort((a, b) => b[1] - a[1]);
      const top5 = sorted.slice(0, 5).map(([song]) => song);
      router.push({
        pathname: '/result',
        query: {
          top1: top5[0],
          top5: JSON.stringify(top5)
        }
      });
      return;
    }

    const nextQueue = queue.slice(2);
    setQueue(nextQueue);
    setCurrent([nextQueue[0], nextQueue[1]]);
  };

  if (current.length < 2) return null;

  return (
    <div style={{ background: '#fdfdfd', height: '100vh', textAlign: 'center', paddingTop: '4rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Which NCT WISH song do you like more?</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
        {current.map((song, i) => (
          <button key={i} onClick={() => vote(song)} style={{ fontSize: '1.25rem', padding: '2rem', borderRadius: '1rem', background: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            ⭐ {song.title}
          </button>
        ))}
      </div>
    </div>
  );
}

