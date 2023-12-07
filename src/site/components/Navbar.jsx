import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userProfile = JSON.parse(localStorage.getItem("userprofile"));
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  const [search, setSearch] = useState("");
  const logoutHandler = () => {
    localStorage.removeItem("userprofile");
    localStorage.removeItem("cart");
    navigate("/");
  };

  const handleSearch = () => {
    if (search?.length > 0) {
      setSearch("");
      navigate(`?query=${search}&page=1`);
    }
  };
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
            {userProfile && (
              <li className="nav-item active">
                <Link
                  to="/cart"
                  className="nav-link"
                  style={{ width: "80px", height: "100%" }}
                >
                  <i className="fa-solid fa-cart-shopping fa-lg"> </i>
                  Cart
                </Link>
              </li>
            )}
            {/* <li className="nav-item dropdown">
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
            </li> */}
          </ul>

          <div className="container" style={{ display: "flex" }}>
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                <a className="nav-link" href="register">
              
                  SignUp<span className="sr-only"></span>
                </a>
              </li> */}
              {userProfile ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>
                    {userProfile.userName}
                  </a>
                  {userProfile?.role === "ADMIN" ? (
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin" className="dropdown-item">
                          Admin Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" onClick={logoutHandler}>
                          logout
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" onClick={logoutHandler}>
                          logout
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li className="nav-item active">
                  <a className="nav-link" href="login">
                    <i className="fa-solid fa-user"></i>
                    SignIn<span className="sr-only"></span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                type="button"
                onClick={handleSearch}
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
