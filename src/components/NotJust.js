import React from 'react'
import styled from 'styled-components'
function NotJust() {
    return (
        <Container>
            <Wrap>
                
                <Left>
                    <h1>The MMYC story</h1>
                    <p>Athlete Mentality is a prominent sports brand of the future. We are in the works to obtain sponsorship, branding, and licensing deals with professional athletes and celebrities. By joining the Team, individual NFT Holders will TEAM up to form a DAO. The DAO will be responsible for: 1) Allocating Sponsorship, Licensing, and Branding money amongst Teammates (Holders); 2) Designating which charities to fund and IRL events to host and attend; 3) Deciding Giveaways for Teammates; 4) Strategizing the future vision of the Company; and 5) Influencing further developed Seasons of avatars. 

The DAO will be explained further closer to the launching milestone (See Roadmap). However, your impact in the Dao will be ranked by the holding of your Athlete Mentality NFT (See below). 
</p>
                </Left>
                <Right>
                    <img src="/images/0275.png" />
                    <img src="/images/l2.png" />
                    <img src="/images/l1.png" /> 
                    <img src="/images/0314.png" />
                      
                      
                </Right>
                
            </Wrap>
           
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
   
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 41%, rgba(42,97,108,1) 100%);

    @media only screen and (max-width: 768px) {
        height: 205vh;
        
    }

`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    margin-top: 100px; 


    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        
    }
`


const WrapTwo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    h1{
        color: white;
        font-family: 'Mochiy Pop P One', sans-serif;
        font-size: 100px;
        margin: 100px 0;
    }

`
const Left = styled.div`
    width: 50%;
    color: white;
    font-family: 'Mochiy Pop P One', sans-serif;

    @media only screen and (max-width: 768px) {
        width: 100%;
        
    }

    h1{
        margin-top: 40px;
        
        @media only screen and (max-width: 768px) {
            font-size: 20px;;
            line-height: 2.1rem;
            
        }
    }
    p{
        font-size: 16px;
        margin-top: 50px;
        text-align: left;
        line-height: 2.3rem;
        letter-spacing: 1.3px;

        @media only screen and (max-width: 768px) {
            font-size: 12px;;
            text-align: center;
            
        }
    }
` 

const Right = styled.div`
    width: 50%;
    flex-wrap: wrap;
    padding-top: 30px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
        
    }
    img{
        width: 36%;
        border-radius: 15px;
        margin: 20px;
        cursor: pointer;

        @media only screen and (max-width: 768px) {
            margin:  10px;;
            
        }

        &:hover{
            transform: scale(1.01);
        }
    }
`

export default NotJust
