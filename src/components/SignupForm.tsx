import React, { FC, useEffect, useState } from "react";
interface Props {
  onSubmit: (firstname: string, password: string) => void;
}
export const SignupForm = ({ onSubmit }: Props) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    onSubmit(firstname, password);
    setfirstname("");
    setEmail("");
    setlastname("");
    setPassword("");
  }

  function handleChangefirstname(event: { target: { value: string } }) {
    setfirstname(event.target.value.toLowerCase());
  }
  function handleChangeEmail(event: { target: { value: string } }) {
    setEmail(event.target.value.toLowerCase());
  }

  function handleChangelastname(event: { target: { value: string } }) {
    setlastname(event.target.value.toLowerCase());
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
        <h1 className="text-xl font-bold">Signup</h1>
        <div>
          <label htmlFor="firstname-input">First Name:</label>
          <input
            id="firstname-input"
            type="text"
            onChange={handleChangefirstname}
            value={firstname}
          />
        </div>
        <div>
          <label htmlFor="lastname-input">Last Name:</label>
          <input
            id="lastname-input"
            type="text"
            onChange={handleChangelastname}
            value={lastname}
          />
        </div>
        <div>
          <label htmlFor="email-input">Email:</label>
          <input
            id="email-input"
            type="text"
            onChange={handleChangeEmail}
            value={email}
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

export default SignupForm;
