const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planet: [],
			character: []
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
					

			}
			
		}
	};
};

export default getState;
