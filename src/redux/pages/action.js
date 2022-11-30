import { INCREASE, DECREASE, RESET } from "./type";

export const addCount = () => ({
  type: INCREASE,

});

export const decrease = () => ({
  type: DECREASE,

});

export const reset = (payload) => ({
  type: RESET,
});
