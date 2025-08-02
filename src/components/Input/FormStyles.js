import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  max-width: 500px;
  padding: 12px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 10px;
  border-radius: 6px;
  background-color: #f5f5f5;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #004182;
  }
`;
