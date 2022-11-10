import HomeItems from "../Components/HomeItems";
import styled from "styled-components";
import Nav from "../Components/Nav";
import Footer from "../Components/FooterItems";

const Container = styled.div``

const Home = () => {
    return (
        <Container>
            <Nav/>
            <HomeItems />
            <Footer/>
       </Container> 
    )
}
export default Home;