import Actions from '../actions/types';

const INITIAL_STATE = {
	email: null,
	password: null,
	error: null,
	user: {},
	loading: false
};


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Actions.EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case Actions.PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case Actions.LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case Actions.LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: null, loading: false };
		case Actions.LOGIN_USER:
			return { ...state, loading: true, error: null };
		default:
			return state;
  }
};
