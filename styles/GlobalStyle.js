import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Ubuntu:wght@300;400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
body{
  font-size: 62.5%;
  background: white;
  margin: 1rem;
  font-family: 'Ubuntu', sans-serif;
}

p{
  font-size:1.6rem;
}
h1{
  font-size: 3rem;
}
h2{
  font-size: 2.5rem;
}
h3{
  font-size: 2rem;
}
a{
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
}
ul{
  list-style: none;
}

`;
