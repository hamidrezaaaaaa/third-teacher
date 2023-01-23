import { createGlobalStyle } from "styled-components";
import YekanBakhM from "../assets/fonts/Yekan-Bakh-EN-05-Medium.woff";
import YekanBakhL from "../assets/fonts/Yekan-Bakh-EN-03-Light.woff";
import YekanBakhH from "../assets/fonts/Yekan-Bakh-EN-01-Hairline.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: YekanBakh;
    src: url(${YekanBakhM});
    font-weight: 500;
  }

  @font-face {
    font-family: YekanBakh;
    src: url(${YekanBakhL});
    font-weight: 300;
  }

  @font-face {
    font-family: YekanBakh;
    src: url(${YekanBakhH});
    font-weight: 100;
  }


  body {
    margin: 0;
    padding: 0;
    // height:90vh;
    overflow-x:hidden;
    font-family: YekanBakh, Helvetica, Sans-Serif;

  }

  input {
    font-family: YekanBakh, Helvetica, Sans-Serif;
  }

  button {
    font-family: YekanBakh, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
