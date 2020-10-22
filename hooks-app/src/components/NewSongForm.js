import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    addSong(title, artist);
    setSong("");
    setArtist("");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input
        type="text"
        name="song"
        value={title}
        onChange={(e) => setSong(e.target.value)}
        placeholder="Enter Song name"
      />
      <input
        type="text"
        name="song"
        className="song-input"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter Artist Name"
      />
      <br />
      <br />
      <input type="submit" value="Add Song" className="input-btn" />
      <h3>Current value of song: {title}</h3>
      <h3>Current value of artist: {artist}</h3>
    </form>
  );
};

export default NewSongForm;
