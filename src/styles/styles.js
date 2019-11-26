import { createGlobalStyle, css } from 'styled-components';


const Body = css`
  body {
    font-family: 'Abel', sans-serif;
    font-size: 16px;
    font-weight: 400;

    .typography-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border: 1px solid black;
      margin: 0 64px;
      padding: 34px 0;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .column {
      display: flex;
      flex-direction: column;
      p {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }

    sub {
      margin-right: 8px;
    }
  }
`;


const Headers = css`
    h1, h2, h3, h4, h5, h6 {
      display: flex;
      justify-content: center;
    }
`;

const Footer = css``;

/*
    font-family: 'Abel', sans-serif;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-family: 'Teko', sans-serif;
    font-family: 'BenchNine', sans-serif;
    font-family: 'Lato', sans-serif;
    font-family: 'Josefin Slab', serif;
*/

export const Globalstyles =  createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400|Literata:600&display=swap&subset=latin-ext');
    @import url('https://fonts.googleapis.com/css?family=Abel|BenchNine|Josefin+Slab:400i|Lato:400i|Teko:300|Yanone+Kaffeesatz&display=swap');

    ${Body}

    ${Headers}

    ${Footer}
`;

export default Globalstyles;