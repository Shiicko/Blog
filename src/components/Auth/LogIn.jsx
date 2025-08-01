/* eslint-disable no-unused-vars */
import { useState } from "react";
import * as s from "./Logstyles";
import { useNavigate } from "react-router";

export const LogIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUser = () => {
    const user = localStorage.getItem("data");

    const usersParse = JSON.parse(user);

    return usersParse;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = getUser();
    const storedUsername = storedUsers.username;
    const storedPassword = storedUsers.password;

    if (username === storedUsername && password === storedPassword) {
      console.log("Datos correctos");

      localStorage.setItem("isLogged", true);
      navigate("/");
      setPassword("");
      setUsername("");
    } else {
      alert("Datos incorrectos");
    }
  };

  return (
    <s.FormContainer>
      <s.Title>Login</s.Title>
      <s.Form>
        <s.InputGroup>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder=""
          />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={password}
          />
          <s.Forgot>
            <a href="#">Forgot Password ?</a>
          </s.Forgot>
        </s.InputGroup>
        <s.Sign onClick={handleLogin}>Sign in</s.Sign>
      </s.Form>
      <s.Signup>
        Don't have an account? <a href="/Signup">Sign up</a>
      </s.Signup>
    </s.FormContainer>
  );
};
