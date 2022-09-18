import React, { useEffect } from "react"
import OptionsBar from "./OptionsBar"
import { ThemeContext } from "../utils/context"
import random_choice from "../functions/random_choice"
import { ContainerBar, TextColor } from "./ColorBarStyle"

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
