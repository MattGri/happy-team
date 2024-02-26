

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/navigation.scss';

const Navigation = () => {


    const [email, setEmail] = useState('');
    const location = useLocation();

    useEffect(() => {
        setEmail(sessionStorage.getItem('email') || '');
    }, [location]);

    const handleLogout = () => {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('userId');
    };

    return (
        <nav className="navigation">
            <ul className="itemsWrapper">
                <li>
                    <Link to="/" className="navigationLink">Home</Link>
                </li>
                {email ? (
                    <>
                        <li>
                            <p>Welcome {email}</p>
                        </li>
                        <li>
                            <Link to="/" className="navigationLink" onClick={handleLogout}>Logout</Link>
                        </li>
                    </>
                ) : <>
                    <li>
                        <Link to="/register" className="navigationLink">Register</Link>
                    </li>
                    <li>
                        <Link to="/login" className="navigationLink">Login</Link>
                    </li>
                </>

                }
            </ul>
        </nav>
    );
};

export default Navigation;