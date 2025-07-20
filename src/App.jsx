import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const songs = [
    { id: 1, title: "Hakime nesh", album: "Anleyaym", artist: "Tamrat Desta" },
    { id: 2, title: "Yene Habesha", album: "Ethiopia", artist: "Teddy Afro" },
    { id: 3, title: "Tizita", album: "Memories", artist: "Mulatu Astatke" },
    { id: 4, title: "Ertale", album: "Volcano", artist: "Gigi" },
    { id: 5, title: "Ambassel", album: "Traditional", artist: "Asnakech Worku" }
  ];

  return (
    <div className="app-container">
      <div className="main">
        <h1>Music List Platform</h1>
        <p>Organize your favorite songs</p>
        <button className="button add-button">Add Songs +</button>
      </div>
      
      <div className="music-list-container">
        <ul className="music-list">
          {songs.map((song) => (
            <li key={song.id} className="song-item">
              <div className="song-info">
                <p className="song-title">{song.title}</p>
                <div className="song-details">
                  <span className="album">{song.album}</span>
                  <span className="artist">{song.artist}</span>
                </div>
              </div>
              <button className="delete-btn">X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;