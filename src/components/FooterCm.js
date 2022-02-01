import React from 'react'
import styled from 'styled-components'
import BackPage from './BackPage'
import Team from './Team'
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function FooterCm() {
    return (
        <Container>
           <Wrap>
           <Logo>
               <img src="/Images/logo.png" />
           </Logo>
           <Social>
           <a href='https://twitter.com/AthleteMent_NFT '><FaTwitter  style={{fontSize: '60px', margin: '0 10px'}}/></a>
           <a href=' https://www.instagram.com/athletementality.nft/'><FaInstagramSquare style={{fontSize: '60px', margin: '0 10px'}}/></a>
           <a href='https://discord.gg/gFRgUZvu8s '><FaDiscord style={{fontSize: '60px', margin: '0 10px'}}/></a>

          
           </Social>
           </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 41%, rgba(42,97,108,1) 100%);
    display: flex;
    justify-content: center;

    
    @media only screen and (max-width: 768px) {
        margin-top: 0;
    }

`
const Wrap = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }

`
const Logo = styled.div`
    width: 6.5%;

    @media only screen and (max-width: 768px) {
        width: 25%;
    }

    img{
        width: 100%;
    }


`

const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
export default FooterCm
