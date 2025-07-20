import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateArtist } from './redux/action/Action';
import { useNavigate, useParams } from 'react-router-dom';
import './Add.css';

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { artists } = useSelector((state) => state.artists);
  
  const [formData, setFormData] = useState({
    artist: '',
    album: '',
    song: ''
  });

  useEffect(() => {
    const artistToEdit = artists.find(a => a.id === id);
    if (artistToEdit) {
      setFormData({
        artist: artistToEdit.artist,
        album: artistToEdit.album,
        song: artistToEdit.song
      });
    }
  }, [id, artists]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateArtist(id, formData));
    navigate('/');
  };

  return (
    <div className="add-artist-form">
      <h2>Edit Song</h2>
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
        <button type="submit">Update Song</button>
      </form>
    </div>
  );
};

export default EditForm;