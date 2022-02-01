import React from 'react'
import styled from 'styled-components'
function Team() {
    return (
        <Container>
             <Wrap>
                <Left>
                    <Card>
                        <img src='/images/profile.png' />
                        <h3>Johnny Nitti</h3>
                        <p>Founder/Attorney/Business strategy</p>
                    </Card>

                    <CardTwo>
                    <img src='/images/profile.png' />
                        <h3>Marc Sessa</h3>
                        <p>Marketing and Graphic Designer</p>
                    </CardTwo>

                    <CardThree>
                        <img src='/images/profile.png' />
                        <h3>Johnny Nitti</h3>
                        <p>Founder/Attorney/Business strategy</p>
                    </CardThree>
                </Left>

                <Middle>
                    <h1>TEAM MEMBERS</h1>    
                </Middle>
                <Right>
                    <div>
                    <img src="/Images/team2.png" />
                    </div>
                    
                </Right>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 120vh;
    background: transperant;
    display: flex;
    border-top: 10px solid white;

    
    @media only screen and (max-width: 768px) {
        height: 263vh;
        
    }
   
    justify-content: center;
    font-family: 'Anton', sans-serif;

`

const Wrap = styled.div`
    width: 98%;
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
         
        
    }

`

const Left = styled.div`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    color: white;

    @media only screen and (max-width: 768px) {
        width: 100%;
        
    }
    

    h1{
        font-size: 65px;
        text-align: left;
        margin-top: 220px;
    }
    p{
        font-size: 25px;
        margin-top: 22px;
        text-align: left;
        letter-spacing: 1.3px;
        line-height: 2.3rem;
    }

`
const Right = styled.div`
    width: 40%;

    
    @media only screen and (max-width: 768px) {
        width: 100%;
        
    }

    div{
        width: 100%;
        position: relative;

        img{
            width: 110%;
            position: absolute;
            top: 120px;
            right: 0;

            
    @media only screen and (max-width: 768px) {
        top: 230px;
        width: 100%;
        
    }
        }
    }



`

const Middle = styled.div`
        width: 20%;
        border-left: 4px solid white;
        border-right: 4px solid white;
        position: relative;

        
    @media only screen and (max-width: 768px) {
        width: 100%;
        
    }
        
    h1{
        transform: rotate(90deg);
        font-size: 70px;
        color: white;
        font-size: 110px;
        position: absolute;
        top: 275px;
        right: -46px;

        @media only screen and (max-width: 768px) {
            transform: rotate(0deg);
            top: 0;
            right: 0;
            border-top: 4px solid white;
            border-bottom: 4px solid white;
            font-size: 80px;
            
        }
    }

`

const Card = styled.div`
    background: black;
    border-radius: 15px;
    height: 300px;
    width: 250px;
    text-align: left;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    margin-top: 30px;


    h3{
        font-size: 25px;
        margin-left: 20px;
        margin-top: 30px;
    }

    img{
        width: 40%;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 10px;
    }

    p{
        font-size: 15px;
        margin-left: 20px;
        margin-top: 10px;
    }

`

const CardTwo = styled(Card)`
    background: white;
    color: black;
    margin-left: 50px;
    margin-top: 100px;


`

const CardThree = styled(Card)`
    margin-left: ;
    margin-bottom: 300px;

`

export default Team
