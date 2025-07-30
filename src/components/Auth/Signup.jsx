/* eslint-disable no-unused-vars */
import * as s from "./Logstyles";
import { useState } from "react";

export default function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("La contraseña no coincide");
    }
    setData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    localStorage.setItem("data", JSON.stringify(data));
    // console.log(data.email, data.password);
  };

  const handleUserdata = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <s.FormContainer onSubmit={handleForm}>
      <s.Title>Sign Up</s.Title>
      <s.Form>
        <s.InputGroup>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleUserdata}
            type="text"
            name="username"
            id="username"
            placeholder=""
            value={data.username}
          />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleUserdata}
            type="email"
            name="email"
            id="email"
            placeholder=""
            value={data.email}
          />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleUserdata}
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={data.password}
          />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder=""
            value={data.confirmPassword}
            onChange={handleUserdata}
          />
        </s.InputGroup>
        <s.Sign style={{ marginTop: "10px" }}>Create account</s.Sign>
      </s.Form>
      <s.Signup>
        Already have an account? <a href="/LogIn">Login</a>
      </s.Signup>
    </s.FormContainer>
  );
}
