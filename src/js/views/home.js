import React, { useState, useContext, useEffect } from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Tatooine from "../../img/Tatooine.webp"

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
	}, []);

	useEffect(() => {
		actions.getCharacters();
	}, []);
	
	useEffect(() => {
		actions.getVehicles();
	}, []);


	return (
		<div className="w-100%">
			<h3 className="ps-5 text-warning">Planets</h3>
			<div className="caja-horizontal">
				{store.planet.map((planet, index) => (
					<div className="card width-p col-auto" key={index}>
						{planet.uid == 1 ? (
                        <img src={Tatooine} className="card-img-top" alt="..." />
                    ) : (
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} className="card-img-top" alt="..." />
                    )}
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<div className="d-flex justify-content-between">
								<div>
									<Link to={`/object-planet/${planet.uid}`}><button className="btn btn-primary">More infomation</button></Link>
								</div>
								<div>
									<button
										type="button"
										className={`btn ${store.favourites.includes(`${planet.name}`) ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
										onClick={() => {
											const name = `${planet.name}`;
											const isFavorite = store.favourites.includes(name)

											if (isFavorite) {
												console.log(name + "true")
												actions.deleteFavorites(name);
											} else {
												console.log(name + "false")
												actions.addFavorites(name);
											}
										}}>
										<MdOutlineFavoriteBorder />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<br></br>
			<h3 className="ps-5 text-warning">Character</h3>
			<div className="caja-horizontal">
				{store.character.map((character, index) => (
					<div className="card  width-p col-auto" key={index}>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{character.name}</h5>
							<div className="d-flex justify-content-between">
								<div>
									<Link to={`/object-character/${character.uid}`}>
										<button href="#" className="btn btn-primary ">More infomation</button>
									</Link>
								</div>
								<div>
									<button
										type="button"
										className={`btn ${store.favourites.includes(`${character.name}`) ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
										onClick={() => {
											const name = `${character.name}`;
											const isFavorite = store.favourites.includes(name)

											if (isFavorite) {
												console.log(name + "true")
												actions.deleteFavorites(name);
											} else {
												console.log(name + "false")
												actions.addFavorites(name);
											}
										}}>
										<MdOutlineFavoriteBorder />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<br></br>
			<h3 className="ps-5 text-warning">Vehicles</h3>
			<div className="caja-horizontal">
				{store.vehicles.map((vehicles, index) => (
					
					<div className="card  width-p col-auto" key={index}>
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{vehicles.name}</h5>
							<div className="d-flex justify-content-between">
								<div>
									<Link to={`/object-vehicles/${vehicles.uid}`}>
										<button href="#" className="btn btn-primary ">More infomation</button>
									</Link>
								</div>
								<div>
									<button
										type="button"
										className={`btn ${store.favourites.includes(`${vehicles.name}`) ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
										onClick={() => {
											const name = `${vehicles.name}`;
											const isFavorite = store.favourites.includes(name)

											if (isFavorite) {
												console.log(name + "true")
												actions.deleteFavorites(name);
											} else {
												console.log(name + "false")
												actions.addFavorites(name);
											}
										}}>
										<MdOutlineFavoriteBorder />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>

	);

};
