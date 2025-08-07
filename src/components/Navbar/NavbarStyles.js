import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgba(243, 244, 246, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export const Left = styled.div`
  a {
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
  }
`;

export const Center = styled.div`
  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(243, 244, 246, 1);
  }
`;

export const Right = styled.div``;

export const LoginButton = styled.a`
  background-color: rgb(241 241 241);
  padding: 0.5rem 1rem;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
