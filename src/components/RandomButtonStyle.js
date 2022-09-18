import styled from "styled-components"

export const ButtonStyled = styled.div`
     position: absolute;
     bottom: -20%;
     left: 50%;
     transform-origin: center;
     transform: translateX(-50%);
     display: flex;
     justify-content: center;
     align-items: center;
     height: 80px;
     width: 80px;
     border: 2px solid #f00fff;
     border-radius: 50%;
     color: #f00fff;
     backdrop-filter: blur(10px);
     cursor: pointer;
     transition: all 0.3s ease-in-out;
     z-index: 100;
     &:hover {
          transform: translateX(-50%) scale(1.1);
     }
     @media (max-width: 768px) {
          height: 70px;
          width: 70px;
          bottom: -9%;
     }
`
