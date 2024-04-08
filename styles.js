import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color: #004643;
  --second-bg-color: #abd1c6;
  --text-color: #e8e4e6;
  --main-color: #2de2e6;
  --headline-color: "#fffffe";
  --paragraph-color: #abd1c6;
  --highlight-color: #f9bc60;
  --tertiary-color: #e16162;
  --stroke-color: #001e1d;
  --button-color: #f9bc60;
  --div-color: #abd1c6;
  // Alternative color scheme
  --bg2-color: #e3f6f5;
  --second-bg2-color: #abd1c6,
  --text2-color: #e8e4e6;
  --main2-color: #2de2e6;
  --headline2-color: #272343;
  --subHeadline-color: #2d334a;
  --card-color: #fffffe;
  --paragraph2-color: #abd1c6;
  --highlight2-color: #ffd803;
  --tertiary2-color: #bae8e8;
  --stroke2-color: #272343;
  --button2-color: #f9bc60;
  // Synthwave Colors
  --bg3-color: #241B2F;
  --text3-color: #72f1b8;
  --main3-color: #fff5f6;
  --highlight2-color: #f92aad;
  --tertiary3-color: #f97e72;

}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;


    background-color: var(--bg3-color); 
    color: var(--text3-color);

    align-items: flex-start;

    text-align: center;
    gap: 1.5rem;


    margin: 0;
    font-family: system-ui;
    margin-bottom: 80px;
    text-align: center;
  }
`;

// Styled component for Container
export const Container = styled.div`
  background: var(--second-bg-color);
  color: var(--text-color);
  width: 80vw;
  height: auto;
  border: 1px solid black;
  border-radius: 20px;
  &:hover {
    box-shadow: 5px 5px 5px #f9bc60;
  }
`;
