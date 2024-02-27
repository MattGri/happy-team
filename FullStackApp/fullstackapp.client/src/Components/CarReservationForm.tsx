import axios from 'axios';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/carReservationForm.scss';

interface CarReservationFormProps {
    id: number;
    carImage: string;
    carName: string;
    carPrice: number;
    carLocation: string[];
}


const CarReservationForm = ({ id, carImage, carName, carPrice, carLocation }: CarReservationFormProps) => {

    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const [carNames] = useState(carName);
    const [carImages] = useState(carImage);
    const [carPrices, setCarPrices] = useState(carPrice);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [userId, setUserId] = useState<number | null | string>(null);
    const [carPlace, setCarPlace] = useState(carLocation[0] || '');
    const [carAmount, setCarAmount] = useState(10);
    const [carDay, setCarDay] = useState(1);
    const [error, setError] = useState('');

    const date = moment();
    const currentYear = date.format('YYYY');
    const currentMonth = date.format('MM');
    const currentDay = date.format('DD');
    const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;


    useEffect(() => {
        setEmail(sessionStorage.getItem('email') || '');
        setUserId(sessionStorage.getItem('userId') || '0');

        if (startDate && endDate) {
            const start = moment(startDate);
            const end = moment(endDate);
            const days = end.diff(start, 'days') + 1;
            setCarDay(days);
            setCarPrices(carPrice * days);
        }
    }, [location, startDate, endDate, carPrice]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const sentData = () => {
        if (!startDate || !endDate) {
            setError('Please fill in both start and end dates.');

            setTimeout(() => {
                return setError('');
            }, 2000);
            return;

        }

        axios.post("https://localhost:7207/CarReservation", {
            userId,
            carPlace,
            startDate,
            endDate,
            carPrices,
            carDay,
            carNames,
            carImages
        }).then((response) => {
            console.log(response);
            navigate('/reservations');
        }).catch((error) => {
            console.log(error);
        });

        axios.patch(`https://localhost:7207/Car/${id}`, carAmount)
            .then((response) => {
                console.log(setCarAmount(response.data));
                setCarAmount(carAmount);

            }).catch((error) => {
                console.log(error);
            });

    }

    return (
        <form key={id} onSubmit={handleSubmit}>
            <h3 className="carTitle">{carName}</h3>
            <img src={carImage} alt={carName} className="carImage" />
            <p>{carPrices} EUR per {carDay} {carDay > 1 ? 'days' : 'day'}</p>
            {email &&
                <>

                    <label className="label">Location</label>
                    <select className="selectLocation"
                        onChange={(e) => setCarPlace(e.target.value)}

                    >
                        {
                            carLocation.map((item, index) => (
                                <option key={index}
                                    value={item} className="option"
                                >
                                    {item}
                                </option>
                            ))
                        }
                    </select>
                    <label className="label">Start Date</label>
                    <input type="date" min={currentDate} value={startDate} onChange={(e) => setStartDate(e.target.value)} className="dateInput" />
                    <label className="label">End Date</label>
                    <input type="date" min={currentDate} value={endDate} onChange={(e) => setEndDate(e.target.value)} className="dateInput" />
                    <button type="submit" onClick={sentData} className="reservationBtn">Reserve</button>
                </>
            }
            <p className="error">{error}</p>
        </form>
    );
};

export default CarReservationForm;
