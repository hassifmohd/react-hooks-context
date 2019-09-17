import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Song A", id: 1 },
    { title: "Song B", id: 2 },
    { title: "Song C", id: 3 }
  ]);

  const [counter, setCounter] = useState(1);

  //add a song
  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  useEffect(() => {
    //to control lifecycle eg: connect with database
    //only run when you update song
    console.log('USEEFFECT1===');
    console.log("useEffect hook ran:", songs);
  }, [songs]);

  useEffect(() => {
    //to control lifecycle eg: connect with database
    //run when any state is updated
    console.log('USEEFFECT2===');
    console.log("songs:", songs);
    console.log("counter:", counter);
  });

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
        <li>Perma song A</li>
        <li>Perma song B</li>
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setCounter(counter + 1)}>
        Add counter : {counter}
      </button>
    </div>
  );
};

export default SongList;
