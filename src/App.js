import React, { useState, useEffect } from 'react';
import './App.css';

const url = `https://openwhyd.org/hot/?format=json`;
const fetchMedia = () => fetch(url)
  .then(response => response.json());

const App = () => {
  const [list, setList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMedia()
      .then(data => {
        console.info(data);
        setList(data.tracks);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
