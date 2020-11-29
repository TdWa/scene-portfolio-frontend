import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamilies.arial};
    box-sizing: border-box;
  }

 html {
   font-size: 16px;
   width: 100%;
   height: 100%;
 }

 body {
   width: 100%;
   background-color: ${({ theme }) => theme.colors.main};
   height: 100%;
   margin: 0 auto;
  }
  `;

export default GlobalStyle;
