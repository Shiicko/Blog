import styled from "styled-components";

export const container = styled.div`
  position: fixed;
  top: 0;
  left: 40px;
  width: 130px;
  height: 60vh;
  border-radius: 20px;
  background-color: rgb(0 0 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h3`
  color: aliceblue;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
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
  span {
    text-decoration: none;
    color: aliceblue;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
  }

  span:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Username = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
`;

export const Stats = styled.div`
  font-size: 0.75rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: rgba(167, 139, 250, 1);
  border: none;
  color: #111827;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
