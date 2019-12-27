import * as ActionTypes from './ActionTypes';

export const Feedback = (state = { errMess: null, feedback: null }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {...state, feedback: action.payload};

    default:
      return state;
  }
};