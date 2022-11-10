import styled from "styled-components";
import { useState, useEffect } from 'react'
import axios from "axios";


const Container = styled.div`
background:#1CD6CE;
color:#293462;
height:80vh;
padding:3em;

`
const InnerContainer = styled.div`
background:#293462;
color:#1CD6CE;
margin:0 auto;
width:60%;
padding:3em;
border-radius:7px;

`
const Contain = styled.div`
margin:0 auto;  
`
const TextField = styled.textarea`
border-radius:6px;
background:#1CD6CE;
color:#293462;
font-weight:bold;
font-size:1rem;
outline:none;
border:none;
padding:.5em;
`
const InputArea = styled.input`
border-radius:6px;
background:#1CD6CE;
color:#293462;
font-weight:bold;
font-size:1rem;
outline:none;
padding:.7em 2em;
border:none;
`
const Heading = styled.h3``
const Btn = styled.button`
color:#293462;
background:#1CD6CE;
padding:.9em 2em;
border-radius:6px;
border:2px solid #293462;
cursor:pointer;

`
const HeadingTextarea = styled.div`
display:flex;
gap:2em;
margin:1em;
`
const HeadingContainer = styled.div``
const TextFieldContainer = styled.div``



const AddblogItems = () => {
  // const [errorMessage, setErrorMessage] = useState('');



  const [blog, setBlog] = useState({
    blogtitle: '',
    blogdescription: '',
    bloger: '',
  })

  
  
  const HandleSubmit = () => {
    axios.post('http://127.0.0.1:8000/api/blogs/', blog)
    setBlog({
      blogtitle: '',
      blogdescription: '',
      bloger: '',
    })
    // const [error, setError] = useState(true)
    
    
  }
  useEffect(() => {
    HandleSubmit()
    
  }, []);


  return (
    <Container>
      <InnerContainer>
        <Contain >
          <HeadingTextarea>
            <HeadingContainer>
              <Heading>Blog Title</Heading>
            </HeadingContainer>
            <TextFieldContainer>
              <TextField id="story" name="story" value={blog.blogtitle}
                rows="2" cols="35" type='Text' placeholder="Title" onChange={(e) => setBlog({ ...blog, blogtitle: e.target.value })}></TextField>
              {/* <p>{}</p> */}
            </TextFieldContainer>
          </HeadingTextarea>


          <HeadingTextarea>
            <HeadingContainer>
              <Heading>Blog Description</Heading>
            </HeadingContainer>
            <TextFieldContainer>
              <TextField id="story" name="story"
                rows="5" cols="40" type='Text' placeholder="description" value={blog.blogdescription}  onChange={(e) => setBlog({ ...blog, blogdescription: e.target.value })}></TextField>
            </TextFieldContainer>
          </HeadingTextarea>

          <HeadingTextarea>
            <HeadingContainer>
              <Heading>Blogger</Heading>
            </HeadingContainer>
            <TextFieldContainer>
              <InputArea type='Text' placeholder='Blogger' value={blog.bloger} onChange={(e) => setBlog({ ...blog, bloger: e.target.value })} />
            </TextFieldContainer>
          </HeadingTextarea>
          <Btn onClick={HandleSubmit}>POST</Btn>
        </Contain>
      </InnerContainer>
    </Container>

  )
}
export default AddblogItems;