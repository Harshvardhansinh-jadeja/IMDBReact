import React, {Component} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar=()=> {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="mx-5">
            <Link className="navbar-brand mx-5 font-weight-bold" to="/">
              Vidly
            </Link>
            <NavLink className="navbar-brand mx-3" to="/customers">Customers</NavLink>
            <NavLink className="navbar-brand mx-3" to="/movies">Movies</NavLink>
            <NavLink className="navbar-brand mx-3" to="/rentals">Rentals</NavLink>
          </div>
        </nav>
      </div>
    );
  }

export default NavBar;


