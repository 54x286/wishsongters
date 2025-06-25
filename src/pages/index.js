export default function Home() {
  return (
    <div style={{
      backgroundImage: 'url("/bg-home.jpg")',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#ffb6e6', fontSize: '3rem', fontWeight: 'bold' }}>favorite song sorter</h1>
      <a href="/sorter">
        <button style={{
          backgroundColor: '#fff',
          borderRadius: '9999px',
          padding: '1.5rem',
          border: 'none',
          fontSize: '2rem',
          marginTop: '1rem'
        }}>▶</button>
      </a>
    </div>
  );
}

