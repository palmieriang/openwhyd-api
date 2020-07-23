import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './animations/7290-music-play.json';
import './App.scss';
import SingleTrack from './SingleTrack';

const url = `https://openwhyd.org/hot/?format=json`;
const fetchMedia = () => fetch(url)
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

  useEffect(() => {
    fetchMedia()
      .then(data => {
        // console.info(data);
        setList(data.tracks);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  if(isLoading) {
    return (
      <div className="AppContainer">
        <Lottie 
          options={animationOptions}
          height={400}
          width={400}
        />
      </div>
    )
  };

  return (
    <div className="AppContainer">
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
  );
}

export default App;
