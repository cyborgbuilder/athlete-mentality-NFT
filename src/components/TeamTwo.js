import React from 'react';
import styled from 'styled-components'
function TeamTwo() {
  return (
    <div className="App">
      <Container>
          <Wrap>
          <Header>
                  <h1>TEAM</h1>
              </Header>
              <Cards>
              <Card>
                        
                        <h3>Johnny Nitti</h3>
                        <p>Founder</p>
                        <p>Attorney</p>
                        <p>Business strategy</p>
                    </Card>

                    <CardTwo>
                        <h3>Marc Sessa</h3>
                        <p>Marketing</p>
                        <p>Graphic Designer</p>
                    </CardTwo>

                    <CardThree>
                        <h3>Our developer</h3>
                        <p>Web3.0 develope</p>
                        <p>emitomoabdlateefo<br></br>@gmail.com</p>
                        
                    </CardThree>
              </Cards>
            
          </Wrap>
      </Container>
    </div>
  );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 200px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 41%, rgba(42,97,108,1) 100%);

`
const Wrap = styled.div`
    width: 90%;
    display: flex;
    margin-top: 100px;

      
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 100px;
        
    }

`
const Cards = styled.div`
    width: 80%;
    display: flex;
    margin-bottom: 150px;
    border-top: 2px solid blue;

    @media only screen and (max-width: 768px) {
        border: none;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        
    }


`
const Header = styled.div`
    width: 20%;
    border-right: 2px solid blue;

    @media only screen and (max-width: 768px) {
        border: none;
        width: 100%;
        
    }

    h1{
        color: white;
        font-family: 'Anton', sans-serif;
        transform: rotate(90deg);
        margin-top: 120px;
        font-size: 200px;
        letter-spacing: 1.5px;

        @media only screen and (max-width: 768px) {
            transform: rotate(0deg);
            font-size: 60px;
            margin-top: 0;
            
        }
    }


`



const Card = styled.div`
    background: black;
    border-radius: 15px;
    height: 350px;
    width: 300px;
    text-align: left;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    margin-top: 130px;
    margin-left: 100px;
    color: white;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        transform: scale(1.01);
        cusrsor: pointer;

    }

    @media only screen and (max-width: 768px) {
        margin: 0;
        margin-left: 40px;
        margin-top: 50px;

        
    }

   
    h3{
        font-size: 43px;
        margin-left: 20px;
        margin-top: 30px;
        font-family: 'Anton', sans-serif;
        margin-bottom: 50px;
    }

    img{
        width: 40%;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 10px;
        
    }

    p{
        font-size: 20px;
        margin-left: 20px;
        margin-top: 20px;
        text-transform: capitalize;
        font-family: 'Anton', sans-serif;
        letter-spacing: 1.5px;
    }

`

const CardTwo = styled(Card)`
    background: white;
    color: black;
    margin-left: 70px;
    margin-top: 220px;

    @media only screen and (max-width: 768px) {
        margin: 0;
        margin-left: 40px;
        margin-top: 50px;

        
    }

`

const CardThree = styled(Card)`
    margin-left: 70px;
    
    @media only screen and (max-width: 768px) {
        margin: 0;
        margin-left: 40px;
        margin-top: 50px;

        
    }

`
export default TeamTwo;