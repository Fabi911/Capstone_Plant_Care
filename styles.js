import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #004643;
    text-align: center;
    color: white;
    margin: 0;
    font-family: system-ui;
  }
`;
