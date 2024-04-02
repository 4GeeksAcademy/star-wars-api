const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planet: [],
			character: [],
			favourites: [],
			counter: 0,
			vehicles: []

		},
		actions: {
			getPlanets: async () => {
				fetch('https://www.swapi.tech/api/planets/')
					.then(res => res.json())
					.then(data => setStore({ planet: data.results }));
			},
			getCharacters: async () => {
				fetch('https://www.swapi.tech/api/people')
					.then(res => res.json())
					.then(data => setStore({ character: data.results }));


			},
			
			getVehicles: async () => {
				fetch('https://www.swapi.tech/api/vehicles/')
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
			},
			addFavorites: (name) => {
				setStore({
					favourites: [...getStore().favourites, name],
					counter: getStore().counter + 1,
				});
			},
			deleteFavorites: (name) => {
				const currentFavorites = getStore().favourites;
				const updatedFavorites = currentFavorites.filter((favourites) => favourites !== name);

				setStore({
					favourites: updatedFavorites,
					counter: updatedFavorites.length,
				});
			}

		}
	};
};

export default getState;
