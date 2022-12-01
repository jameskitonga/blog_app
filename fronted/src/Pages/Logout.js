import Footer from "../Components/FooterItems";
import LogoutItems from "../Components/LogoutItems";
import Nav from "../Components/Nav";
import styled from "styled-components";



const Div = styled.div``



const LogOut = () => {
    return (
        <Div>
            <Nav />
            <LogoutItems/>
            <Footer/>
        </Div>
    )
}
export default LogOut;