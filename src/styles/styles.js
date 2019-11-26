import { createGlobalStyle, css } from 'styled-components';


const Body = css`
  body {
    font-size: 16px;
    font-weight: 400;
  }
`;


const Headers = css`
  header {
    margin: 0;
    padding: 0;
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