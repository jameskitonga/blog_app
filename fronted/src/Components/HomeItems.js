import styled from "styled-components";
// import { bloggries } from "../data";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@mui/material";



const Containers = styled.div`
background:#1CD6CE;
height:cover;

         @media (max-width: 500px) {
           
         background:#1CD6CE;          
          
           
        }
`
const Contain = styled.div` 
display:flex;
flex-wrap:wrap;
width:80%;
margin:0 auto;
        @media (max-width: 500px) {
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
           
        }
`
const CategoryContainer = styled.div`
border:2px solid red;
padding:2em;
background:#293462;
color:#1CD6CE;
margin:1em;
width:40%;
border-radius:8px;


 @media (max-width: 500px) {
           border:2px solid red;
            padding:2em;
           background:#293462;
color:#1CD6CE;
            margin:1em;
            width:100%;
            border-radius:8px;
           
        }
`
const Heading = styled.h4`
font-weight:bold;
 @media (max-width: 500px) {
   font-weight:bold;
   font-size:.1rem; 
   
 }
`
const HeadingBody = styled.h1`
 @media (max-width: 500px) {
   font-weight:bold;
   font-size:1rem; 
 }
`
const HeadingBodys=styled.p``
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
const Button=styled.button``
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
        <Containers >
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
                            <HeadingBody clas>{blog.blogdescription}</HeadingBody>
                            {/* <HeadingBodys>{ blog.blogpost}</HeadingBodys> */}
                            <div
                                dangerouslySetInnerHTML={{ __html: blog.blogpost }}
                            />
                            <Comments>~{blog.bloger}</Comments>
                            <Button><Link href={`blog/${blog.slug}`}>View Blog</Link></Button>
                            </CategoryContainer>
                    )
                })
            }
            </Contain>  
        </Containers>
    )
}
export default HomeItems;