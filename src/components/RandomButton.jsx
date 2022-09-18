import React from "react"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"
import { ButtonStyled } from "./RandomButtonStyle"

function RandomButton({ setLuncher }) {
     const handleClick = () => {
          setLuncher((c) => !c)
     }
     return (
          <ButtonStyled onClick={handleClick} >
               <GiPerspectiveDiceSixFacesRandom size={70} />
          </ButtonStyled>
     )
}

export default RandomButton