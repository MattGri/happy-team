import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/home.scss';
import CarReservationForm from '../Components/CarReservationForm';

interface Car {
    id: number;
    carImage: string;
    carName: string;
    carPrice: number;
    carLocation: string[];
}

const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7207/Car")
            .then(response => {
                setCars(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    return (
        <>
            <h1 className="title">Tesla Rent Cars in Mallorca</h1>
            <div className="flexContainer">
                {
                    cars.map(({ id, carImage, carName, carPrice, carLocation }: Car, index) => (
                        <CarReservationForm key={index} id={id} carImage={carImage} carName={carName} carPrice={carPrice} carLocation={carLocation} />
                    ))
                }
            </div>

        </>
    );
};

export default Home;