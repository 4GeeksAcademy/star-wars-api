const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planet: [],
			character: [],
			favourites: [],
			counter: 0

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
			addFavorites: (name) => {
                setStore({
                    favorites: [...getStore().favorites, name],
                    counter: getStore().counter + 1,
                });
            },
            deleteFavorites: (name) => {
                const currentFavorites = getStore().favorites;
                const updatedFavorites = currentFavorites.filter((favorite) => favorite !== name);
                
                setStore({
                    favorites: updatedFavorites,
                    counter: updatedFavorites.length,
                });
            }

		}
	};
};

export default getState;
