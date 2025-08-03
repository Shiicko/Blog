import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  h2 {
    margin-bottom: 30px;
    font-size: 28px;
    color: #333;
  }
`;

export const cardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const card = styled.div`
  width: 650px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const username = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
`;

export const date = styled.p`
  font-size: 13px;
  color: #777;
  margin: 2px 0 0 0;
`;

export const image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const content = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #222;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #444;
  }
`;

export const footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const tipButton = styled.button`
  background-color: #0073e6;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background-color: #005bb5;
  }
`;
