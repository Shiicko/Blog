import styled from "styled-components";

export const container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  div {
    width: 25px;
    height: 3px;
    background: black;
    transition: all 0.3s ease;
  }

  &.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.open div:nth-child(2) {
    opacity: 0;
  }
  &.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1100;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100vh;
  background-color: #9df9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: left 0.3s ease;
  z-index: 1000;
  border-radius: 0 15px 15px 0;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.25);

  @media (min-width: 769px) {
    position: static;
    width: 130px;
    height: 60vh;
    gap: 10px;
    border-radius: 20px;
    box-shadow: none;
    left: 0;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const Username = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2px;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: black;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

export const Stats = styled.div`
  font-size: 0.85rem;
  line-height: 1.2;
  color: black;

  @media (max-width: 768px) {
    display: flex;
    gap: 10px;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Button = styled.button`
  background-color: rgb(241 241 241);
  border: none;
  color: #111827;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 5px 8px;
    font-size: 0.8rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px 0;
    gap: 0.5rem;
  }
`;

export const Li = styled.li`
  a,
  span {
    text-decoration: none;
    color: black;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
  }

  a:hover,
  span:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    a,
    span {
      font-size: 0.8rem;
      padding: 3px 6px;
    }
  }
`;
