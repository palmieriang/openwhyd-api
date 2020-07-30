import React, { Fragment, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import * as qs from 'qs';
import animationData from './animations/7290-music-play.json';
import './App.scss';
import SingleTrack from './components/SingleTrack/SingleTrack';
import GenreDropdown from './components/GenreDropdown/GenreDropdown';

const fetchMedia = (genre, loadMore) => fetch(`/api/media?genre=${genre}&skip=${loadMore}`)
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
  const queryString = window.location.search;
  const parsedQueryString = qs.parse(queryString, { ignoreQueryPrefix: true });

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [genre, setGenre] = useState(parsedQueryString.genre || '');

  useEffect(() => {
    fetchMedia(genre, 0)
      .then(data => {
        setList(data.tracks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, [genre]);

  const updateQueryString = (genre) => {
    const params = new URLSearchParams(window.location.search);

    params.set('genre', genre);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  };

  const changeMusicGenre = (event) => {
    setGenre(event.target.value);
    updateQueryString(event.target.value);
  };

  const pagination = () => {
    const skipItems = list.length;

    fetchMedia(genre, skipItems)
      .then(data => {
        const newTracks = data.tracks;
        const newList = [ ...list , ...newTracks];
        setList(newList);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
                <SingleTrack track={track} key={track.trackId} />
              )
            })
          ) : (
            <p>No media available</p>
          )}
        </div>
        <div className="Wrapper">
            <button className="LoadMore" onClick={pagination}>Load more</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
