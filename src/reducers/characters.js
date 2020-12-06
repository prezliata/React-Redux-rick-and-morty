const initialState = {
	charactersList: [],
	pageInfo: {},
	status: '',
	gender: ''
};

const charactersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CHARACTERS_LIST':
			return {
				...state,
				charactersList: action.payload.results,
				pageInfo: action.payload.info,
			};
		case 'GET_STATUS':
			return {
				...state,
				status: action.payload,
			};
		case 'GET_GENDER':
			return {
				...state,
				gender: action.payload,
			};
		default:
			return state;
	}
};

export default charactersReducer;