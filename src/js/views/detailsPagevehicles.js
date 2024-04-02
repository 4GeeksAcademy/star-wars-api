import React, { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';

export const DetailsPagevehicles = () => {
    const { uid } = useParams();
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then(res => res.json())
            .then(data => setVehicles(data.result.properties))
            .catch(error => console.error('Error fetching planet:', error));
    }, [uid]);



    return (
        <div className="w-total">
            <br />
            <h1 className="ps-5 text-warning">Detalles del Vehículo</h1>
            <br />
            <div className=" card col-auto w-detailspage">
                <div className="d-flex justify-content-between">
                    <div className="p-5">
                        <h2>{vehicles.model}</h2>
                        <hr />
                        <p>Vehicles class: {vehicles.vehicles_class}</p>
                        <p>Cost in credits: {vehicles.cost_in_credits}</p>
                        <p>Passengers: {vehicles.passengers}</p>
                        <p>Crew: {vehicles.crew}</p>
                    </div>
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} />
                    </div>
                </div>
            </div>

        </div>
    );
};


