import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  h2 {
    margin-bottom: 30px;
    font-size: 28px;
    color: #f8fafc;
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
  background-color: #ffffff;
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
  color: #c4c4c4ff;
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
    color: ffffff;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #a1a1aa;
  }
`;

export const footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const tipButton = styled.button`
  background: linear-gradient(187deg, rgb(0 17 135) 0%, rgb(30 0 37) 86%);
  border: 1px solid rgba(0, 255, 255, 0.5);
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
`;
