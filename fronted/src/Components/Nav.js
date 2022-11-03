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
const Logo = styled.h2`
font-weight:bold;
color:#1CD6CE;
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
const IconContain=styled.div``
const InnerContain = styled.div`
display:flex;
border:2px solid #1CD6CE;
border-radius:6px;
padding:.3em;
color:#1CD6CE;
margin:1.9em;
`
const InputContain=styled.div``
const Nav = () => {
    return (
        <Container>
            <NavContainer>
                <NavLeft>
                    <ListUl>

                        <ListItems>

                            <Logo>blog.</Logo>
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

                        <ListItems><Link to="/">Home  </Link></ListItems>
                        <ListItems><Link to="/login">Login/SigIn</Link></ListItems>
                        <ListItems><Link to="/addblog">Add blog</Link></ListItems>
                    </ListUl>
                </NavRight>

            </NavContainer>
        </Container>
    )
}
export default Nav;