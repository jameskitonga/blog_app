import styled from "styled-components";
import AddblogItems from "../Components/AddblogItems";
import Nav from "../Components/Nav";
import Footer from "../Components/FooterItems";


const Container=styled.div``

const AddBlog = () => {
    return (
        <Container>
            <Nav/>
            <AddblogItems />  
            <Footer />

       </Container> 
    )
}
export default AddBlog;