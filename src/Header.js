import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <Link style={{ textDecoration: 'none' }} to={'/'}><h1>Movie Groovie</h1></Link>
    )
}

export default Header; 