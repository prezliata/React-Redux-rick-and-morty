import { combineReducers } from 'redux';

import charactersReducer from '../reducers/characters';

const allReducers = combineReducers({
	charactersReducer: charactersReducer,
});

export default allReducers;