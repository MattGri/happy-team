import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navigation from './Components/Navigation';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Reservations from './pages/Reservations';

function App() {

    return (
        <Router>
        <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reservations" element={<Reservations />} />
            </Routes>
        </Router>
    );
}

export default App;