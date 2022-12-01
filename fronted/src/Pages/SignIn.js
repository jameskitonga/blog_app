import SigninItems from "../Components/Sigintems";
import styled from "styled-components";
import Nav from "../Components/Nav";
import Footer from "../Components/FooterItems";

const Container=styled.div``

const SignIn = () => {
    return (
        <Container>
            <Nav/>
            <SigninItems />  
            <Footer/>
       </Container> 
    )
}
export default SignIn;