import { useContext } from "react"
import { ThemeContext } from "../utils/context"
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md"
import LogoIco from "../assets/palette.png"
import { ContainerHeader, Link, Logo, LogoH1, LogoImg, LogoSpan, LogoSpanLetter, Mode, Li, ListLink } from "./HeaderStyle"

function Header() {
     const { theme, toggleTheme } = useContext(ThemeContext)
     const handleClick = () => {
          toggleTheme()
     }
     return (
          <ContainerHeader>
               <Logo>
                    <LogoImg src={LogoIco} width={60} alt="Logo" />
                    <LogoH1>
                         <LogoSpanLetter>R</LogoSpanLetter>andom
                         <LogoSpan>Color</LogoSpan>
                    </LogoH1>
               </Logo>
               <ListLink>
                    <Li>
                         <Link
                              href="https://github.com/faouzi96/random_color_app/"
                              title="Github repository"
                              isDark={theme === "dark"}
                         >
                              Github <span>Repository</span>
                         </Link>
                    </Li>
                    <Li onClick={handleClick}>
                         <Mode>
                              {theme === "light" ? (
                                   <MdOutlineDarkMode title="Dark" size={30} />
                              ) : (
                                   <MdLightMode title="Light" size={30} />
                              )}
                         </Mode>
                    </Li>
               </ListLink>
          </ContainerHeader>
     )
}

export default Header