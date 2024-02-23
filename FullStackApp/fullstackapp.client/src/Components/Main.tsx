import { useState, useEffect } from 'react';
import axios from 'axios';

interface Car {
    id: number;
    carName: string;
    carTitle: string;
}

const Main = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        //const getCars = async () => {
        ////    try {
        ////        //const response = await fetch("https://localhost:7207/Car");
        ////    //    const data = await response.json();
        ////    //    setCars(data);
        ////    //} catch (error) {
        ////    //    console.error('Error fetching cars:', error);
        ////    //}
        ////};
        //getCars();

        //fetch("https://localhost:7207/Car")
        //    .then(response => response.json())
        //    .then(data => {
        //        setCars(data);
        //        console.log(data);
        //    })
        //    .catch(error => console.error('Error fetching cars:', error));

        axios.get("https://localhost:7207/Car")
            .then(response => {
                setCars(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching cars:', error));



    }, []);

    return (
        <div>
        <h1>Full Stack App</h1>
            <h2>Client</h2>

            {
                cars.map(({ id, carName, carTitle}: Car) => (
                    <div key={id}>
                        <h3>{carName}</h3>
                        <p>{carTitle}</p>
                    </div>
                ))
            }

        </div>
    );
};

export default Main;