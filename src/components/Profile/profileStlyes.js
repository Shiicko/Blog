import styled from "styled-components";

export const container = styled.div`
  display: flex;
  width: 160px;
  height: 75vh;
  background: linear-gradient(145deg, #1e1e1e, #141414);
  border-radius: 20px;
  color: #fff;
  margin-bottom: 10px;
  box-shadow: 8px 8px 15px #0a0a0a, -8px -8px 15px #2c2c2c;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 8px 8px 20px #0a0a0a, -8px -8px 20px #2c2c2c;
  }
`;

export const card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  gap: 20px;
`;

export const avatar = styled.img`
  height: 150px;
  width: 120px;
  border: none;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: inset 5px 5px 10px #0a0a0a, inset -5px -5px 10px #2c2c2c;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const name = styled.div`
  background: #2e2e2e;
  color: #c9c9c9;
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9em;
  box-shadow: 4px 4px 8px #141414, -4px -4px 8px #323232;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #3e3e3e;
    color: #fff;
    box-shadow: 2px 2px 5px #141414, -2px -2px 5px #323232;
  }
`;

export const statsMain = styled.div``;

export const stats = styled.div`
  display: flex;
  flex-direction: column;
  background: #2e2e2e;
  border-radius: 15px;
  padding: 10px;
  box-shadow: inset 5px 5px 10px #141414, inset -5px -5px 10px #323232;
  span {
    color: #a9a9a9;
    font-size: 0.8em;
    margin: 3px 0;
  }
`;
