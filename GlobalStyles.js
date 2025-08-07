import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color:#e1edff;
  // #000306
    font-family: monospace;
    line-height: 1.5;
    user-select: none;
    color: #000000ff;
  }

  h1, h2, h3 {
    color: #000000ff;
    margin-bottom: 0.5em;
  }

  p {
    color: #000000b6;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    background-color: rgb(241 241 241);
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
