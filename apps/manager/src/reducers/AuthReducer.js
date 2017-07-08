import { ActionTypes } from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	loading: false,
	error: '',
	user: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case ActionTypes.PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case ActionTypes.LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case ActionTypes.LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading: false };
		case ActionTypes.LOGIN_USER:
			return { ...state, loading: true, error: '' };
		default:
			return state;
	}
};
