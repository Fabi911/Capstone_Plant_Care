import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color1:#e3f6f5;
  --main-color1:#70a19f;
  --main-color2:#a67c53;
  --main-color3: #abd1c6;
  // box shadows
  --box-shadow: #303030;
  --box-shadow-default: 2px 2px 2px #303030;
  // responsive design variables
--card-mobile:  80vw;
--card-tablet:  65vw;
--card-browser: 50vw; 
--distance-edge-mobile: 15px;
--distance-edge-tablet: 25px;
--distance-edge-desktop: 50Px; 
--icon-height-mobile:50px;
--icon-height-tablet:75px;
--icon-height-desktop:75px;
--icon-width-mobile:50px;
--icon-width-tablet:75px;
--icon-width-desktop:75px;
font-size: 20px;
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
h3 {
  margin: 0;
}





  // @media (min-width: 600px) {body {
      
      
  //     };
  // }

  // @media (max-width: 900px) {body {
      
  //     };
  // }

  // @media (max-width: 1200px) {
  //   body {
      
  //     };
  // }

  // @media (min-width: 1201px) {body {
      
  //     };
  // }`;

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
