import { createGlobalStyle } from "styled-components";
import { pallete } from "./theme";

export const GlobalStyle = createGlobalStyle`
body, button, input {
    
    //   font-family: 'Vazirmatn';
    //   font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    background-color: #121212;
    margin: 0;
    color: #fff;
}
ul , ol {
    padding: 0;
    margin: 0;
    list-style: none;
}
*, *:after, *:before {
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
.full-container {
   width: 100%;
   padding: 0 16px;
}
.container {
   width: 100%;
   padding: 0 72px;
}
.h-full {
    height: 100%;
}
.relative {
    position: relative;
}
.flex {
    display: flex;
}
.space-between {
    justify-content: space-between
}
.justify-center {
    justify-content: center
}
.flex-wrap {
    flex-wrap: wrap;
}
.align-center {
    align-items: center;
}
.gap-5 {
    gap: 5px
}
.gap-10 {
    gap: 10px
}
.gap-15 {
    gap: 15px
}
.gap-20 {
    gap: 20px;
}
.gap-40 {
    gap: 40px;
}
.content
{
    padding:106px 0 50px 0;
}
.text-right
{
    text-align:right;
}
.text-center
{
    text-aling:center;
}
.relative {
    position: relative;
}
.absolute {
    position: absolute;
}
.RadiusXS {
    border-radius:${pallete.defaultRadiusXS}
}
`;
