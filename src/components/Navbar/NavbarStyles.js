import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #9df9f9;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgba(243, 244, 246, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 0.75rem 1.5rem;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    /* flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1rem; */
    display: none;
  }
`;

export const Left = styled.div`
  a {
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 1rem;
  }

  a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
  }

  @media (max-width: 1024px) {
    a {
      font-size: 0.95rem;
      margin-right: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    a {
      font-size: 0.9rem;
      margin-right: 0;
    }
  }
`;

export const Center = styled.div`
  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(243, 244, 246, 1);
  }

  @media (max-width: 768px) {
    span {
      font-size: 1.1rem;
    }
  }
`;

export const Right = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

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

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;
