import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #004643;
    text-align: center;
    gap: 1.5rem;
    color: white;
    margin: 0;
    font-family: system-ui;
    margin-bottom: 80px;
  }
`;
