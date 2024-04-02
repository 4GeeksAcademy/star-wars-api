import React, { useState, useContext, useEffect } from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
	}, []);

	useEffect(() => {
		actions.getCharacters();
	}, []);



	return (
		<div className="w-100%">
			<h3 className="ps-5">Planets</h3>
			<div className="caja-horizontal">
				{store.planet.map((planet, index) => (
					<div className="card width-p col-auto" key={index}>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<div className="d-flex justify-content-between">
								<div>
									<Link to={`/object-planet/${planet.uid}`}><button className="btn btn-primary">More infomation</button></Link>
								</div>
								<div>
								<button
										type="button"
										className={`btn ${store.favorites.includes(item.result.properties.name) ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
										onClick={() => {
											const isFavorite = store.favorites.includes(item.result.properties.name)
											if (isFavorite) {
												actions.deleteFavorites(item.result.properties.name);
											} else {
												actions.addFavorites(item.result.properties.name);
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
			<h3 className="ps-5">Character</h3>
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
										className={`btn ${store.favorites.includes(item.result.properties.name) ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
										onClick={() => {
											const isFavorite = store.favorites.includes(item.result.properties.name)
											if (isFavorite) {
												actions.deleteFavorites(item.result.properties.name);
											} else {
												actions.addFavorites(item.result.properties.name);
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
