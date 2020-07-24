import React, { Fragment, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './animations/7290-music-play.json';
import './App.scss';
import SingleTrack from './SingleTrack';
import GenreDropdown from './GenreDropdown';

const fetchMedia = (genre) => fetch(`https://openwhyd.org/hot/${genre}?format=json`)
  .then(response => response.json());

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const App = () => {
  const [list, setList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState('');

  useEffect(() => {
    fetchMedia(genre)
      .then(data => {
        setList(data.tracks);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  }, [genre]);

  const changeMusicGenre = (event) => {
    setGenre(event.target.value);
  };

  if(isLoading) {
    return (
      <div className="Wrapper">
        <Lottie 
          options={animationOptions}
          height={400}
          width={400}
        />
      </div>
    )
  };

  return (
    <Fragment>
      <div className="Header">
        <div className="Wrapper">
          <h1>Popular tracks {genre && <span>/ {genre}</span>}</h1>
          <GenreDropdown changeMusicGenre={changeMusicGenre} />
        </div>
      </div>
      <div className="Wrapper">
        {list.length > 0 ? (
          list.map(track => {
            return (
              <SingleTrack track={track} key={track.trackId} />
            )
          })
        ) : (
          <p>No media available</p>
        )}
      </div>
    </Fragment>
  );
}

export default App;
