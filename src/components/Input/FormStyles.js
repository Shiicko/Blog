import styled from "styled-components";
import { FaImage } from "react-icons/fa";

export const Container = styled.div`
  width: 500px;
  background: #1e1e1e;
  padding: 15px;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
    border-radius: 10px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  background: #2c2c2c;
  border: none;
  border-radius: 8px;
  padding: 12px 15px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: 2px solid #4e89ff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: #2c2c2c;
  border: none;
  border-radius: 8px;
  padding: 12px 15px;
  color: white;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

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
  transition: background 0.2s ease;

  &:hover {
    background: #3a6fd8;
  }
`;

export const UploadIcon = styled(FaImage)`
  color: #4e89ff;
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #3a6fd8;
  }
`;
