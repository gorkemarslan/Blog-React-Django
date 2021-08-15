import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import store from '../store';
import { connect } from 'react-redux';

function Header({ isAuthenticated }) {
  const navbarForAnonymousUsers = () => (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          <FontAwesomeIcon icon={faUser} /> Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
      </li>
    </Fragment>
  );

  const navbarForAuthrnticatedUsers = () => {
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" href="#!">
           Logout
        </Link>
      </li>
    </Fragment>;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            { isAuthenticated ? navbarForAuthrnticatedUsers() : navbarForAnonymousUsers() }
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps)(Header);
