import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/home.scss';

interface Car {
    id: number;
    carImage: string;
    carName: string;
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
            <h1 className="title">Tesla Reservation Cars in Mallorca</h1>
            <div className="flexContainer">
                {
                    cars.map(({ id, carImage, carName }: Car) => (
                        <div key={id}>
                            <img src={carImage} alt={carName} className="carImage" />
                            <h3 className="carTitle">{carName}</h3>
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default Home;