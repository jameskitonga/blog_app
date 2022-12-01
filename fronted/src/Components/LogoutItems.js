import styled from "styled-components";
import { useState, useContext } from 'react'
import LogInContext from "../Context/LoginState";
import { Link, useNavigate } from "react-router-dom";


const Div = styled.div`
color:#293462;
background:#1CD6CE;

padding:3em;

`
const ColorDiv = styled.div`
margin:2em;
padding:2em;
border-radius:7px; 

`

const Heading = styled.h2`
  @media (max-width: 500px) {
    display: block;
    font-size: .4em;
   width:100%;
    font-weight: bold;  
}
    `
const Button = styled.button`
padding:.7em 1em;
font-weight:bold;
font-size:1rem;
margin:2em;
cursor:pointer;
border-radius:6px;

color:#293462;
background:#1CD6CE;

   @media (max-width: 500px) {
           padding:.2em .5em;
            font-weight:bold;
            margin:.1em;
            cursor:pointer;
            border-radius:6px;
            color:#293462;
            background:#1CD6CE;
                         
     }

`
const InnerContainer = styled.div`
margin:0 auto;
width:50%;
border:2px solid red;
padding:3em;
border-radius:7px;

background:#293462;
color:#1CD6CE;
        @media (max-width: 500px) {
        
            width:180%;
            // border:2px solid red;
            margin-left:-3em;
            border-radius:7px;
            background:#293462;
            color:#1CD6CE;
     
     }

`

const Btn = styled.div`
display: flexbox;
justify-content:center;
align-item:center;
padding:2em;
        @media (max-width: 500px) {
           display: flex;
            justify-content:center;
            align-item:center;
            padding:2em;
            width:120%;
                         
     }
`


const LogoutItems = () => {
    const { islogged } = useContext(LogInContext)
    const [isLogin, setLogin] = islogged


    let navigate = useNavigate()

    const Logout = () => {
        localStorage.clear()
        setLogin({
            is_loggedIn: false,
            username: '',
            email: '',
        })

       navigate('/')

    }

    return (
        <Div>
            <ColorDiv>
                {

                    <InnerContainer>
                        <Heading>Are you sure you want to LogOut  click the button to continue</Heading>
                        <Btn>
                            
                            <Button onClick={Logout} style={{fontSize:'1.1rem'}}>ACCEPT</Button>
                            <Button ><Link to='/'>DECLINE</Link></Button>
                        </Btn>
                    </InnerContainer>
                }
            </ColorDiv>
        </Div>

    )
}
export default LogoutItems;