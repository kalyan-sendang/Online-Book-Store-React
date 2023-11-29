import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <b>Online book Store</b>
        </Link>

        <div
          className="navbar-collapse"
          id="navbarSupportedContent"
          style={{ justifyContent: "space-between" }}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/cart">
                Cart<span className="sr-only"></span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Religious
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Motivational
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="container" style={{ display: "flex" }}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="register">
                  SignUp<span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="login">
                  SignIn<span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  width: "200px",
                  height: "50px",
                }}
              />
              <button
                style={{
                  marginLeft: "8px",
                  marginBottom: "16px",
                  borderRadius: "0.375rem",
                }}
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
