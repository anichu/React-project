import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-size:62.5%;
  font-family: 'Poppins', sans-serif;
  margin:1rem;
}
.app{
  margin:0;
}
h1{
  font-size:1.8rem;
}
h2{

}
p{
  font-size:1.8rem;
}
a{
  font-size:1.8rem;
  text-decoration:none;
  color:white;
  transition:0.3s;
}
a:hover{
  color:#fca311;
}

`;

export default GlobalStyle;
