import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(160deg, rgb(19, 4, 17) 0%, rgb(16, 2, 19) 100%);
  color: white;
  padding: 30px 20px;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const logoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 180px;
    height: auto;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    img {
      width: 140px;
    }
  }
`;

export const heroContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  align-items: stretch;
  margin-bottom: 40px;
  width: 100%;
`;

export const card = styled.div`
  background: rgba(45, 45, 45, 0.4);
  padding: 30px;
  width: 420px;
  border-radius: 18px;
  border: 1px solid rgba(68, 68, 68, 0.6);
  box-shadow: rgba(0, 170, 255, 0.15) 0px 6px 20px;
  text-align: center;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: rgba(0, 170, 255, 0.25) 0px 10px 25px;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 20px;
  }
`;

export const cardHeader = styled.div`
  margin-bottom: 15px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const cardBody = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`;

export const cardNumber = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
  letter-spacing: 2px;
`;

export const cardInfo = styled.div`
  font-size: 0.95rem;
  color: #bbb;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const cardButton = styled.button`
  background: linear-gradient(135deg, #00bcd4, #0097a7);
  border: none;
  border-radius: 10px;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 15px rgba(0, 188, 212, 0.5);
  }
`;

export const recentTransactions = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 40px;
  background: rgba(5, 0, 255, 0.08);
  border: 1px solid rgba(5, 0, 255, 0.4);
  backdrop-filter: blur(6px);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 6px 16px;

  h2 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.6rem;
    letter-spacing: 1px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
    border-radius: 12px;
    overflow: hidden;

    th {
      padding: 12px;
      background: rgba(255, 255, 255, 0.08);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      font-weight: 600;
    }

    td {
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    tr:hover td {
      background: rgba(255, 255, 255, 0.05);
    }

    td.Ingreso {
      color: #72ff72;
      font-weight: 600;
    }

    td.Egreso {
      color: #ff7272;
      font-weight: 600;
    }
  }
`;

export const tipContainer = styled.div`
  margin: 20px;
  text-align: center;
  width: 100%;
`;

export const tipButton = styled.button`
  margin: 15px;
  background: rgba(5, 0, 255, 0.12);
  color: white;
  border: 1px solid rgba(5, 0, 255, 0.5);
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(5, 0, 255, 0.25);
    transform: scale(1.03);
  }
`;

export const tipButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const tipButtonYes = styled.button`
  background: linear-gradient(
    135deg,
    rgba(5, 0, 255, 0.7),
    rgba(4, 0, 255, 0.9)
  );
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(5, 0, 255, 0.5);
  }
`;

export const tipButtonNo = styled.button`
  background: linear-gradient(135deg, #8d0101c0, #75000ca9);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(141, 1, 1, 0.6);
  }
`;

export const approvalMessage = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #72ff72;
  text-align: center;
`;
