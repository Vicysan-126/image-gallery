import React from 'react';
import './App.css';
import images from './data';

function App() {
  return (
    <div className="container">
      <h1>🖼️ Image Gallery</h1>
      <div className="gallery">
        {images.map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.url} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
