import React from 'react';

function Bedbroom() {
    const backgroundStyle = {
        backgroundImage: `url('/bedroom.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', /* Adjust this to fit your needs */
        width: '100vw', /* Adjust this to fit your needs */
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
        <h1>Bedbroom</h1>
      </header>
      <main>
        <p>Hover over a part of the room that I can help you with</p>
      </main>
    </div>
  );
}

export default Bedbroom;
