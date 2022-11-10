import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


const Container = styled.div`
background:#293462;

`
const NavContainer = styled.div`
display:flex;
justify-content:space-between;
margin:0 auto;
width:70%;  
`
const NavLeft = styled.div``
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

`
const Logo = styled.h2`
font-weight:bold;
text-transform:uppercase;
font-style:italic;
font-size:1.8rem;
`
const NavRight = styled.div`
flex-direction:row;
margin:1.9em;
`
const NavCenter = styled.div`
display:flex;
`
const ListUl = styled.ul`

display:flex;
gap:2rem;
list-style-type:none;

`
const SmallContain = styled.div`
border:2px solid #1CD6CE;
padding:.5em;
border-radius:6px;
background:#1CD6CE;

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
    return (
        <Container>
            <NavContainer>
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

                <NavRight>
                    <ListUl>
                        <SmallContain>
                            <ListItems><Link to="/">Home  </Link></ListItems>
                        </SmallContain>
                        <SmallContain>
                            <ListItems><Link to="/login">Login/SigIn</Link></ListItems>
                        </SmallContain>
                            <SmallContain>
                            <ListItems><Link to="/addblog">Add blog</Link></ListItems>
                        </SmallContain>
                    </ListUl>
                </NavRight>

            </NavContainer>
        </Container>
    )
}
export default Nav;