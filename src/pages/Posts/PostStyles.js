import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const cardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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

  @media (max-width: 768px) {
    width: 90%;
    padding: 18px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 14px;
    border-radius: 8px;
  }
`;

export const header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 14px;
  }
`;

export const avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 14px;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

export const username = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const date = styled.p`
  font-size: 13px;
  color: #c4c4c4ff;
  margin: 2px 0 0 0;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 14px;
  }
`;

export const content = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #000;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #4b5563;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
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

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 14px;
  }
`;
