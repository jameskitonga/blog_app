import styled from "styled-components";
import { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axiosInstance from "../axiosAPI";
import { useNavigate } from 'react-router';




const Container = styled.div`
 background:#1CD6CE;
 padding:2em;
 @media (max-width: 500px) {
       background:#1CD6CE;
`
const LoginContainer = styled.div`
text-align:center;
width:60%;
margin:0 auto;
     @media (max-width: 500px) {
       
        text-align:center;
         width:100%;
         margin:0 auto
     }
`
const LoginEmailPasswardButton = styled.div`
border-radius:8px;
box-shadow:0 2px 3px black;
display:flex;
flex-direction:column;
background:#293462;
color:#1CD6CE;
margin:2em;
padding:2em;
                @media (max-width: 500px) {
           border-radius:8px;
            box-shadow:0 2px 3px black;
            display:flex;
            flex-direction:column;
            background:#293462;
            width:100%;
            color:#1CD6CE;
            margin:.2em;
            padding:.2em;
            
       }
`

const PasswordVisibility = styled.div`


`
const LogInInputs = styled.input`
padding:1em 3em;
border-radius:6px;
margin:0 auto;
width:fit-content;
margin:2em;
background:#293462;
color:#1CD6CE;
border:2px solid #1CD6CE;
outline:none;
         @media (max-width: 500px) {
padding:1em 3em;
border-radius:6px;
margin:0 auto;
width:fit-content;
border:none;
margin:2em;
background:#293462;
color:#1CD6CE;
border:2px solid #1CD6CE;
outline:none;


         }
`
const LogInInputss = styled.input`
border:none;
outline:none;
background:#293462;
color:#1CD6CE;
           @media (max-width: 500px) {
            border:none;
            outline:none;
            background:none;
            color:#1CD6CE;
           }
`

const LogPassword = styled.div`
display:flex;
align-items:center;
margin:1em;
border-bottom:2px solid red;
        @media (max-width: 500px) {
            border:none;
            outline:none;
            border-bottom:2px solid #1CD6CE;
           }
`
const LogInButton = styled.button`
padding:.8em 2em;
border-radius:19px;
 margin:0 auto;
 background:#1CD6CE;
 color:#293462;
 font-weight:bold;
 font-size:1rem;
 cursor:pointer;
 text-transform:uppercase;
 
 
`
const ConfirmContain = styled.div`
display:flex;
align-items:center;
margin:1em;
 
`


const AuthenticatorResponse = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Button = styled.div`
margin:1em;
`
const Para = styled.div`
 @media (max-width: 500px) {
        
      font-size:.1rem;
       
     
     }

` 



const SigninItems = () => {
    const [visible, setvisible] = useState(false)
  
    const [details, setDetails] = useState({
        username: '',
        email: '',
        password:'',
    })
    
    const [message, setMessage] = useState({
        userErrorMessage: '',
        emailErrorMessage: '',
        passwordErrorMessage:'',
        

    })

    let navigate = useNavigate()
    
    const handleSignup = (e) =>{
        e.preventDefault()
        axiosInstance.post('/user/create/', {
            username: details.username,
            email: details.email,
            password: details.password,
        }).then(response => {
            console.log(response)
            if (response.status == 201) {
                navigate('/login')
            }

           

        })
        // console.log(response)


      ///ERROR VALIDATION TO DISP;LAY ERROR
        if(details.username===''){
            setMessage(prev => ({ ...prev, message, userErrorMessage: 'please fill the field with username' }))
        } 
        if (details.email === '') {
            setMessage(prev => ({ ...prev, message, emailErrorMessage: 'please fill the field with email' }))
           
        } 
        if (details.password === '') {
            setMessage(prev => ({ ...prev, message, passwordErrorMessage: 'please fill the field with password' }))

        } 
   


    }




    return (
        <Container>
            <LoginContainer>

                <LoginEmailPasswardButton>
                    <AuthenticatorResponse>
                        <LogInInputs type="Text" placeholder="Firstname" onChange={(e)=>setDetails({...details,username:e.target.value})} />
                        <Para style={{ color: "red" }}> {message.userErrorMessage}</Para>
                        <LogInInputs type="email" placeholder="E-mail" onChange={(e) => setDetails({ ...details, email:e.target.value})} />
                        <Para style={{ color: "red" }}> {message.emailErrorMessage}</Para>

                        <LogPassword>
                            <ConfirmContain>
                                <LogInInputss type={visible ? "text" : "password"} placeholder="password"  onChange={(e)=>setDetails({...details,password:e.target.value})}/>
                            </ConfirmContain>
                            <PasswordVisibility onClick={() => setvisible(prev => !prev)}>{visible ? <VisibilityIcon /> : <VisibilityOffIcon />} </PasswordVisibility>
                        </LogPassword>
                       < Para style={{color:"red"}}> {message.passwordErrorMessage}</Para>
                    
                    </AuthenticatorResponse>
                    
                    <Button class="wrap">
                        <LogInButton class="button" onClick={handleSignup}>login</LogInButton >
                    </Button>
                </LoginEmailPasswardButton>
            </LoginContainer>
        </Container>
    )
}
export default SigninItems;