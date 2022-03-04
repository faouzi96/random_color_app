import { useContext } from "react"
import { ThemeContext } from "../utils/context"
import styled from "styled-components"
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md"
import LogoIco from "../assets/palette.png"

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
                              href="#"
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

/** STYLE TAGS */

const Logo = styled.div`
     display: flex;
     align-items: center;
     user-select: none;
     &:hover img {
          transform: rotateZ(90deg) scale(0.9);
     }
     &:hover h1 span {
          margin: 0 5px;
     }
`

const LogoImg = styled.img`
     transition: transform 0.5s ease-in-out;
`

const LogoH1 = styled.h1`
     margin-left: 5px;
     font-size: 1.5em;
     cursor: pointer;
     @media (max-width: 768px) {
          display: none;
     }
`

const LogoSpanLetter = styled.span`
     color: #f00;
     font-size: 1.3em;
     transition: all 0.5s ease-in-out;
`

const LogoSpan = styled.span`
     color: #f00;
     transition: all 0.5s ease-in-out;
`

const ContainerHeader = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     height: 100px;
     padding: 0 20px 0 40px;
     border-bottom-width: 1px;
     border-bottom-style: solid;
`
const ListLink = styled.ul`
     display: flex;
     justify-content: space-around;
     align-items: center;
     list-style: none;
`

const Li = styled.li`
     margin: 0px 20px;
`

const Mode = styled.span`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 40px;
     width: 40px;
     border-bottom-width: 1px;
     border-bottom-style: solid;
     border-radius: 50%;
     cursor: pointer;
     transition: all 0.3s ease-in-out;
     &:hover {
          transform: scale(1.2);
          border-width: 1px;
          border-style: solid;
     }
`
const Link = styled.a`
     display: inline-block;
     position: relative;
     color: ${({ isDark }) => (isDark ? "#fff" : "#222")};
     text-decoration: none;
     letter-spacing: 1px;
     font-weight: 400;
     font-size: 1.2rem;
     user-select: none;
     transition: transform 0.1s linear;
     &::before {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          display: block;
          width: 100%;
          height: 1px;
          background-color: ${({ isDark }) => (isDark ? "#fff" : "#222")};
          transform: scaleX(0);
          transition: transform 0.3s linear;
     }
     &:hover::before {
          width: 100%;
          transform: scaleX(1);
     }
     &:hover {
          transform: scale(1.01);
     }
     @media (max-width: 768px) {
          font-size: 1rem;
          & > span {
               display: none;
          }
     }
`
///////////////////////////////////