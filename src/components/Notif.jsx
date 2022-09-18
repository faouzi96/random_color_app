import React from "react"
import ReactDOM from "react-dom"
import { ThemeContext } from "../utils/context"
import { ContainerNotif } from "./NotifStyle"

function Notif() {
     const { theme } = React.useContext(ThemeContext)
     return ReactDOM.createPortal(
          <ContainerNotif isDark={theme === "dark"}>Copied</ContainerNotif>,
          document.body
     )
}

export default Notif