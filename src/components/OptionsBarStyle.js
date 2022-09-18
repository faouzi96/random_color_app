import styled from "styled-components"


export const ContainerOptions = styled.div`
     position: absolute;
     top: 0%;
     right: -35%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 30%;
     height: 100%;
     background-color: ${({ isDark }) => (isDark ? "#22222290" : "#ffffff90")};
     backdrop-filter: blur(5px);
     @media (max-width: 768px) {
          height: 50%;
          width: 100%;
          top: -50%;
          right: 0;
          flex-direction: row;
          transition-property: top;
     }
`
export const ContainerIcons = styled.div`
     margin: 20% 0;
     opacity: 0.6;
     cursor: pointer;
     transition: all 0.3s ease-in-out;
     &:hover {
          opacity: 1;
          transform: scale(1.2);
     }
     @media (max-width: 768px) {
          margin: 0 20px;
     }
`