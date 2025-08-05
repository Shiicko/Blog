import styled from "styled-components";

export const container = styled.div`
  padding: 0;
`;

export const wrapper = styled.div`
  padding: 0;
`;
export const cardContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 5px;
  overflow-x: auto;
`;

export const card = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #f0f0;
  overflow: hidden;
  width: 100%;
  max-width: 200px;
  img {
    object-fit: cover;
    height: 200px;
    width: 100%;
    display: block;
    border-radius: 10px;
    transition: transform 0.5s;
  }
  img:hover {
    transform: scale(1.1);
  }
`;
export const overlay = styled.div`
  height: 0;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  left: 0;
  bottom: 0;
  border-radius: 10px;
  background: linear-gradient(transparent, #1c1c1c 60%);
  opacity: 0;
  transition: all 0.5s ease;

  h3,
  p,
  a {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
    color: white;
  }
  a {
    border-radius: 10px;
    padding: 5px;
    background-color: red;
  }

  ${card}:hover & {
    height: 100%;
    opacity: 1;

    h3,
    p,
    a {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
