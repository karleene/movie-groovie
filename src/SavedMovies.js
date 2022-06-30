import {Link} from 'react-router-dom';

const SavedMovies = (props) => {
    return(
        <section className="savedMovies">
            <Link to={'/'}><button className="back">⬅️Back</button></Link>
            <ul className="savedMoviesContainer">
                {props.savedMovies.map((savedMovie) => {
                    console.log(savedMovie);
                    return(
                        <li key={savedMovie.key} className="savedMovieList">
                            <button className="remove"
                                onClick={() => props.handleRemove(savedMovie.key)}
                            >❌</button>
                            <h2>{savedMovie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w300${savedMovie.img}`} alt={savedMovie.desc} />
                            <p>{savedMovie.desc}</p>
                        </li>
                    )
                })
                
                }
            </ul>
        </section>
    )
}

export default SavedMovies;
