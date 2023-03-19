import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Events from './components/Events';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [registerUser, setRegisterUser] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleSignUp = () => {
    setRegisterUser(true)
    dispatch({
      type: 'RESET'
    })
  }
  const handleLogin = () => {
    setRegisterUser(false)
    dispatch({
      type: 'RESET'
    })
  }
  const authFragment = <>{!registerUser && <>
    <Login />
    <button className="form-control register" onClick={handleSignUp}>Not Registered: SignUp here</button></>}
    {registerUser && <>
      <Register />
      <button className="form-control" onClick={handleLogin}>Login</button></>}</>

  return (
    <div className="App container-fluid">
      {currentUser ? <Events /> : authFragment}
    </div>
  );
}

export default App;
