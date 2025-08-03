import styled from "styled-components";

export const Title = styled.h3`
  color: aliceblue;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;

export const container = styled.div`
  position: absolute;
  top: 0;
  right: 40px;
  width: 150px;
  height: 70vh;
  background-color: rgba(17, 24, 39, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
  border-radius: 10px;
`;

export const content = styled.div`
  text-align: center;
  color: aliceblue;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Li = styled.li`
  a {
    text-decoration: none;
    color: aliceblue;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 6px;
    transition: background-color 0.25s ease, transform 0.15s ease;
    display: inline-block;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }

  a:active {
    transform: translateY(0);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
