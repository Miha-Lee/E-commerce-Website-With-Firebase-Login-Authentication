import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "./Firebase";
import ShoppingCart from "./ShoppingCart";

const Navbar = () => {
  const [{ loggedinUser }, dispatch] = useStateValue();

  const logoutUser = () => {
    if (loggedinUser) {
      auth.signOut();
    }
  };

  return (
    <div>
      <div className="mini-nav">
        <span className="user-text">
          Hello, {loggedinUser ? loggedinUser.email : "User"}
        </span>
        <Link
          to={!loggedinUser && "/login"}
          className="mini-a"
          onClick={logoutUser}
        >
          {loggedinUser ? "Sign Out" : "Sign In"}
        </Link>
      </div>

      <div className="main-nav">
        <Link to="/">
          <h1 className="logo">
            MK Shop<span>Pure Luxury</span>
          </h1>
        </Link>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
