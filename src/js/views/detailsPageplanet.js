import React, { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Tatooine from "../../img/Tatooine.webp"

export const DetailsPageplanet = () => {
    const { uid } = useParams();
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))
            .catch(error => console.error('Error fetching planet:', error));
    }, [uid]);



    return (
        <div className="w-total">
            <h1 className="ps-5 text-warning">Detalles del Planeta</h1>
            <br />
            <div className=" card col-auto w-detailspage">
                <div className="d-flex justify-content-between">
                    <div className="p-5">
                        <h2>{planet.name}</h2>
                        <hr />
                        <p>Population: {planet.population}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Climate: {planet.climate}</p>
                        <p>Diameter: {planet.diameter}</p>
                    </div>
                    <div>
                        
                    {uid == 1 ? (
                        <img src={Tatooine} className="card-img-top" alt="..." />
                    ) : (
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} />
                    )}
                    </div>
                </div>
            </div>

        </div>
    );
};


