/* eslint-disable no-unused-vars */
import * as s from "./Logstyles";

export const LogIn = () => {
  return (
    <s.FormContainer>
      <s.Title>Login</s.Title>
      <s.Form>
        <s.InputGroup>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" />
          <s.Forgot>
            <a href="#">Forgot Password ?</a>
          </s.Forgot>
        </s.InputGroup>
        <s.Sign>Sign in</s.Sign>
      </s.Form>
      <s.Signup>
        Don't have an account? <a href="/Signup">Sign up</a>
      </s.Signup>
    </s.FormContainer>
  );
};
