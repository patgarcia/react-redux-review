import { useActions } from './use-actions';
import { decrement, increment, setVal } from './actions';
import { useSelector } from 'react-redux';

export const useCounter = () => {
  // Hooks into redux Provider's state
  const count = useSelector(state => state.count);
  // Custom hook to bind dispatch and action creators
  const actions = useActions({ decrement, increment, setVal });
  return { count, ...actions };
};
