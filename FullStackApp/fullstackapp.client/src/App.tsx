import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navigation from './Components/Navigation';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {

    return (
        <Router>
        <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;