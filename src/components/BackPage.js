import React from 'react'
import styled from'styled-components'


function BackPage() {
    return (
        <Container>
            <Wrap>
                <Left>
                    <h1>MISSION STATEMENT</h1>
                    <p>Athlete Mentality’s mission is to define the modern athlete culture in the metaverse. Our Athletes are driven by the foundation of success on the field, in the community, and in business. Athlete Mentality Teammates not only receive virtual and IRL utility, they also stand together to lift our communities to new heights. Our Teammates bring positive impact by donating to charities that provide sporting equipment to disadvantaged members in our communities and around the world. The purpose of this community is to encourage, grow, and support fellow Teammates in sports, life, and business. </p>
                </Left>

                <Middle>
                    <h1>TEAM MISSION</h1>    
                </Middle>
                <Right>
                    <div>
                    <img src="/Images/teamSec2.png" />
                    </div>
                    
                </Right>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background: transperant;
    display: flex;
    animation: background 5s infinite linear;
    overflow: hidden;

    
    @media only screen and (max-width: 768px) {
        height: 225vh;
        
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
    flex-direction: column;
    color: white;

    @media only screen and (max-width: 768px) {
        width: 100%;
        
    }
    

    h1{
        font-size: 65px;
        text-align: left;
        margin-top: 38px;

        @media only screen and (max-width: 768px) {
            font-size: 30px;
            text-align: center;
            
        }
    }
    p{
        font-size: 25px;
        margin-top: 22px;
        text-align: left;
        letter-spacing: 1.3px;
        line-height: 2.3rem;

        @media only screen and (max-width: 768px) {
            font-size: 17px;
            text-align: center;
            
        }
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
            width: 120%;
            position: absolute;
            top: -66px;
            right: 0;
            z-index: 1000;
            

            
    @media only screen and (max-width: 768px) {
        top: 230px;
        width: 100%;
        top: 94px;
        
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
        top: 125px;
        right: -46px;

        @media only screen and (max-width: 768px) {
            transform: rotate(0deg);
            top: 0;
            right: 0;
            border-top: 4px solid white;
            border-bottom: 4px solid white;
            font-size: 70px;
            
        }
    }

`

const Center = styled.div`
    width: 258px;
    height: 90vh;
    position: absolute;
    top: 30px;
    border: 2px solid white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;


    h1{
        transform: rotate(90deg);
        
        color: white;
        font-size: 90px;
        border: 2px solid white;
        right: -155px;
    }

`

export default BackPage
