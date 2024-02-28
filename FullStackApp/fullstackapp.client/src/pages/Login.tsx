import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('All fields are required');

            setTimeout(() => {
                return setError('');
            }, 2000);
            return;
        }
        else if (password.length < 1) {
            setError('Password must be at least 1 characters long');
            setTimeout(() => {
                return setError('');
            }, 2000);
            return;
        }

        axios.post("https://localhost:7207/Login", {
            email,
            password
        }).then((response) => {
            console.log(response);
            const userId = response.data.userId;
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('userId', userId);
            setEmail('');
            setPassword('');
            navigate('/')
        }).catch((error) => {
            console.log(error);

            setError(error.response.data);

            setTimeout(() => {
                return setError('');
            }, 2000)
        });
    }

    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form className="formContainer" onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="submitInput" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="submitInput" />
                </div>
                <button type="submit" className="submitBtn">Login</button>
            </form>
            <p className="error">{error}</p>
        </div>
    );
};

export default Login;