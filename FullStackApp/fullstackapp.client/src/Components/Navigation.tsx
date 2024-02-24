

import { Link } from "react-router-dom";
import '../styles/navigation.scss';

const Navigation = () => {

    return (
        <nav className="navigation">
            <ul className="itemsWrapper">
                <li>
                    <Link to="/" className="navigationLink">Home</Link>
                </li>
                <li>
                    <Link to="/register" className="navigationLink">Register</Link>
                </li>
                <li>
                    <Link to="/login" className="navigationLink">Login</Link>
                </li> 
            </ul>
        </nav>
    );
};

export default Navigation;