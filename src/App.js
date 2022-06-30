import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import firebase from './firebase';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';
import { Link, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Form from './Form';
import SavedMovies from './SavedMovies';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

function App() {

  const [genre, setGenre] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);


  useEffect(() => {

    axios({
      baseURL: 'https://api.themoviedb.org/3/genre/movie/list',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: 'db933df642e6d1ccaa640b2cb9533d0a',
        language: 'en-US',
      }
    }).then((genreData) => {
      console.log(genreData.data.genres);
      setGenre(genreData.data.genres)
    })
  }, [])

  useEffect(() => {

    axios({
      baseURL: 'https://api.themoviedb.org/3/discover/movie',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: 'db933df642e6d1ccaa640b2cb9533d0a',
        language: 'en-US',
        with_genres: selectedGenre,
        sort_by: 'popularity.desc'
      }
    }).then((movieData) => {
      console.log(movieData.data.results);
      setMovies(movieData.data.results)
    })
  }, [selectedGenre])

  const handleChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  const handleSave = (movieId, movieTitle, moviePoster, movieOverview) => {

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    const movieObject = {
      'key': movieId,
      'title': movieTitle,
      'img': moviePoster,
      'desc': movieOverview
    }

    push(dbRef, movieObject);

    alert('Selected movie has been saved');
  }

  const handleRemove = (movieId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${movieId}`);

    remove(dbRef);
  }

  useEffect(() => {

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {

      const data = response.val();

      const newState = [];
      for (let key in data) {
        newState.push(
          {
            key: key,
            title: data[key].title,
            img: data[key].img,
            desc: data[key].desc
          }
        )
      }
      setSavedMovies(newState);
    });
  }, []);  
  

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Form
            genre={genre}
            selectedGenre={selectedGenre}
            handleChange={handleChange}
            movies={movies}
            handleSave={handleSave}
          />}>
          </Route>

          <Route path="/savedMoviesList" 
            element={<SavedMovies
              savedMovies={savedMovies}
              handleRemove={handleRemove}
          />}>
          </Route>

          <Route path="*" element = {<ErrorPage /> } />
        </Routes>
      </div>
        <Footer />
    </div>
  );
}

export default App;
