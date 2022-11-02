import HomeItems from "../Components/HomeItems";
import styled from "styled-components";
import Nav from "../Components/Nav";

const Container = styled.div``

const Home = () => {
    return (
        <Container>
            <Nav/>
            <HomeItems/>
       </Container> 
    )
}
export default Home;