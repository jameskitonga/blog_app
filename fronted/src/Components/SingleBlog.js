import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";


const Heading = styled.h1`
// color:red;
margin:1em;
 @media (max-width: 500px) {
        
      font-size:.5rem;
       
     
     }
`
const Headings = styled.h2``
const Image = styled.img`
height:70%;
width:70%;
margin:1em;
@media (max-width: 500px) {
        height:70%;
        width:70%;
        margin:1em;
            
       
     
     }

`
const ImageContainer = styled.div`
text-align:center;
`
const Container = styled.div`

background:#1CD6CE;
height:100vh;
@media (max-width: 500px) {
    height:95%;
}
`
const InnerContainer = styled.div`
padding:2em;
width:90%;
margin:0 auto;
@media (max-width: 500px) {
        
        width:100%;
        
            
       
     
     }

`

const ItemsContainer = styled.div`
padding:2em;
background:#293462;
color:#1CD6CE;
width:90%;
margin:0 auto;
border-radius:8px;
@media (max-width: 500px) {
        padding:2em;
        background:#293462;
        color:#1CD6CE;
        width:100%;
        // margin:0 auto;
        border-radius:8px;
                    
       
     
     }
`
const BlogPost = styled.p`
@media (max-width: 500px) {
        
      font-size:.1rem;
       
     
     }

`



const SingleBlog = () => {

    const { slug } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/blogs/${slug}/`)

            .then(res => res.data)

            .then(data => {
                setData(data)
                console.log(data)
            }).catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    return (
        <Container>
            <InnerContainer>
                <ItemsContainer>
                    <Heading>{data.blogtitle}</Heading>
                    <ImageContainer>
                        <Image src={data.image} />
                    </ImageContainer>
                    <BlogPost>{ data.blogpost}</BlogPost>
                </ItemsContainer>
            </InnerContainer>
        </Container>
    )
}
export default SingleBlog;
