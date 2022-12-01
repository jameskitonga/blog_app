import LoginItems from "../Components/LoginItems"
import Nav from "../Components/Nav"
import Footer from "../Components/FooterItems"
import styled from "styled-components"


const Container=styled.div``



 const LogIn = () => {
    return (
        <Container>
            <Nav/>
            <LoginItems />   
            <Footer/>
        </Container>
    )
 }
export default LogIn;