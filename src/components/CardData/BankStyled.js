import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(187deg, rgb(19, 4, 17) 0%, rgb(16, 2, 19) 86%);
  color: white;
  padding: 20px;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const header = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  margin-bottom: 3rem;
`;

export const logoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 180px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
    }
  }
`;

export const heroContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

export const card = styled.div`
  background-color: #2d2d2d36;
  padding: 30px;
  width: 450px;
  color: white;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgb(68, 68, 68);
  transition: transform 0.3s, box-shadow 0.3s, border 0.3s;
  box-shadow: rgba(0, 170, 255, 0.1) 0px 4px 15px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

export const cardHeader = styled.div`
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const cardBody = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

export const cardNumber = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

export const cardInfo = styled.div`
  font-size: 0.9rem;
  color: #bbb;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const cardButton = styled.button`
  background-color: #00bcd4;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0097a7;
  }
`;

export const recentTransactions = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background: rgba(5, 0, 255, 0.1);
  border: 1px solid rgba(5, 0, 255, 0.5);
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 10px;
  gap: 10px;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

  h2 {
    color: white;
    text-align: center;
    margin: 15px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 10px;
      text-align: center;
      border: 1px solid #555;
    }

    td.Ingreso {
      color: #72ff72;
    }

    td.Egreso {
      color: #ff7272;
    }
  }
`;

export const tipContainer = styled.div`
  margin: 15px;
  text-align: center;
  width: 100%;
`;

export const tipButton = styled.button`
  margin: 15px;
  background-color: rgba(5, 0, 255, 0.1);
  color: white;
  border: 1px solid rgba(5, 0, 255, 0.5);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

export const tipButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const tipButtonYes = styled.button`
  background-color: rgba(5, 0, 255, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(4, 0, 255, 0.9);
  }
`;

export const tipButtonNo = styled.button`
  background-color: #8d0101c0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #75000ca9;
  }
`;

export const approvalMessage = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #72ff72;
`;
