import React from "react"
import ReactDOM from "react-dom"
import { ThemeContext } from "./utils/context"
import ProviderTheme from "./utils/ProviderTheme"
import { createGlobalStyle } from "styled-components"
import "./style/index.css"
import reportWebVitals from "./reportWebVitals"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

// GLOBAL STYLE /////////////////

const Style = createGlobalStyle`
    * {
     border-color : ${({ isDark }) => (isDark ? "#ffffff50" : "#22222250")};
    }
    body {
        background-color : ${({ isDark }) => (isDark ? "#222" : "#fff")};
        color : ${({ isDark }) => (isDark ? "#ffffff" : "#222222")};
        height: 100vh;
        overflow : hidden;
    }
`

///////////////////////////////////


const GlobalStyle = () => {
     const { theme } = React.useContext(ThemeContext)
     return <Style isDark={theme === "dark"}></Style>
}

ReactDOM.render(
     <React.StrictMode>
          <ProviderTheme>
               <GlobalStyle />
               <Header />
               <Home />
               <Footer />
          </ProviderTheme>
     </React.StrictMode>,
     document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
