// RsidebarStyles.js
import styled from "styled-components";

export const container = styled.div`
  position: fixed;
  top: 0;
  right: 40px;
  width: 150px;
  height: 70vh;
  background-color: #9df9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
  border-radius: 20px;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    right: 20px;
    width: 130px;
    height: auto;
    padding-top: 30px;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    height: auto;
    border-radius: 0;
    padding: 20px;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  color: black;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: revert-layer;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

export const content = styled.div`
  text-align: center;
  color: aliceblue;

  @media (max-width: 768px) {
    color: black;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
    gap: 0.5rem;
  }
`;

export const Li = styled.li`
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-weight: bolder;
    padding: 6px 10px;
    border: 1px solid;
    border-radius: 6px;
    transition: background-color 0.25s ease, transform 0.15s ease;
    display: inline-block;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  a:active {
    transform: translateY(0);
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    a {
      font-size: 0.8rem;
      padding: 4px 8px;
    }
  }
`;
