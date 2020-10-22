import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongsList = () => {
  const [songsList, setSongs] = useState([
    { title: "Mirrors", artist: "Justin Timberlake", id: 1 },
    { title: "Nights", artist: "Frank Ocean", id: 2 },
    { title: "New Light", artist: "John Mayer", id: 3 },
  ]);

  const addSong = (title, artist) =>
    setSongs([...songsList, { title, artist, id: uuid() }]);

  return (
    <div className="song-list">
      <h1 className="heading">Songs List</h1>
      <ul>
        {songsList.map((song) => (
          <li key={song.id}>
            <b>{song.title}</b> {` - ${song.artist}`}
          </li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongsList;
