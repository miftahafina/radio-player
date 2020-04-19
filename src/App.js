import React from 'react';
import 'normalize.css';
import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="artwork">
        Artwork
      </div>

      <div className="metadata">
        <h1 className="radio-name">Radio Da'i</h1>
        <p className="address">Butuh - Tengaran - Kab. Semarang</p>
        <p className="freq">107.9 FM</p>
      </div>

      <div className="control">
        <button className="play">&raquo;</button>
      </div>
    </div>
  );
}

export default App;
