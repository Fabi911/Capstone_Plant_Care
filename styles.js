import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color1: white;
  --main-color1:#70a19f;
  --main-color2:#a67c53;
  --main-color3: rgba(230, 241, 236,0.92);
  // box shadows
  --box-shadow: #303030;
  --box-shadow-default:  2px 2px 4px #808080;
  --card-shadow-default:  2px 28px 50px lightgrey;
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
    /* background-color: white; */
    background-image: url("/img/bg/closeup1.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position-x: left;
  background-position-y: bottom;
  background-attachment:fixed;
    
   


    color: var(--text2-color);
    


    text-align: center;
    gap: 1.5rem;


    margin-top: 120px;
    margin-bottom: 25px;
    text-align: center;
  }
  h1{
font-size: 20px;
}
h3 {
  margin: 0;
}
`;
