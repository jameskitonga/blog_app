import styled from "styled-components";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';




const Container = styled.div`
 background:#1CD6CE;
 height:120vh;
 
`
const LoginContainer = styled.div`
text-align:center;
width:60%;
margin:0 auto;
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
border-bottom:2px solid red;
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

const LoginItems = () => {
    const [visible, setvisible] = useState(false)
    const [Confirm, setConfirm] = useState(false)




    return (
        <Container>
            <LoginContainer>

                <LoginEmailPasswardButton>
                    <AuthenticatorResponse>
                        <LogInInputs type="Text" placeholder="Firstname" />
                        <LogInInputs type="Text" placeholder="Lastname" />
                        <LogInInputs type="email" placeholder="E-mail" />


                        <LogPassword>
                            <ConfirmContain>
                                <LogInInputss type={visible ? "text" : "password"} placeholder="password" />
                            </ConfirmContain>
                            <PasswordVisibility onClick={() => setvisible(prev => !prev)}>{visible ? <VisibilityIcon /> : <VisibilityOffIcon />} </PasswordVisibility>
                        </LogPassword>

                        <ConfirmContain>
                            <ConfirmContain>
                                <LogInInputss type={visible ? "text" : "password"} placeholder="confirm password" />
                            </ConfirmContain>

                            <ConfirmVisibility onClick={() => setConfirm(prev => !prev)}>{Confirm ? <VisibilityIcon /> : <VisibilityOffIcon />}</ConfirmVisibility>


                        </ConfirmContain>
                    </AuthenticatorResponse>
                    
                    <Button class="wrap">
                        <LogInButton class="button">login</LogInButton >
                    </Button>
                </LoginEmailPasswardButton>
            </LoginContainer>
        </Container>
    )
}
export default LoginItems;