import { useState } from "react";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
const App = () => {
  const onSubmitUsername = (username: any, password: any) =>
    alert(`You entered: ${username} and password ${password}`);
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm onSubmit={onSubmitUsername} />} />
          <Route path="/signup" element={<SignupForm onSubmit={onSubmitUsername} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
