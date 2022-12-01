import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import LogInContext from "../Context/LoginState";
import { Container } from "bootstrap"




const Containers = styled.div`
background:#293462;
  @media (max-width: 500px) {
              background:#293462;
               color:#293462;
               width:100%;
               border:2px solid white;
            }
`
const NavContainer = styled.div`
display:flex;
justify-content:space-between;
margin:0 auto;
width:70%; 
   @media (max-width: 500px) {
            display:flex;
            justify-content:space-between;
            flex-direction:column;
            margin:0 auto;
            width:100%; 
            }
`
const NavLeft = styled.div`
   @media (max-width: 500px) {
    margin-top:1.2em;
   }
`
const LogoContain = styled.div`
width:120px;
color:#293462;
height:120px;
border:2px solid #293462;
border-radius:50%;
background:#1CD6CE;
display:flex;
align-items:center;
cursor:pointer;
box-shadow:2px 2px 8px #1CD6CE;

        @media (max-width: 500px) {
        width:60px;
        color:#293462;
        height:60px;
        border:2px solid #293462;
        border-radius:50%;
        background:#1CD6CE;
        display:flex;
        align-items:center;
        cursor:pointer;
        box-shadow:2px 2px 8px #1CD6CE;
    }
`
const Logo = styled.h2`
font-weight:bold;
text-transform:uppercase;
font-style:italic;
font-size:1.8rem;

        @media (max-width: 500px) {
            font-weight:bold;
            text-transform:uppercase;
            font-style:italic;
            font-size:.4rem;
       }
`
const NavRight = styled.div`
flex-direction:row;
margin:1.9em;

   @media (max-width: 500px) {
        display:flex;
        flex-direction:column;
        
        margin:.1em;
padding:.1em .4em;

       }


`
const NavCenter = styled.div`
display:flex;
`
const ListUl = styled.ul`

display:flex;
gap:2rem;
list-style-type:none;


   @media (max-width: 500px) {
    display:flex;
    gap:.4rem;
    list-style-type:none;
       }



`
const SmallContain = styled.div`
border:2px solid #1CD6CE;
padding:.5em;
border-radius:6px;
background:#1CD6CE;

@media (max-width: 500px) {
        border:2px solid white;
        padding:.1em .4em;
        
        border-radius:6px;
        background:#1CD6CE;
        
        display:flex;
        flex-direction:column;
       }


`
const NavCenterLeft = styled.div`
@media (max-width: 500px) {
    display:flex;
}
`
const ListItems = styled.li`

`
const Textinput = styled.input`
border:none;
background:#293462;
outline:none;
padding:.3em;
color:#1CD6CE;
font-weight:bold;
`
const IconContain = styled.div``
const InnerContain = styled.div`
display:flex;
border:2px solid #1CD6CE;
border-radius:6px;
padding:.3em;
color:#1CD6CE;
margin:1.9em;
`
const InputContain = styled.div``



const Nav = () => {
    const { islogged } = useContext(LogInContext)
    const [isLogin, setLogin] = islogged

    // const [isLogin, setLogin] = useState({
    //     is_loggedIn: localStorage.getItem('access_token') ? true : false,
    //     username: '',
    //     email: '',
    // })


    if (isLogin.is_loggedIn) {
        isLogin.username = localStorage.getItem('username')
        console.log('Logged in already')
        isLogin.email = localStorage.getItem('email')
    }



    const Logout = () => {
        localStorage.clear()
        setLogin({
            is_loggedIn: false,
            username: '',
            email: '',
        })

    }




    return (
        <Containers >
            <NavContainer>
                <NavCenterLeft>
                    <NavLeft>
                        <ListUl>

                            <ListItems>
                                <Link to="/">
                                    <LogoContain>
                                        <Logo>blog.</Logo>
                                    </LogoContain>
                                </Link>
                            </ListItems>
                        </ListUl>
                    </NavLeft>

                    <NavCenter>
                        <ListUl>
                            <ListItems>
                                <InnerContain>
                                    <IconContain>
                                        <SearchIcon />
                                    </IconContain>
                                    <InputContain>
                                        <Textinput type="Text" placeholder="Search" />
                                    </InputContain>
                                </InnerContain>
                            </ListItems>
                        </ListUl>
                    </NavCenter>
                </NavCenterLeft>


                <NavRight>
                    <ListUl>
                        <SmallContain>
                            <ListItems><Link to="/">Blogs  </Link></ListItems>
                        </SmallContain>
                        <SmallContain>
                            <div>
                                {
                                    isLogin.is_loggedIn ?
                                        <ListItems><Link to="/addblog">Add blog</Link></ListItems>
                                        :
                                        <ListItems><Link to="/login">Add blog</Link></ListItems>
                                }
                            </div>
                        </SmallContain>


                        {
                            isLogin.is_loggedIn ?
                                <div className="style">
                                    <SmallContain>
                                        <ListItems><Link to="/profile">Profile</Link></ListItems>
                                    </SmallContain>

                                    <SmallContain>
                                        <ListItems><Link to="/logout">LogOut</Link></ListItems>
                                    </SmallContain>
                                </div>
                                :
                                <div className='style'>
                                    <SmallContain>
                                        <ListItems><Link to="/register">Register</Link></ListItems>
                                    </SmallContain>

                                    <SmallContain>
                                        <ListItems><Link to="/login">Login</Link></ListItems>
                                    </SmallContain>
                                </div>
                        }
                    </ListUl>
                </NavRight>

            </NavContainer>
            <p style={{ color: "white", textAlign: "center" }}>Hey {isLogin.username} welcome to blog   </p>
        </Containers>
    )
}
export default Nav;