import styled, { createGlobalStyle } from "styled-components";
import Background from "@/img/background.jpg";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color1:#e3f6f5;
  --main-color1:#70a19f;
  --main-color2:#a67c53;
  --main-color3: #abd1c6;
  --box-shadow: #303030;

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

    /* background: src={Background};
    background-color: var(--bg-color);  */

    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--bg-color);
    color: var(--text2-color);



    text-align: center;
    gap: 1.5rem;


    margin-top: 70px;
    margin-left: 0;
    /* font-family: system-ui; */
    margin-bottom: 80px;
    text-align: center;
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
