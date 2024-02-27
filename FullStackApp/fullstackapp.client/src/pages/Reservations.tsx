import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/reservations.scss';

interface CarReservation {
    id: number;
    carNames: string;
    startDate: string;
    endDate: string;
    carPrices: number;
    carImages: string;
    carPlace: string;
}

const Reservations = () => {

    const [carReservations, setCarReservations] = useState([]);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');

        axios.get(`https://localhost:7207/CarReservation/${userId}`)
            .then(response => {
                setCarReservations(response.data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const cancelReservation = (id: number) => {
        axios.delete(`https://localhost:7207/CarReservation/${id}`)
            .then(response => {
                console.log(response.data);
                setCarReservations(carReservations.filter((carReservation: CarReservation) => carReservation.id !== id));
            })
            .catch(error => console.error('Error fetching cars:', error));
    }

    return (
        <div>
            <h1 className="title">Reservations</h1>
            <div className="flexContainer">
                {
                    carReservations.map(({ id, carNames, startDate, endDate, carPrices, carImages, carPlace }: CarReservation) => (
                        <div key={id}>
                            <h3 className="carTitle">{carNames}</h3>
                            <img src={carImages} alt={carNames} className="carImage"/>
                            <div className="wrapper">
                                <label>Price</label>
                                <p>{carPrices}</p>
                            </div>
                            <label className="label">Location</label>
                            <p>{carPlace}</p>
                            <label className="label">Start Date</label>
                            <p>{startDate}</p>
                            <label className="label">End Date</label>
                            <p>{endDate}</p>
                            <button onClick={() => cancelReservation(id)} className="cancelReservation">Cancel Reservation</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Reservations;