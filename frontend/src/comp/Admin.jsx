import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    } else {
      document.querySelector("#log").textContent =
        "Check the password or username";
    }
  }

  if (loggedIn) {
    return <Navigate to={`/user`} />;
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h1 className="text-center mb-4">Admin Login</h1>
        <h1 id="log"></h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              User name
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              aria-describedby="usernameHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
