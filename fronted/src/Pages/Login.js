import LoginItems from "../Components/Logintems";
import styled from "styled-components";
import Nav from "../Components/Nav";

const Container=styled.div``

const Login = () => {
    return (
        <Container>
            <Nav/>
          <LoginItems/>  
       </Container> 
    )
}
export default Login;