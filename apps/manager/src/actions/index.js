import firebase from 'firebase';
import { ActionTypes } from './types';

export const emailChanged = (text) => {
	return {
		type: ActionTypes.EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: ActionTypes.PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({
			type: ActionTypes.LOGIN_USER
		});
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((err) => {
				console.log('ERROR: ', err);
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({
		type: ActionTypes.LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: ActionTypes.LOGIN_USER_SUCCESS,
		payload: user
	});
};
