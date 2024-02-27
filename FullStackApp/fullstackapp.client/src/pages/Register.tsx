import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/authorization.scss';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('All fields are required');

            setTimeout(() => {
                return setError('');
            }, 2000);
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            setTimeout(() => {
                return setError('');
            }, 2000);
            return;
        }

        axios.post("https://localhost:7207/Register", {
            email,
            password
        }).then((response) => {
            console.log(response);
            setEmail('');
            setPassword('');
            navigate('/login');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <h1 className="title">Register</h1>
            <form onSubmit={handleSubmit} className="formContainer">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} className="submitInput" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} className="submitInput" />
                </div>
                <button type="submit" className="submitBtn">Register</button>
            </form>
            <p className="error">{error}</p>
        </div>
    );
};

export default Register;