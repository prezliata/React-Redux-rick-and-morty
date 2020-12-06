export const getStatus = (status) => {
	return {
		type: 'GET_STATUS',
		payload: status
	};
};

export const getGender = (gender) => {
	return {
		type: 'GET_GENDER',
		payload: gender
	};
};

export const getCharactersList = (charactersList) => {
	return {
		type: 'GET_CHARACTERS_LIST',
		payload: charactersList
	};
};

export const loadCharactersByPage = (page=1, status='', gender='') => {
	return (dispatch) => {
		fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`)
		.then(response => response.json())
		.then(data => dispatch(getCharactersList(data)))
		.catch((err) => console.log(err));
	};
};
