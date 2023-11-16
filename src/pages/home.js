import "@aws-amplify/ui-react/styles.css";
import React from 'react';

const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <h1>Welcome to Jacob's Cool Website</h1>
        </header>
        <main>
          <p>This is a simple React website.</p>
          <button onClick={() => alert('Button Clicked!')}>Click me</button>
        </main>
      </div>
    );
  };
  
  export default Home;