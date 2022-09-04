import * as actionTypes from "../actions/actionTypes";
//redurcerların amacı state bilgisini döndürmektir.
const counterReducer = (state = 10, acition) => {
  let newState;
  switch (acition.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + acition.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - acition.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + acition.payload);
    default:
      return state;
  }
};

export default counterReducer;