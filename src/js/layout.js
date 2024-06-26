import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { DetailsPageplanet } from "./views/detailsPageplanet";
import { DetailsPagecharacter } from "./views/detailsPagecharacter";
import {DetailsPagevehicles} from "./views/detailsPagevehicles";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import background from "../img/espacio1.jpg";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{ backgroundImage: `url(${background})` }} className="fondo">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/object-planet/:uid" element={<DetailsPageplanet />} />
						<Route path="/object-character/:uid" element={<DetailsPagecharacter />} />
						<Route path="/object-vehicles/:uid" element={<DetailsPagevehicles />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
