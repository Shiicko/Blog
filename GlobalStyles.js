import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: #000306;
    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    user-select: none;
    color: #e6edf3;
  }

  h1, h2, h3 {
    color: #f8fafc;
    margin-bottom: 0.5em;
  }

  p {
    color: #c9d1d9;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    background-color: #3b82f6;
    color: #f8fafc;
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    font-size: 1rem;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #60a5fa;
  }

  a {
    text-decoration: none;
    color: #60a5fa;
  }

  input, textarea {
    font-family: inherit;
    background-color: #161b22;
    color: #e6edf3;
    border: 1px solid #2f3e4e;
    border-radius: 4px;
    padding: 10px;
    font-size: 1rem;
    width: 100%;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

export default GlobalStyles;
