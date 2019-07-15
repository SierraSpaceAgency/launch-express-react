import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* RESET */
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* CUSTOM */

  body {
    font-family: sans-serif;
    background-color: #010101;
    color: white;
  }
`;
