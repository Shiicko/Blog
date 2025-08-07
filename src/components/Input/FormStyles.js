import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  background: rgb(241 241 241);
  padding: 15px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

export const TextInput = styled.input`
  width: 100%;
  background: #1e1e1e;
  border: none;
  border-radius: 8px;
  padding: 12px 15px;
  color: white;
  font-size: 1rem;
  margin-bottom: 12px;

  &:focus {
    outline: 2px solid #4e89ff;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const PublishButton = styled.button`
  margin-left: auto;
  padding: 8px 18px;
  background: #4e89ff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  color: white;
  cursor: pointer;

  &:hover {
    background: #3a6fd8;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  background: #1e1e1e;
  border: none;
  border-radius: 8px;
  padding: 12px 15px;
  color: white;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  margin-bottom: 12px;

  &:focus {
    outline: 2px solid #4e89ff;
  }
`;
