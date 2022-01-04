import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setVal } from '../../actions';

const SetCounter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState(count);

  useEffect(() => {
    setInputVal(count);
  }, [count]);

  return (
    <>
      <h2>Set Count</h2>
      <input
        type="text"
        name="value"
        id="value"
        value={inputVal}
        onChange={ev => setInputVal(parseInt(ev.target.value, 10))}
      />
      <button onClick={ev => dispatch(setVal(inputVal))}>submit</button>
    </>
  );
};

export default SetCounter;
