import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: 160px;
  height: 75vh;
  background-color: #1e1e1e;
  border-radius: 20px;
  color: black;
  margin-bottom: 10px;
`;

export const card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;
export const avatar = styled.img`
  height: 150px;
  width: 120px;
  border: 1px solid black;
`;
export const name = styled.div`
  background-color: #ffffff;
  padding: 5px;
  border: 1px solid black;
  border-radius: 15px;
`;

export const statsMain = styled.div``;

export const stats = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 5px;
`;
