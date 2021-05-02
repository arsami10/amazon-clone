import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); // this is stop the refresh!!!
        //do the login logic...

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // loggin in, redirect to homepage...
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault(); // this is stop the refresh!!!
        //do the register logic...

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in...
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };
    
    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-2.png"
                    alt=""
                    />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="pasasword"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in, you agree to Amazon's Conditions of Use and Sale. Please see our privacy Notice, our cookies Notice and our intrest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
};

export default Login;
