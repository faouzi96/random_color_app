import { createGlobalStyle } from "styled-components"

export const Style = createGlobalStyle`
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