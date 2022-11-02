import styled from "styled-components";
import AddblogItems from "../Components/AddblogItems";
import Nav from "../Components/Nav";


const Container=styled.div``

const AddBlog = () => {
    return (
        <Container>
            <Nav/>
          <AddblogItems/>  
       </Container> 
    )
}
export default AddBlog;