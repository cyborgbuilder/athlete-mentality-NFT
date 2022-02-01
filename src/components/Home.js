import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import './Home.css'

function Home() {

   

    return (
        <Container>
             <Wrap>
             <Navbar  bg="myTra" variant='dark'  expand='lg' sticky='top'>
             

<Navbar.Toggle style={{marginLeft: '10px'}} />
<Navbar.Collapse>
<Nav style={{}}>
    
    <Nav.Link style={{marginLeft: '12px', color: 'white', fontSize: '21px', fontFamily: "'Anton', sans-serif",  letterSpacing: '1.2px'}} href="">MINT</Nav.Link>
    <Nav.Link style={{marginLeft: '12px', color: 'white', fontSize: '21px', fontFamily: "'Anton', sans-serif",  letterSpacing: '1.2px'}} href="">OUR STORY</Nav.Link>
    <Nav.Link style={{marginLeft: '12px', color: 'white', fontSize: '21px', fontFamily: "'Anton', sans-serif",  letterSpacing: '1.2px'}} href="">BUSINESS MODEL</Nav.Link>
    <Nav.Link style={{marginLeft: '12px', color: 'white', fontSize: '21px', fontFamily: "'Anton', sans-serif",  letterSpacing: '1.2px'}} href="">ROADMAP</Nav.Link>
    <Nav.Link style={{marginLeft: '12px', color: 'white', fontSize: '21px', fontFamily: "'Anton', sans-serif", letterSpacing: '1.2px'}} href="">GALLERY</Nav.Link>
    <Nav.Link style={{marginLeft: '12px', color: 'white', fontSize: '21px', fontFamily: "'Anton', sans-serif",  letterSpacing: '1.2px'}} href="">TEAM MISSION</Nav.Link>
    <Button size="lg" style={{border: 'none', outline: 'none',  backgroundColor: '#00A2FF'}}>Connect Wallet</Button>
</Nav>
</Navbar.Collapse >

<Image  src="/images/logo.png" />



</Navbar>
        <Wrapper>
           
            <Left>
            
                <div>
                <Zoom>
                <img src="/Images/hero.png" />
                </Zoom>
                <Fade bottom>
                <p>Defining the Modern Athlete Culture in the Metaverse </p>
                </Fade>
                <Fade bottom>
                <button>MINT YOUR ATHLETE</button>
                </Fade>
                </div>
                
            </Left>
           
            <Right >
            <Slide right>
                <div>
                <Hero src="/Images/herohd.png" />
                    
                </div>
            </Slide>
            
            </Right>

        </Wrapper>
             </Wrap>
        </Container>
    )
}

export default Home


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(180deg, #0000004A 0%, #000000 100%),url('/images/backg.jpg');
    background-size: cover;

    @media only screen and (max-width: 768px) {
        height: 150.3vh;
    }

    .nav-links{
        color: black;
    }

    

`
const Wrap = styled.div`
    width: 100%:
    display: flex;

`

const Button = styled.button`
    color: white;
    font-weight: bold;
    margin-left: 24px;
    border-radius: 5px 15px 5px;
    padding: 0 10px;
    font-Family: 'Lato', sans-serif;
    font-size: 17px;
    letter-spacing: 1.6px;
    font-family: 'Anton', sans-serif;

    &:hover{
        background: #0d9ef1;
        box-shadow: 0 0 5px #0d9ef1, 0 0 25px #0d9ef1, 0 0 50px #0d9ef1, 0 0 200px #0d9ef1;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scale(1.02);
    }
    @media only screen and (max-width: 768px) {
        margin: 0;
        padding: 10px 0;
        border-radius: 2px;
        
    }


`
const Image = styled.img`
    width: 65px;
    margin-right: 50px;

    @media only screen and (max-width: 768px) {
        
        margin-left: 170px; 
        width: 80px;
        margin-right: 30px;
        
    }

`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        
    }

`
const Left = styled.div`
    width: 56%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
        
    }

    div{
        width: 100%;
        margin-top: 70px;
        margin-left: 40px;


        div{
            margin-left: 30px;
        }

        @media only screen and (max-width: 768px) {
            margin-top: 30px;
            margin-left: 0;
        }
    }
    img{
        width: 100%;
        margin-top: 10px;
    }
    p{
        color: white;
        margin-top: 20px;
        padding: 0 10px;
        font-Family: 'Lato', sans-serif;
        font-size: 26px;
        letter-spacing: 1.1px;
        font-family: 'Anton', sans-serif;

        @media only screen and (max-width: 768px) {
            font-size: 19px;
        }
    }

    button{
        margin-top: 30px;
        border: none;
        outline: none;
        padding: 18px 22px;
        border-radius: 5px;
        background: #00A2FF;
        color: white;
        font-family: 'Anton', sans-serif;
        letter-spacing: 1.05px;
        font-size: 21px;

        &:hover{
            background: #0d9ef1;
            box-shadow: 0 0 5px #0d9ef1, 0 0 25px #0d9ef1, 0 0 50px #0d9ef1, 0 0 200px #0d9ef1;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            
            
        }
        @media only screen and (max-width: 768px) {
            margin-top: 15px;
        }

        h1{
            font-family: 'Anton', sans-serif;
        }

    }
`
const Right = styled.div`
    width: 44%;

    @media only screen and (max-width: 768px) {
        width: 100%;
        
    }

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
`
const Hero = styled.img`

width: 100%; 
position: absolute;
top: -46px;
@media only screen and (max-width: 768px) {
    width: 100%;
    top: 10px;
}

`


