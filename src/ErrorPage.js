// ErrorPage.js
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="errorPage">
            <h3>404!</h3>
            <p>Not all those who wander are lost, but you seem to be looking for a page that doesn't exist.</p>
            <Link to={`/`}>
                <p>⬅️</p>
            </Link>
        </div>
    )
}

export default ErrorPage;