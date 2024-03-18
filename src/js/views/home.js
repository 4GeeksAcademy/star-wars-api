import React, { useContext, useEffect } from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";


export const Home = () => {

	useEffect(() => {
		actions.getPlanets();
	}, []);

	useEffect(() => {
		actions.getCharacters();
	}, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="w-100%">
			<h3 className="ps-5">Planets</h3>
			<div className="caja-horizontal">
				{store.planet.map((planet, index) => (
					<div className="card width-p col-auto" key={index}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<div className="d-flex justify-content-between">
								<div>
									<a href="#" className="btn btn-primary ">More infomation</a>
								</div>
								<div>
									<button href="#"><MdOutlineFavoriteBorder /></button>
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
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{character.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<div className="d-flex justify-content-between">
								<div>
									<a href="#" className="btn btn-primary ">More infomation</a>
								</div>
								<div>

									<button href="#"><MdOutlineFavoriteBorder /></button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>

	);

};
