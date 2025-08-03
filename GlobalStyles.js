import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
  }

  body,html {
    margin: 0;
    padding: 0;
    background-color: #e6ebf1;
    color: #1a1a1a;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    user-select: none;
  }

  h1, h2, h3 {
    color: #1a1a1a;
    margin-bottom: 0.5em;
  }

  p {
    color: #555;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    background-color: #4e89ff;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    font-size: 1rem;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #3a6fd8;
  }

  a {
    text-decoration: none;
    color: #4e89ff;
  }

  input, textarea {
    font-family: inherit;
    border: 1px solid #c5cee0;
    border-radius: 4px;
    padding: 10px;
    font-size: 1rem;
    width: 100%;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #4e89ff;
    box-shadow: 0 0 0 2px rgba(78, 137, 255, 0.2);
  }
`;

export default GlobalStyles;
