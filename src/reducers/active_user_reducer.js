import { actionTypes } from '../actions';

export default (state=null, action) => {
  switch (action.type) {
    case actionTypes.USER_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
