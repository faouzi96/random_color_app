import React, { useEffect } from "react"
import styled from "styled-components"
import ColorBar from "../components/ColorBar"
import RandomButton from "../components/RandomButton"
import useSpacePad from "../hooks/useSpacePad"

function Home() {
     const [luncher, setLuncher] = React.useState(false)
     const spacePad = useSpacePad()
     useEffect(() => {
          setLuncher(!luncher)
     }, [spacePad])

     return (
          <Container>
               <ColorBar luncher={luncher} />
               <ColorBar luncher={luncher} />
               <ColorBar luncher={luncher} />
               <ColorBar luncher={luncher} />
               <RandomButton setLuncher={setLuncher} />
          </Container>
     )
}

export default Home

// STYLE ////////////////////

const Container = styled.div`
     position: relative;
     width: 99%;
     height: calc(100vh - 200px);
     display: flex;
     margin: auto;
     margin-top: 20px;
     padding: 10px;
     @media (max-width: 768px) {
          flex-direction: column;
     }
`
