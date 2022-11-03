import styled from "styled-components";
import { bloggries } from "../data";



const Container = styled.div`
background:#1CD6CE;
height:100vh;
`
const Contain = styled.div` 
padding:2em;
width:50%;
margin:0 auto;

`
const CategoryContainer = styled.div`
border-radius:6px;
border:2px solid red;
padding:2em;
background:#293462;
color:#1CD6CE;


`
const Heading = styled.h1`
font-weight:bold;
`
const Comments = styled.p`
font-size:1rem;
color:red;
text-align:center;
`


const HomeItems = () => {
    return (
        <Container>
            <Contain>
          
            {
                bloggries.map((bloggy, index) => {
                    return (
                            <CategoryContainer>
                            <Heading>{bloggy.name}</Heading>
                                <Heading>{bloggy.description}</Heading>
                                <Comments>{bloggy.comment }</Comments>
                            </CategoryContainer>
                    )
                })
            }
            </Contain>  
        </Container>
    )
}
export default HomeItems;