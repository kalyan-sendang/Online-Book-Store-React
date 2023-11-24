import React, { useState } from "react";
import "../assets/styles.css";
import { instance } from "../utils/axios";
function LoginScreen() {
  async function handleSubmit() {
    const response = await instance
      .post("user/login", {
        userName,
        password,
      })
      .then((res) => res)
      .catch((err) => err);

    console.log(response);
  }

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="name">
      <div>
        <h1>User Login</h1>
        <br></br>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
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

          <button type="button" onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
