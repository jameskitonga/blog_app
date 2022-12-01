import styled from "styled-components";
import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';
import slugify from 'react-slugify'; 
  
  
  
  
const Container = styled.div`
background:#1CD6CE;

`
const InnerContainer = styled.div`
padding:2em;

`
const Contents = styled.div`
border:2px solid #1CD6CE;
background:#293462;
color:#1CD6CE;
width:60%;
margin:0 auto;
        @media (max-width: 500px) {
            border:2px solid #1CD6CE;
            background:#293462;
            color:#1CD6CE;
            width:100%;
            margin:0 auto;
        }
`
const HeadingContainer = styled.div`
width:40%;
       @media (max-width: 500px) {
             width:100%;
       }
`
const TextContainer = styled.div`
width:40%;
`
const HeadingTextContainer = styled.div`
display:flex;
justify-content:center;
margin:2em;
      @media (max-width: 500px) {
             display:flex;
             flex-direction:column;
            justify-content:center;
            margin:2em;
       }
`
const Heading = styled.h2`

`

const TextField = styled.textarea`
border-radius:7px;
padding:1em 2em;
outline:none;
`
const InputArea = styled.input`
padding:1em 3em;
border-radius:7px;
outline:none;
    @media (max-width: 500px) {
           padding:1em 3em;
            border-radius:7px;
            outline:none;  
            width:100%;
       }
`

const Btn = styled.button`
`
const Editors = styled.div`

`


const AddblogItems = () => {
  // const [errorMessage, setErrorMessage] = useState('');



  const [blog, setBlog] = useState({
    blogtitle: '',
    blogdescription: '',
    blogpost: '',
    bloger: '',
    slug: '',
    // image: '',
  })



  const HandleSubmit = () => {
    axios.post('http://127.0.0.1:8000/api/blogs/', blog)
    setBlog({
      blogtitle: '',
      blogdescription: '',
      blogpost: '',
      bloger: '',
      slug: '',
      // image: '',
      
    })
    console.log(blog)
    // const [error, setError] = useState(true)

    slugify(blog.slug.value='blogtitle.value', {
      lower: true,
      strict: true,
      locale: 'en',
    })
  }
  // useEffect(() => {
  //   HandleSubmit()

  // }, []);


  const editorRef = useRef(null);
  
 



  return (
    <Container>
      <InnerContainer>
        <Contents>
          <HeadingTextContainer>
            <HeadingContainer>
              <Heading>Blog Title</Heading>
            </HeadingContainer>
            <TextContainer>
              <TextField id="story" name="story" value={blog.blogtitle}
                rows="1" cols="30" type='Text' placeholder="Title" onChange={(e) => setBlog({ ...blog, blogtitle: e.target.value })} />
            </TextContainer>
          </HeadingTextContainer>

          <HeadingTextContainer>
            <HeadingContainer>
              <Heading>Blog Description</Heading>
            </HeadingContainer>
            <TextContainer>
              <TextField id="story" name="story" rows="2" cols="30" type='Text' placeholder="description" value={blog.blogdescription} onChange={(e) => setBlog({ ...blog, blogdescription: e.target.value })} />
            </TextContainer>

          </HeadingTextContainer>




          <HeadingTextContainer>
            <HeadingContainer>
              <Heading>Blog Post</Heading>
            </HeadingContainer>
            <TextContainer>
              <Editors>
                <Editor
                  apiKey='fsypo03f73783rh481qwfk05eue3ajj26j6598o8peno817d'
                  onInit={(evt, editor) => editorRef.current = editor}
                  initialValue=""
                  onEditorChange={() => setBlog({ ...blog, blogpost: editorRef.current.getContent() })}
                  value={blog.blogpost}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />
              </Editors>
            </TextContainer>
          </HeadingTextContainer>


          <HeadingTextContainer>
            <HeadingContainer>
              <Heading>Blogger</Heading>
            </HeadingContainer>
            <TextContainer>
              <InputArea type='Text' placeholder='Blogger' value={blog.bloger} onChange={(e) => setBlog({ ...blog, bloger: e.target.value })} />
            </TextContainer>
          </HeadingTextContainer>


          <HeadingTextContainer>
            <HeadingContainer>
              <Heading>Slug</Heading>
            </HeadingContainer>
            <TextContainer>
              <InputArea type='Text' placeholder='Blogger' onChange={(e) => setBlog({ ...blog, blogtitle: e.target.value })} />
            </TextContainer>
          </HeadingTextContainer>
          <Btn onClick={HandleSubmit}>POST</Btn>
        </Contents>
      </InnerContainer>
    </Container>

  )
}

export default AddblogItems