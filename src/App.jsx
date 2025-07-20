import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchartist, deletArtist } from "./redux/action/Action";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { artists, loading, error, deleting } = useSelector(
    (state) => state.artists
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchartist());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      try {
        await dispatch(deletArtist(id));
        dispatch(fetchartist());
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app-container">
      <div className="main">
        <h1>Music List Platform</h1>
        <p>Organize your favorite songs</p>
        <button
          onClick={() => navigate("/add-song")}
          className="button add-button"
        >
          Add Songs +
        </button>
      </div>

      <div className="music-list-container">
        <ul className="music-list">
          {artists.map((artist) => (
            <li key={artist.id} className="song-item">
              <div className="song-info">
                <p className="song-title">{artist.song}</p>
                <div className="song-details">
                  <span className="album">{artist.album}</span>
                  <span className="artist">{artist.artist}</span>
                </div>
              </div>
              <div className="action-buttons">
                <Link to={`/edit-song/${artist.id}`} className="edit-btn">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(artist.id)}
                  className="delete-btn"
                  disabled={deleting}
                >
                  {deleting ? "..." : "X"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
