import { useState, useEffect } from "react";
import axios from 'axios';

const Form = () => {

    const [genre, setGenre] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('');
    const [movies, setMovies] = useState([]);

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

    return(
        <main>
            <form action="">
                <label htmlFor="genre"></label>
                <select
                    name=""
                    id="genre"
                    onChange={handleChange}
                    value={selectedGenre}
                >
                <option value="placeholder">Select Genre</option>
                    {
                        genre.map((singleGenre) => {
                            return(
                                <option value={singleGenre.id} key={singleGenre.id}>{singleGenre.name}</option>
                            )
                        })
                    }
                </select>
                
            </form>

            <div className="showMovies">
                <ul className="movieContainer">
                {
                    selectedGenre
                        ? movies.map((movie) => {
                            return (
                                <li key={movie.id} className="movieList">
                                    <h2>{movie.original_title}</h2>
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                                    <p>{movie.overview}</p>
                                </li>
                            )
                        })
                        : null
                }
                </ul>
            </div>
        </main>
    )
}

export default Form; 

