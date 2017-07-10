import firebase from 'firebase';
import Actions from './types';

export const emailChanged = (text) => {
    console.log('t', text);
    return {
      type: Actions.EMAIL_CHANGED,
      payload: text
    };
};

export const passwordChanged = (text) => {
  console.log('p', text);
  return {
    type: Actions.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
	const reqPromise = firebase.auth().signInWithEmailAndPassword(email, password);

	return (dispatch) => {
		dispatch({ type: Actions.LOGIN_USER });
		reqPromise
		.then(user => loginUserSuccess(dispatch, user)
		)
		.catch((err) => {
			console.log(err);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
		});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({
		type: Actions.LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: Actions.LOGIN_USER_SUCCESS,
		payload: user
	});
};
