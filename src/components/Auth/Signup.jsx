/* eslint-disable no-unused-vars */
import * as s from "./styles";

export default function Signup() {
  return (
    <s.FormContainer>
      <s.Title>Sign Up</s.Title>
      <s.Form>
        <s.InputGroup>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="" />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" />
        </s.InputGroup>
        <s.InputGroup>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder=""
          />
        </s.InputGroup>
        <s.Sign>Create account</s.Sign>
      </s.Form>
      <s.Signup>
        Already have an account? <a href="#">Login</a>
      </s.Signup>
    </s.FormContainer>
  );
}
