import React from "react"
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
import { ContainerIcons, ContainerOptions } from "./OptionsBarStyle"

function OptionsBar({ stateColor, setStateColor }) {
     const { theme } = React.useContext(ThemeContext)
     const [copied, setCopeid] = React.useState(false)

     const lockColor = () => {
          setStateColor((state) => ({ ...state, isLocked: !state.isLocked }))
     }

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
                    {stateColor.isLocked ? (
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