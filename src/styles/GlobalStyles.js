import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #111;
  color: #fff;
  font-family: 'Roboto', sans-serif;
} 

section.lists {
  margin-top: -150px;
}

footer {
  margin: 50px 0;
  text-align: center;
}

.loading {
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display:flex;
  justify-content: center;
  align-items: center;
}
`;