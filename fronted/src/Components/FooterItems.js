import styled from "styled-components";
import { Link } from "react-router-dom";


const FooterItemsContainer = styled.div`
background:#293462;
`
const FooterUl = styled.ul`

gap:2rem;
list-style-type:none;

`
const FooterLi = styled.li`

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
`
const Logo = styled.h2`
font-weight:bold;
text-transform:uppercase;
font-style:italic;
font-size:1.8rem;
`
const FooterLeft = styled.div``
const FooterCenter = styled.div``
const FooterRight = styled.div``
const Container = styled.div`
padding:3em;
display:flex;
justify-content:space-between;
width:70%;
margin:0 auto;
`
const SmallContain = styled.div`
border:2px solid #1CD6CE;
padding:.5em;
border-radius:6px;
background:#1CD6CE;
margin:1em;
cursor:pointer;
`
const Para = styled.p`
padding-left:1.5em;
color:#1CD6CE;
`

const Footer = () => {
    return (
        <FooterItemsContainer >
            <Container>
            <FooterLeft>
                <FooterUl>
                    <FooterLi>

                        <Link to="/">
                            <LogoContain>
                                <Logo>blog.</Logo>
                            </LogoContain>
                        </Link>
                    </FooterLi>
                </FooterUl>
            </FooterLeft>


            <FooterCenter>
                    <FooterUl>
                        <Para>Quick Links</Para>
                        
                        <SmallContain>
                            <FooterLi><Link to="/">Home  </Link></FooterLi>
                        </SmallContain>
                        <SmallContain>
                            <FooterLi><Link to="/login">Login/SigIn</Link></FooterLi>
                        </SmallContain>
                        <SmallContain>
                            <FooterLi><Link to="/addblog">Add blog</Link></FooterLi>
                        </SmallContain>
                </FooterUl>
            </FooterCenter>


            <FooterRight>
                    <FooterUl>
                        <Para>How to reach us</Para>
                        <FooterLi></FooterLi>
                        <FooterLi></FooterLi>
                        <FooterLi></FooterLi>
                        <FooterLi></FooterLi>
                        <FooterLi></FooterLi>
                </FooterUl>
            </FooterRight>

            </Container>
        </FooterItemsContainer>
    )
}
export default Footer;