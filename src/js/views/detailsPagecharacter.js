import React, { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';

export const DetailsPagecharacter = () => {
    const { uid } = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(error => console.error('Error fetching planet:', error));
    }, [uid]);



    return (
        <div className="w-total">
            <h1 className="ps-5">Detalles del Planeta</h1>
            <br />
            <div className=" card col-auto w-detailspage">
                <div className="d-flex justify-content-between">
                    <div className="p-5">
                        <h2>{character.name}</h2>
                        <hr />
                        <p>Gender: {character.gender}</p>
                        <p>Height: {character.height}</p>
                        <p>Mass: {character.mass}</p>
                        <p>Hair Color: {character.hair_color}</p>
                    </div>
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} />
                    </div>
                </div>
            </div>

        </div>
    );
};


