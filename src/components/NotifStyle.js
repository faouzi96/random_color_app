import styled, { keyframes } from "styled-components"

const fadeInOut = keyframes`
0% {
     opacity: 0;
}
50% {
     opacity: 1;
}
100%{
    opacity: 0;
}
`

export const ContainerNotif = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 250px;
height: 150px;
transform: translate(-50%, -50%) scale(0.8);
background-color: ${({ isDark }) => (isDark ? "#fffffff0" : "#222222f0")};
display: flex;
justify-content: center;
align-items: center;
font-size: 3.2em;
color: ${({ isDark }) => (isDark ? "#222222f0" : "#fffffff0")};
border-radius: 20px;
opacity: 0;
pointer-events: none;
animation: ${fadeInOut} 1s ease-in-out both;
@media (max-width: 768px) {
     transform: translate(-50%, -50%) scale(0.5);
}
`