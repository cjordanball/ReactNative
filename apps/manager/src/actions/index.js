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
        reqPromise.then((user) => {
            dispatch(
                {
                    type: Actions.SIGN_IN_USER,
                    payload: user
                }
            );
        });
    };
};

