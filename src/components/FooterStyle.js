import styled from "styled-components"


export const ContainerFooter = styled.div`
     position: absolute;
     bottom: 0px;
     display: flex;
     justify-content: start;
     align-items: center;
     width: 100%;
     height: 30px;
     border-top-width: 1px;
     border-top-style: solid;
     font-weight: 400;
     letter-spacing: 2px;
     user-select: none;

     @media (max-width: 768px) {
          font-size: 0.8em;
          padding-top: 10px;
     }
`
