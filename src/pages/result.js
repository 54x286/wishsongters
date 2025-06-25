import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { supabase } from '../supabase/client';
import songs from '../data/songs.json';

export default function Result() {
  const router = useRouter();
  const { top1, top5 } = router.query;

  useEffect(() => {
    if (top1 && top5) {
      supabase.from('results').insert([{
        top_1: top1,
        top_5: JSON.parse(top5),
        user_agent: navigator.userAgent,
        source: 'TwitterPremium'
      }]).then(({ error }) => {
        if (error) console.error(error);
      });
    }
  }, [top1, top5]);

  const getSpotifyUrl = (title) => {
    const match = songs.find(song => song.title === title);
    return match?.spotify || null;
  };

  if (!top1 || !top5) return <p>Loading...</p>;

  const parsedTop5 = JSON.parse(top5);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌟 Your #1 NCT WISH Song:</h2>
      <h1 style={{ fontSize: '1.5rem', color: '#4f46e5' }}>{top1}</h1>
      {getSpotifyUrl(top1) && (
        <iframe
          src={`https://open.spotify.com/embed/track/${getSpotifyUrl(top1).split('/track/')[1]}`}
          width="300"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}

      <h3 style={{ marginTop: '2rem' }}>💖 Your Top 5:</h3>
      <ul>
        {parsedTop5.map((song, i) => (
          <li key={i}>
            {i + 1}. {song} {" "}
            {getSpotifyUrl(song) && (
              <a href={getSpotifyUrl(song)} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: '#10b981' }}>
                [Play]
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

