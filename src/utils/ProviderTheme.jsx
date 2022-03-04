import { useState } from "react"
import { ThemeContext } from "./context"

function ProviderTheme({ children }) {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ProviderTheme
