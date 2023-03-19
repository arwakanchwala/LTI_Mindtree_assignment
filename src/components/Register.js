import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authActions";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(email, username, password));
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h3>Sign Up Here</h3>
      <label>Email:</label>
      <input
        className="form-control"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} required />

      <label>Username:</label>
      <input
        className="form-control"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} required />

      <label>Password:</label>
      <input
        className="form-control"
        type="password"
        pattern="(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+!=])(?=.{8,}).*$"
        value={password}
        onChange={(e) => setPassword(e.target.value)} required />
      <ul className="password-validations">
        <li>Password should be at least 8 characters long</li>
        <li>Password should have min 1 Uppercase letter</li>
        <li>Password should have min 1 Lowercase letter</li>
        <li>Password should have min 1 Special case letter from following @#$%^&+!</li>
      </ul>

      <button className="form-control" type="submit">Register</button>
      {error ? <div className="error">{error}</div> : ""}
      {/* <Login /> */}
    </form>
  );
};


export default Register;