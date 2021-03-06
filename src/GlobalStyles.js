import { createGlobalStyle } from "styled-components";
import background_image from "./images/background_image.jpg";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
    background-image: url(${background_image});
    background-size: cover;
    background-color: rgba(23, 128, 40, 0.4);
    background-blend-mode: multiply;
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
.inner {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 72px);
  /* justify-content: center; */
  /* align-items: center; */
  max-width: 1296px;
  margin: 0 auto;
}

@media screen and (max-width: 1439px) {
  .inner{
    max-width: 952px;
  }
}

@media screen and (max-width: 1023px) {
  .inner{
    max-width: 630px;
  }
}
@media screen and (max-width: 767px) {
  .inner{
    max-width: 364px;
  }
}
`;

export default GlobalStyle;
