import React, { useState, useEffect } from 'react';
import './App.css';
import SingleTrack from './SingleTrack';

const url = `https://openwhyd.org/hot/?format=json`;
const fetchMedia = () => fetch(url)
  .then(response => response.json());

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
        <p>Loading...</p>
      </div>
    )
  };

  return (
    <div className="AppContainer">
      {list.length > 0 ? (
        list.map(track => {
          return (
            <SingleTrack track={track} key={track._id} />
          )
        })
      ) : (
        <p>No media available</p>
      )}
    </div>
  );
}

export default App;
