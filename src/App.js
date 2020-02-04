import React from 'react';
import './App.css';
import { Increase } from './action';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return(
    <div>
      Counter: {count}<br />
      <button onClick={() => {dispatch(Increase())}}>Increase</button>
    </div>
  )
}

export default App;
