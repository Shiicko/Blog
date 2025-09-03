import styled from "styled-components";

export const wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  padding: 0 20px;

  @media (max-width: 1024px) {
    gap: 10px;
    height: auto;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 5px;
    margin: 10px;
  }
`;

export const container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 680px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 10px;
    width: 100%;
  }
`;

export const content = styled.div`
  padding-top: 70px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  max-width: 680px;

  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    gap: 20px;

    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding-top: 30px;
    gap: 15px;

    h1 {
      font-size: 1rem;
    }
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;
