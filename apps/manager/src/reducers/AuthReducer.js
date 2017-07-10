import Actions from '../actions/types';

const INITIAL_STATE = {
	email: null,
	password: null,
	loading: null,
	error: null,
	user: {}
};


export default (state = INITIAL_STATE, action) => {
	console.log('act', action);
	switch (action.type) {
		case Actions.EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case Actions.PASSWORD_CHANGED:
			return { ...state, password: action.payload};
		default:
			return state;
  }
};
