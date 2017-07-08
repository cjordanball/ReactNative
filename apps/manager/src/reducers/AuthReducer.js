import Actions from '../actions/types';

const INITIAL_STATE = {
  email: ''
};

console.log

export default (state = null, action) => {
  switch (action.type) {
    case Actions.EMAIL_CHANGED:
      console.log('Hooray, it changed.');
      return action.payload;
    default:
      return state;
  }
};
