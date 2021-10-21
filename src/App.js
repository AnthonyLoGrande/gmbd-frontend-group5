import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/SearchAppBar.js'
import { useEffect, useState } from 'react'
import ImgMediaCard from './components/ImgMediaCard.js';


function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    async function getMovieData () { 
      let response = await fetch("http://localhost:3001/movies")
      let json = await response.json();

      //do something with data
      console.log("JSON Data: ", json)
      setMovieData(json);

    }

    getMovieData();

  }, [])

//let movieData = 

  return (
    <div>
      <SearchAppBar title="GMDB"/>
      {movieData.map((elem, idx) => <ImgMediaCard key={idx} movie={elem} />)}
    </div>
  );
}

export default App;
