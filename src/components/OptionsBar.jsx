import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../utils/context"
import { incrementHex, decrementHex } from "../functions/color_change"
import {
     MdOutlineContentCopy,
     MdLockOutline,
     MdLockOpen,
     MdAddCircleOutline,
     MdOutlineRemoveCircleOutline,
} from "react-icons/md"
import Notif from "./Notif"

function OptionsBar({ stateColor, setStateColor }) {
     const { theme } = React.useContext(ThemeContext)
     const [copied, setCopeid] = React.useState(false)

     const lockColor = React.useCallback(() => {
          setStateColor((state) => ({ ...state, isLocked: !state.isLocked }))
     },[])

     const increment = () => {
          setStateColor((state) => ({
               ...state,
               color: "#" + incrementHex(stateColor.color),
          }))
     }

     const decrement = () => {
          setStateColor((state) => ({
               ...state,
               color: "#" + decrementHex(stateColor.color),
          }))
     }

     const copiedColor = () => {
          navigator.clipboard.writeText(stateColor.color)
          setCopeid(true)
          setTimeout(() => {
               setCopeid(false)
          }, 1100)
     }

     return (
          <ContainerOptions isDark={theme === "dark"}>
               <ContainerIcons>
                    <MdOutlineContentCopy
                         onClick={copiedColor}
                         size={35}
                         title={"Copy"}
                    />
               </ContainerIcons>
               <ContainerIcons>
                    {stateColor.isBlocked ? (
                         <MdLockOutline
                              onClick={lockColor}
                              size={35}
                              title={"Unlock"}
                         />
                    ) : (
                         <MdLockOpen
                              onClick={lockColor}
                              size={35}
                              title={"Lock"}
                         />
                    )}
               </ContainerIcons>
               <ContainerIcons>
                    <MdAddCircleOutline onClick={increment} size={35} />
               </ContainerIcons>
               <ContainerIcons>
                    <MdOutlineRemoveCircleOutline
                         onClick={decrement}
                         size={35}
                    />
               </ContainerIcons>
               {copied && <Notif />}
          </ContainerOptions>
     )
}

export default OptionsBar

// STYLE ////////////////////////////

const ContainerOptions = styled.div`
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
const ContainerIcons = styled.div`
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
