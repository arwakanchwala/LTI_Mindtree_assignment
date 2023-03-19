import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";

const Login = () => {
    const { error } = useSelector(state => state.auth)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h3>User Login</h3>
            <label>Email:</label>
            <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password:</label>
            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {
                error ? <div className="error" >{error}</div> : ""
            }
            <button className="form-control" type="submit">Login</button>

        </form>
    );
};

export default Login;