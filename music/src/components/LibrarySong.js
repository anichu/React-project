import React from 'react';

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async (id) => {
    const selectedSong = songs.filter((state) => state.id === id);
    // console.log(selectedSong);
    await setCurrentSong(selectedSong[0]);
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    // check is the song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`library-song ${song.active ? 'selected' : ''}`}
      onClick={() => songSelectHandler(id)}
    >
      <img alt={song.name} src={song.cover} />

      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
