import { INCREMENT, DECREMENT, SET } from './actions';

const initialState = { count: 20 };

export const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === SET) {
    return { count: action.payload };
  }
  return state;
};
