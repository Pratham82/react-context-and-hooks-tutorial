import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const SongsList = () => {
  const [songsList, setSongs] = useState([
    { title: "Mirrors", artist: "Justin Timberlake", id: 1 },
    { title: "Nights", artist: "Frank Ocean", id: 2 },
    { title: "New Light", artist: "John Mayer", id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songsList, { title: "Hello", artist: "Adele", id: uuid() }]);
  };

  return (
    <div className="song-list">
      <h1>Songs List</h1>
      <ul>
        {songsList.map((song) => (
          <li key={song.id}>
            <b>{song.title}</b> {` - ${song.artist}`}
          </li>
        ))}
      </ul>
      <button onClick={addSong}> Add Song</button>
    </div>
  );
};

export default SongsList;
