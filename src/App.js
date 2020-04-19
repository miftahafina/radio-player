import React from 'react';
import 'normalize.css';
import './App.scss';
import PlayIcon from './play.png';
import PauseIcon from './pause.png';

function App() {
  return (
    <div className="container">
      <div className="artwork"></div>

      <div className="metadata">
        <h1 className="radio-name">Radio Dai</h1>
        <p className="address">Butuh - Tengaran - Kab. Semarang</p>
        <p className="freq">107.9 FM</p>
      </div>

      <div className="control">
        <button className="play">
          <img src={PlayIcon} alt="play button" />
        </button>
      </div>
    </div>
  );
}

export default App;
