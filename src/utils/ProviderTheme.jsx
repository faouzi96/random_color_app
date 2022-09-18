import { useEffect } from "react"
import { useState } from "react"
import { ThemeContext } from "./context"

function ProviderTheme({ children }) {
    const [theme, setTheme] = useState(window.sessionStorage.getItem("theme") || "light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    useEffect(()=>{
        window.sessionStorage.setItem("theme",theme)
    },[theme])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ProviderTheme
