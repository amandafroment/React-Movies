import React from "react";
import { useState } from "react";

export default function LoginPage({ setUser }) {
  const [newUser, setNewUser] = useState(undefined);

  function handleChange(e) {
    const computedUser = e.target.value;
    setNewUser(computedUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUser(newUser);
  }

  return (
    <>
      <h1>Login Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={newUser}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}
