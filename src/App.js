import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { increment,decrement,isLogged,isLoggedOut } from './actions';


const App = () => {
  const counter = useSelector(state => state.counter);
  const isLog = useSelector(state => state.isLogged);
  //const isLogOut = useSelector(state => state.isLoggedOut);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter : {counter}</h2>
      <button className="btn btn-success" onClick={ () => dispatch(increment(3)) }>+</button>
      <button className="btn btn-danger" onClick={ () => dispatch(decrement()) }>-</button>
      <button className="btn btn-primary" onClick={ () => dispatch(isLogged()) }>Sign In</button>
      <button className="btn btn-danger" onClick={ () => dispatch(isLoggedOut()) }>Sign Out</button>
      {
        isLog ? <h2>Logged In</h2> : null
      }
    </div>

  )
}

export default App;
