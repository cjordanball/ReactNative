import Actions from '../actions/types';

const INITIAL_STATE = {
  email: ''
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
