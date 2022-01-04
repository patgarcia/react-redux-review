import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = actions => {
  // React-redux hook into Redux dispatch
  const dispatch = useDispatch();

  // Return a bound instance of dispatch with all actions passed
  // contained in a single object passed as an argument

  // --- Also wrap return in useMemo arrow function since actions and dispatch are pretty stable
  // --- add actions and dispatch to dependency array
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
