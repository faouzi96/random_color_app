import React, { useEffect } from "react"
import styled from "styled-components"
import OptionsBar from "./OptionsBar"
import { ThemeContext } from "../utils/context"
import random_choice from "../functions/random_choice"

function ColorBar({ luncher }) {
     const { theme } = React.useContext(ThemeContext)
     const [state, setState] = React.useState({
          color: "#" + random_choice(),
          isLocked: false,
     })
     React.useEffect(() => {
          !state.isLocked &&
               setState({ ...state, color: "#" + random_choice() })
     }, [luncher])
     return (
          <ContainerBar color={state.color}>
               <TextColor isDark={theme === "dark"}>
                    {state.color.toUpperCase()}
               </TextColor>
               <OptionsBar
                    stateColor={state}
                    setStateColor={setState}
               ></OptionsBar>
          </ContainerBar>
     )
}

export default ColorBar

// STYLE //////////////////////////////////

const ContainerBar = styled.div`
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

const TextColor = styled.span`
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
