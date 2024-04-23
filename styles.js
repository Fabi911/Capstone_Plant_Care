import styled, { createGlobalStyle } from "styled-components";

// Define global styles
export default createGlobalStyle`
:root {
  // Main color scheme
  --bg-color1:#fff;
  /* --main-color1:#70a19f; */
  --main-color1:#70a19f;
  --main-color2:#a67c53;
  /* --main-color3: #abd1c6; */
  --main-color3: #e6f1ec;
  // box shadows
  --box-shadow: #303030;
  --box-shadow-default: 4px 4px 5px #B7B7B7;
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
    

    background-image: url('https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f8f8f8;


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
`;
