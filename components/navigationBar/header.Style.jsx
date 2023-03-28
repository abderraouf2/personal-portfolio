import styled from "styled-components";
import Link from "next/link";
import { css } from "styled-components";


export const HeaderContainer= styled.div`
width: 100%;
font-size: 1.5rem;
display: flex;
justify-content: space-between;
margin-bottom: 3%;
padding-right:40px;
top:0;
position:fixed;
z-index:3;
`
const sharedProps = css`
color: white;
text-decoration:none;
font-family: 'Libre Baskerville', serif;
font-weight:700;
&:hover{
  color:rgb(219, 204, 204);
}
@media screen and (max-width: 992px) {
  font-size:1rem; 
  font-weight:400;
}
`

export const LogoContainer = styled(Link)`
height: 100%;
width: fit-content;
position: absolute;
top:35%;
left:112.5px;
${sharedProps};
cursor:pointer;
@media screen and (max-width: 992px) {
  left:30px
}
`

export const OptionsContainer = styled.div`
// width: 30%;
// height: 100%;
// padding:10px;
// align-items: center;
// justify-content: center;
// @media screen and (max-width: 992px) {
  opacity:1;
  height:100vh;
  width:100%;
  display: flex;
  padding-top:12vh;
  flex-direction:column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color:#464c47;
  width:100%;
  animation: BigText_chars-in__e_wCk 1.25s varcubic-bezier(0.62,0.05,0.01,0.99);
// }
html { forwards;
}
`

export const OptionLink= styled(Link)`
padding: 15px 0px;
cursor: pointer;
${sharedProps};
width:85%;
margin-left:1%;
border-bottom:2px solid white;
@media screen and (max-width: 992px) {
  color:white;
  font-size:1.5rem;
  lign-height:1.25;
  text-transform: uppercase;
  font-weight:400;
  padding:0;
  margin: 5% 2%;
}
`