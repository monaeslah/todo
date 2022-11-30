import { INCREASE, DECREASE, RESET } from "./type";

// REDUCER
const initState = {
  count: 0,
};

// REDUCER
export const counter = (state = 0, action) => {
 
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};
// export default counter
