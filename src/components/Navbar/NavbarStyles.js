import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgba(17, 24, 39, 1);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(243, 244, 246, 1);
`;

export const Left = styled.div`
  a {
    color: rgba(243, 244, 246, 1);
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
  background-color: rgba(167, 139, 250, 1);
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
