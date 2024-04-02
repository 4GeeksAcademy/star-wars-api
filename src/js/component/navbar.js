import React from "react";
import { Link } from "react-router-dom";
import Star_Wars_Logo from "../../img/Star_Wars_Logo.svg.png"
export const Navbar = () => {
	return (
		<div>

			<nav className="navbar navbar-light bg-light mb-3 ">
				<div className="d-flex">
					<div>
						<Link to="/">
							<img src={Star_Wars_Logo} className="logo-star" alt="..." />
						</Link>
					</div>

					<div className="ml-auto">
						<div class="btn-group">
							<button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favourites
							</button>
							<ul class="dropdown-menu">
								...
							</ul>
						</div>
					</div>
				</div>
			</nav>

		</div>
	);
};
