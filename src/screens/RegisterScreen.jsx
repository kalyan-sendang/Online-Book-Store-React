import React, { useState } from "react";
import "../assets/styles.css";
import { instance } from "../utils/axios";

const RegisterScreen = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleClick = async () => {
    const response = await instance
      .post("user", {
        userName,
        email,
        password,
        role,
      })
      .then((res) => res)
      .catch((err) => err);
    console.log(response);
  };
  return (
    <div className="name">
      <div>
        <h1>User Registration</h1>
        <br></br>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="test"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Role: </label>
            <select name="cars" id="cars">
              <option  value={role}
              onChange={(e) => setRole(e.target.value)} >USER</option>
              <option  value={role}
              onChange={(e) => setRole(e.target.value)} >INTERN</option>
              <option  value={role}
              onChange={(e) => setRole(e.target.value)} >ADMIN</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterScreen;
