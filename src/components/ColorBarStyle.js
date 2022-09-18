import styled from "styled-components"

export const ContainerBar = styled.div`
display: block;
position: relative;
height: 100%;
width: 25%;
margin: 0 5px;
background-color: ${({ color }) => color.toUpperCase()};
border-radius: 20px;
border-width: 1px;
border-style: solid;
overflow: hidden;
&:hover > div {
     right: 5%;
     transition: right 0.3s linear;
}
@media (max-width: 768px) {
     width: 100%;
     margin: 5px 0;

     &:hover > div {
          top: 0;
          right: 0;
          transition: top 0.3s linear;
     }
}
`

export const TextColor = styled.span`
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
line-height: 60px;
width: 90%;
background-color: ${({ isDark }) => (isDark ? "#222222" : "#ffffff")};
border-width: 1px;
border-style: solid;
border-radius: 5px;
font-size: 2.5em;
text-align: center;
user-select: none;
overflow: hidden;
@media (max-width: 768px) {
     top: 50%;
     width: 50%;
}
`
