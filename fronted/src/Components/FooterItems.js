import styled from "styled-components";
import { Link } from "react-router-dom";


const FooterItemsContainer = styled.div`
background:#293462;
           @media (max-width: 500px) {
           
       background:#293462;        
          
           
        }
        
`
const FooterUl = styled.ul`

gap:2rem;
list-style-type:none;
      @media (max-width: 500px) {
           
          gap:.5rem;         
          
           
        }

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

          @media (max-width: 500px) {
           
            background:#1CD6CE;
            color:#293462;
             width:60px;
       
        height:60px;
        border:2px solid #293462;
        border-radius:50%;
        
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
const FooterLeft = styled.div``
const FooterCenter = styled.div`


`
const FooterRight = styled.div``
const Container = styled.div`
padding:3em;
display:flex;
justify-content:space-between;
width:70%;
margin:0 auto;
     @media (max-width: 500px) {
        gap:3rem;
display:flex;
justify-content:space-around;
width:100%;
margin:0 auto;
     }
        
`
const SmallContain = styled.div`
border:2px solid #1CD6CE;
padding:.5em;
border-radius:6px;
background:#1CD6CE;
margin:1em;
cursor:pointer;
            @media (max-width: 500px) {
            padding:.2em;

            border-radius:6px;
background:#1CD6CE;
color:#293462;
margin:.4em;
cursor:pointer;
       }

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