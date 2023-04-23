import React, { FC, useEffect, useState } from "react";
interface Props {
  onSubmit: (username: string, password: string) => void;
}
export const LoginForm = ({ onSubmit }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    onSubmit(username, password);
    setUsername("");
    setPassword("");
  }

  function handleChangeUsername(event: { target: { value: string } }) {
    setUsername(event.target.value.toLowerCase());
  }

  function handleChangePassword(event: { target: { value: string } }) {
    setPassword(event.target.value.toLowerCase());
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col justify-center items-center gap-5 rounded-md bg-slate-200 h-screen p-10 mx-auto`}
      >
        <h1 className="text-xl font-bold">Login</h1>
        <div>
          <label htmlFor="username-input">Username:</label>
          <input
            id="username-input"
            type="text"
            onChange={handleChangeUsername}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password-input">Password:</label>
          <input
            id="password-input"
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
        </div>
        {/* buttons */}
        <div className="flex gap-x-5">
          <button
            className="bg-purple-400 p-2 rounded-md text-white hover:bg-purple-500"
            id="login-button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
