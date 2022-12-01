
import Nav from "../Components/Nav"
import SingleBlog from "../Components/SingleBlog"
import styled from "styled-components"
import Footer from "../Components/FooterItems"

const Container=styled.div``

 const Single = () => {
    return (
        <Container>
            <Nav/>
            <SingleBlog />
            <Footer/>
        </Container>
    )
 }
export default Single