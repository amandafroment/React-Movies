import React from "react";
import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ setUser }) {
  const [newUser, setNewUser] = useState(undefined);

  function handleChange(e) {
    const loggedInUser = e.target.value;
    setNewUser(loggedInUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUser(newUser);
  }

  return (
    <>
      <div className="LoginPageContainer">
        <div className="LoginPageInnerContainer">
          <h1>Please enter your desired username below</h1>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="LoginForm"
          >
            <label>Username</label>
            <input
              type="text"
              name="userName"
              value={newUser}
              onChange={handleChange}
            />
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>
    </>
  );
}
