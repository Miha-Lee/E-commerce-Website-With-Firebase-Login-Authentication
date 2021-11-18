import React, { useState } from "react";
import { auth } from "./Firebase";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const SignUpUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <>
      <Link to="/">
        <h1 className="sign-in-logo">
          MK Shop<span>Pure Luxury</span>
        </h1>
      </Link>
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <h5 className="card-header">
            <strong className="strong-sign-in">Sign in</strong>
          </h5>

          <div className="card-body">
            <form className="signin-form">
              <div className="md-form">
                <input
                  type="email"
                  id="email-label"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                />
              </div>

              <div className="md-form">
                <input
                  type="password"
                  id="password-label"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </div>

              <button
                className="signin-button"
                onClick={loginUser}
                type="submit"
              >
                Sign in
              </button>
              <button
                className="signin-button"
                onClick={SignUpUser}
                type="submit"
              >
                Create Your Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
