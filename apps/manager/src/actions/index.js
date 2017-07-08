import Actions from './types';

export const emailChanged = (text) => {
    console.log('t', text);
    return {
      type: Actions.EMAIL_CHANGED,
      payload: text
    };
};

