import React from 'react';
import './logo.svg';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"http://www.w3.org/2000/svg"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter start={10} step={5} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
