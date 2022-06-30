import {Link} from 'react-router-dom';

const Form = (props) => {  

    return(
        <main>
            <form action="">
                <label htmlFor="genre"></label>
                <select
                    name=""
                    id="genre"
                    onChange={props.handleChange}
                    value={props.selectedGenre}
                >
                <option value="placeholder">Select Genre</option>
                    {
                        props.genre.map((singleGenre) => {
                            return(
                                <option value={singleGenre.id} key={singleGenre.id}>{singleGenre.name}</option>
                            )
                        })
                    }
                </select>
            </form>

            <Link to={`/savedMoviesList`}><button className="view">See Saved Movies</button></Link>

            <div className="showMovies">
                <ul className="movieContainer">
                {
                    props.selectedGenre
                        ? props.movies.map((movie) => {
                            return (
                                <li key={movie.id} className="movieList">
                                    <button className="save"
                                        onClick={() => props.handleSave(movie.id, movie.original_title, movie.poster_path, movie.overview)}
                                    >✔️</button>
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

