import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postArtist } from './redux/action/Action';
import './Add.css';
import { useNavigate } from 'react-router-dom';

const AddArtistForm = () => {
  const [formData, setFormData] = useState({
    artist: '',
    album: '',
    song: ''
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posting, error } = useSelector((state) => state.artists);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postArtist(formData));
      setFormData({ artist: '', album: '', song: '' });
      navigate('/');
    } catch (error) {
      console.error('Failed to post artist:', error);
    }
  };

  return (
    <div className="add-artist-form">
      <h2>Add New Music</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          placeholder="Artist name"
          required
        />
        <input
          name="album"
          value={formData.album}
          onChange={handleChange}
          placeholder="Album"
          required
        />
        <input
          name="song"
          value={formData.song}
          onChange={handleChange}
          placeholder="Song title"
          required
        />
        
        <button type="submit" disabled={posting}>
          {posting ? (
            <>
              Adding... <span className="loading"></span>
            </>
          ) : (
            'Add Music'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddArtistForm;