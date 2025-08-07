import styled from "styled-components";

export const container = styled.div`
  position: fixed;
  top: 0;
  left: 40px;
  width: 130px;
  height: 60vh;
  border-radius: 20px;
  background-color: #9df9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h3`
  color: black;
  font-size: 1.7rem;
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
    color: black;
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #000;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: black;
  margin-bottom: 1rem;
`;

export const Stats = styled.div`
  font-size: 0.85rem;
  line-height: 1.2;
  color: black;
`;

export const Button = styled.button`
  background-color: rgb(241 241 241);
  border: none;
  color: #111827;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.9 rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
