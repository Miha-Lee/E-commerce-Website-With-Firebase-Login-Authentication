import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./Components/Firebase";
import "./App.css";

const App = () => {
  const [{ loggedinUser }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        dispatch({
          type: "SET_LOGIN",
          user: userauth,
        });
      } else {
        dispatch({
          type: "SET_LOGIN",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/details">
            <Navbar />
            <Details />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
