import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/authorization.scss';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post("https://localhost:7207/Register", {
            name,
            email,
            password
        }).then((response) => {
            console.log(response);
            setEmail('');
            setName('');
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
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name..." value={name} onChange={(e) => setName(e.target.value)} className="submitInput" />
                </div>
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
        </div>
    );
};

export default Register;