import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    React.useEffect(() => {
    }, [])

    const login = (event) => {
        event.preventDefault();
        history.push("/search");
    };

    return (
        <div className="login">
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                    />
                    <button disabled={email.length === 0 || password.length ===0} onClick={login} type="submit" className="login__signInButton">
                        Sign in
                     </button>
                </form>
            </div>
        </div>
    );
}

export default Login;