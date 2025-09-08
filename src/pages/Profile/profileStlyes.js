import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
  height: 60vh;
`;

export const header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const name = styled.h2`
  color: #000000ff;
  margin-bottom: 5px;
`;

export const subtitle = styled.span`
  color: #a9a9a9;
  font-size: 0.9em;
  margin-bottom: 15px;
`;

export const stats = styled.div`
  display: flex;
  gap: 20px;
  span {
    color: #c9c9c9;
    font-weight: 600;
  }
`;

export const gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  width: 100%;
`;

export const postCard = styled.div`
  background: #1e1e1e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 5px 5px 15px #0a0a0a, -5px -5px 15px #2c2c2c;
`;

export const postImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const postContent = styled.div`
  padding: 10px;
  color: #fff;
`;

export const postDate = styled.span`
  display: block;
  font-size: 0.75em;
  color: #a9a9a9;
  margin-top: 5px;
`;
