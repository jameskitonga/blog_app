import styled from "styled-components";
import { useState,useContext } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axoisInstance from "../axiosAPI";
import { useNavigate } from 'react-router';
import LogInContext from "../Context/LoginState";




const Container = styled.div`
 background:#1CD6CE;
padding:2em;
 
`
const LoginContainer = styled.div`
text-align:center;
width:60%;
margin:0 auto;
     
     @media (max-width: 500px) {
        
        margin-left:-2em;
        width:120%;
       
     
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
`
const LogInInputss = styled.input`
border:none;
outline:none;
background:#293462;
color:#1CD6CE;
`

const LogPassword = styled.div`
display:flex;
align-items:center;
margin:1em;
border-bottom:2px solid #1CD6CE;
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
const ConfirmVisibility = styled.div``

const AuthenticatorResponse = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Button = styled.div`
margin:1em;
`
const Para = styled.p`
 @media (max-width: 500px) {
        
      font-size:.1rem;
       
     
     }


`

const LoginItems = () => {


const {islogged}=useContext(LogInContext)
const [isLogin,setLogin]=islogged

    
    const [visible, setvisible] = useState(false)
    const [items, setItems] = useState({
        username: '',
        password: '',
    })
    const [message, setMessage] = useState({
        userErrorMessage: '',
        passwordErrorMessage: '',
    })
   

    let navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()

        axoisInstance.post('/token/obtain', {
            username: items.username,
            password: items.password

        }).then((result) => {
            axoisInstance.defaults.headers['Authorization'] = 'JWT' + result.data.access;
            localStorage.setItem('access_token', result.data.access);
            localStorage.setItem('refresh_token', result.data.refresh);
            localStorage.setItem('username', result.data.username);
            localStorage.setItem('email', result.data.email);
            console.log(result)
            if (result.status == 200) {
                navigate('/')
               isLogin.is_loggedIn = true
            }



        }).catch(error => {
            console.log('Login First')
        })


        

        if (items.username === '') {
            setMessage(prev => ({ ...prev, message, userErrorMessage: 'please fill the field with username' }))
        }
        if (items.email === '') {
            setMessage(prev => ({ ...prev, message, emailErrorMessage: 'please fill the field with email' }))

        }
        if (items.password === '') {
            setMessage(prev => ({ ...prev, message, passwordErrorMessage: 'please fill the field with password' }))

        } 
        // setLogin({
        //     is_loggedIn: true,
        //     username: '',
        //     email: '',
        // })
        
    }








    return (
        <Container>
            <LoginContainer>

                <LoginEmailPasswardButton>
                    <AuthenticatorResponse>
                        {/* <LogInInputs type="Text" placeholder="Firstname" onChange={(e) => setName(...name,username:e.target.value)}/> */}
                        <LogInInputs type='Text' placeholder='Firstname' onChange={(e) => setItems({ ...items, username: e.target.value })} required />
                        <Para style={{color:"red"}}> {message.userErrorMessage}</Para>


                        <LogPassword>
                            <ConfirmContain>
                                <LogInInputss type={visible ? "text" : "password"} placeholder="password" onChange={(e) => setItems({ ...items, password: e.target.value })} required />
                            </ConfirmContain>
                            <PasswordVisibility onClick={() => setvisible(prev => !prev)}>{visible ? <VisibilityIcon /> : <VisibilityOffIcon />} </PasswordVisibility>
                        </LogPassword>
                        <Para style={{color:'red'}}> {message.passwordErrorMessage}</Para>


                    </AuthenticatorResponse>

                    <Button class="wrap">
                        <LogInButton class="button" onClick={handleLogin}>login</LogInButton >
                    </Button>
                </LoginEmailPasswardButton>
            </LoginContainer>
        </Container>
    )
}
export default LoginItems;