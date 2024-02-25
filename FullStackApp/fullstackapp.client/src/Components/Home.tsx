import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles/home.scss';

interface Car {
    id: number;
    carImage: string;
    carName: string;
    carPrice: number;
    carLocation: string[];
}

const Home = () => {
    const [email, setEmail] = useState('');
    const location = useLocation();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7207/Car")
            .then(response => {
                setCars(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    useEffect(() => {
        setEmail(sessionStorage.getItem('email') || '');
    }, [location]);

    return (
        <>
            <h1 className="title">Tesla Reservation Cars in Mallorca</h1>
            <div className="flexContainer">
                {
                    cars.map(({ id, carImage, carName, carPrice, carLocation }: Car) => (
                        <div key={id}>
                            <img src={carImage} alt={carName} className="carImage" />
                            <h3 className="carTitle">{carName}</h3>
                            <p>{carPrice} EUR per day</p>
                            {email &&
                                <select style={{ color: '#000' }}>
                                    {
                                        carLocation.map((item) => (
                                            <option style={{ color: '#000' }}>
                                                {item}
                                            </option>
                                        ))
                                    }
                                </select>
                            }
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default Home;