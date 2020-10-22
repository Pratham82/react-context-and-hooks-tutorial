import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongsList = () => {
  const [songsList, setSongs] = useState([
    { title: "Mirrors", artist: "Justin Timberlake", id: 1 },
    { title: "Nights", artist: "Frank Ocean", id: 2 },
    { title: "New Light", artist: "John Mayer", id: 3 },
  ]);

  const [age, setAge] = useState(18);

  const addSong = (title, artist) =>
    setSongs([...songsList, { title, artist, id: uuid() }]);

  // 1st parameter: is the cleanup funciton which will run after the component update
  // 2nd parameter: We can specify the component, so useEffect will focus on that specific function instead of any change on the dom
  useEffect(() => {
    // If you are using the state inside the callback function then you have to add that state to the dependency array inside the useEffect function
    console.log("useEffect  ran", songsList);
  }, [songsList]);

  useEffect(() => {
    console.log("useEffect  ran", age);
  }, [age]);

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
      <button onClick={() => setAge(age + 1)}>^ Increase Age</button>
      <h3>Current Age: {age}</h3>
    </div>
  );
};

export default SongsList;
