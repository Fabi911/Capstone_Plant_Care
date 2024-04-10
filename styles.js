import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color1:#e3f6f5;
  --main-color1:#70a19f;
  --main-color2:#a67c53;
  --main-color3: #abd1c6;
  --box-shadow: #303030;
  --box-shadow-default: 2px 2px 2px #303030;

}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-color1);
    color: var(--text2-color);



    text-align: center;
    gap: 1.5rem;


    margin-top: 80px;
  font-family: system-ui;
    margin-bottom: 25px;
    text-align: center;
  }
  h1{
font-size: 20px;
}
`;

// Styled component for Container
export const Container = styled.div`
  background: var(--bg2-color);
  color: var(--text-color);
  width: 80vw;
  height: auto;
  border: 1px solid black;
  border-radius: 20px;
  &:hover {
    box-shadow: 5px 5px 5px #f9bc60;
  }
`;
