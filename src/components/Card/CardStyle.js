import styled from "styled-components";

export const container = styled.div`
  padding: 0;
`;

export const wrapper = styled.div`
  padding: 0;
`;

export const cardContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const card = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #f0f0;
  overflow: hidden;
  flex: 30%;
  scroll-snap-align: start;

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

  @media (max-width: 768px) {
    flex: 0 0 45%;
    img {
      height: 160px;
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 70%;
    img {
      height: 140px;
    }
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
    padding: 5px 10px;
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

  @media (max-width: 480px) {
    h3 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.75rem;
    }

    a {
      font-size: 0.75rem;
      padding: 4px 6px;
    }
  }
`;
