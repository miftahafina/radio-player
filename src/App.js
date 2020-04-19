import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import 'normalize.css';
import './App.scss';

import PlayIcon from './play.png';
import PauseIcon from './pause.png';

function App() {
  const [playing, setPlaying] = useState(false);
  const [icon, setIcon] = useState(PlayIcon);

  const handleClick = () => {
    playing === true ? setPlaying(false) : setPlaying(true);
  }

  useEffect(() => {
    console.log('playing:', playing);
    playing === false ? setIcon(PlayIcon) : setIcon(PauseIcon);
  }, [playing])

  return (
    <div className="container">
      <div className="artwork"></div>

      <div className="metadata">
        <h1 className="radio-name">Radio Dai</h1>
        <p className="address">Butuh - Tengaran - Kab. Semarang</p>
        <p className="freq">107.9 FM</p>
      </div>

      <ReactPlayer url="https://pu.klikhost.com:7204/stream" playing={playing} className="audio"/>

      <div className="control">
        <button className="play" onClick={handleClick}>
          <img src={icon} alt="play button"/>
        </button>
      </div>
    </div>
  );
}

export default App;
