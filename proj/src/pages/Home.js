import React from 'react';

function Home() {
    const backgroundStyle = {
        backgroundImage: `url('/homepage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '1px 1px 2px black',
      };
  return (
    <div style={backgroundStyle}>
      <header>
        <h1>Ignats Website</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
      </main>
    </div>
  );
}

export default Home;
