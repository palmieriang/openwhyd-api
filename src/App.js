import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Lottie from 'react-lottie';
import * as qs from 'qs';
import animationData from './animations/7290-music-play.json';
import './App.scss';
import SingleTrack from './components/SingleTrack/SingleTrack';
import GenreDropdown from './components/GenreDropdown/GenreDropdown';
import Player from './components/Player/Player';

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const App = () => {
  const queryString = window.location.search;
  const parsedQueryString = qs.parse(queryString, { ignoreQueryPrefix: true });

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState(parsedQueryString.genre || '');
  const [skip, setSkip] = useState(0);
  const [currentSong, setCurrentSong] = useState('');

  useEffect(() => {
    fetch(`/api/media?genre=${genre}&skip=${skip}`)
      .then(response => response.json())
      .then(data => {
        setList([ ...list , ...data.tracks]);
    
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, [genre, skip])

  const handlePaginationClick = useCallback(() => {
    setSkip(skip + 20);
  }, [skip]);

  const updateQueryString = (genre) => {
    const params = new URLSearchParams(window.location.search);

    params.set('genre', genre);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  };

  const changeMusicGenre = (event) => {
    setGenre(event.target.value);
    updateQueryString(event.target.value);
  };

  const handlePlayer = (event) => {
    event.preventDefault();
    setCurrentSong(event.target.href);
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
          <GenreDropdown changeMusicGenre={changeMusicGenre} initialGenre={genre} />
        </div>
      </div>
      <div className="Main">
        <div className="Wrapper">
          {list.length > 0 ? (
            list.map(track => {
              return (
                <SingleTrack track={track} key={track.trackId} handlePlayer={handlePlayer} />
              )
            })
          ) : (
            <p>No media available</p>
          )}
        </div>
        <div className="Wrapper">
          <button className="LoadMore" onClick={handlePaginationClick}>Load more</button>
        </div>
      </div>
      <Player currentSong={currentSong} />
    </Fragment>
  );
}

export default App;
