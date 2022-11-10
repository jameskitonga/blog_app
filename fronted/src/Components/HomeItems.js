import styled from "styled-components";
// import { bloggries } from "../data";
import axios from "axios";
import { useEffect, useState } from "react";


const Container = styled.div`
background:#1CD6CE;
height:cover;

`
const Contain = styled.div` 
display:flex;
flex-wrap:wrap;
width:80%;
margin:0 auto;
`
const CategoryContainer = styled.div`
border:2px solid red;
padding:2em;
background:#293462;
color:#1CD6CE;
margin:1em;
width:40%;
border-radius:8px;
`
const Heading = styled.h4`
font-weight:bold;
`
const HeadingBody=styled.h1``
const Comments = styled.p`
font-size:1rem;
color:red;
text-align:center;
`
const SmallContain = styled.div`

`
const Photo = styled.p`


`
const Image = styled.img`
width:80px;
height:80px;
border:2px solid #1CD6CE;
border-radius:50%;
`

const HomeItems = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blogs/')
            .then(res => res.data)
            .then(data => {
                setBlog(data)
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, []);

    return (
        <Container>
            <Contain>
          
            {
                blog.map((blog, index) => {
                    return (
                        <CategoryContainer key={index}>
                            <SmallContain>
                                <Photo>
                                    {/* <Image src={blog.img} /> */}
                                    <Heading>{blog.blogtitle}</Heading>
                                </Photo>
                            </SmallContain>
                            <HeadingBody>{blog.blogdescription}</HeadingBody>
                            <Comments>~{blog.bloger}</Comments>
                            </CategoryContainer>
                    )
                })
            }
            </Contain>  
        </Container>
    )
}
export default HomeItems;