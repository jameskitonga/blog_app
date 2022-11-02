import styled from "styled-components";
// import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


const Container = styled.div``
const NavContainer = styled.ul`
dislay:flex;

`
const NavLeft = styled.div``
const Logo=styled.h2``
const NavRight = styled.div``
const NavCenter = styled.div``
const ListItems=styled.li``
const Nav = () => {
    return (
        <Container>
            <NavContainer>
                <NavLeft>
                    <ListItems>

                        <Logo><Link>blog.</Link></Logo>
                    </ListItems>
                </NavLeft>

                <NavCenter>
                    <ListItems>

                    {/* <SearchIcon /> */}
                    </ListItems>
                </NavCenter>

                <NavRight>
                    <ListItems><Link to="/">Home  </Link></ListItems>
                    <ListItems><Link to="/login">Login</Link></ListItems>
                    <ListItems><Link to="/addblog">Add blog</Link></ListItems>
                </NavRight>

            </NavContainer>
     </Container>   
    )
}
export default Nav;