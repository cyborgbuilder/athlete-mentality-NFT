import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
function Detail() {


    

    return (
        <Container>
            <Wrap>
                
                <Left>
                <Player>
                <ReactPlayer  url='/images/podda.mp4' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' height='100%' />
                </Player>
                </Left>
             

                
                <Right>

                    <div>
                    <h1>Story Of Athlete Mentality</h1>
                    <p>Athlete Mentality is a community driven collection of 10k randomly generated NFTs on the Ethereum blockchain. Our mission is to define the modern athlete culture in the Metaverse by building the largest athlete community in the world. When you mint or purchase your Athlete Mentality NFT, you will be provided with unmatched IRL and Virtual Utility, including: Team Events, Weekly Athlete Shoutouts, Formation and Participation of the DAO, Exclusive Merch, Play to Earn Game, Evolving NFTS, and much more! Check out our detailed season one roadmap and see how when you mint or purchase, you are not just collecting an NFT, you are participating in the formation of a real business whose goal is to reward all Teammates IRL and in the Metaverse.  </p>
                    </div>
                    
                </Right>
                
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        height: 215vh;
        position: relative;
    }



`
const Player = styled.div`
    width: 100%;
    height: 500px;
    

    @media only screen and (max-width: 768px) {
        height: 300px;
        width: 50%;
        position: absolute;
        left: -130px;
        top: 40px;
    }

`
const Wrap = styled.div`
    width: 90%;
    display: flex;
    

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 0;
        width: 95%;
    }
`

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    

`

const Right = styled.div`
    width: 50%;
    text-align: left;
    display: flex;
    justify-content: center;
    

    @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin-top: 300px;
    }

    div{
        width: 100%;


        h1{
            color: black;
            font-size: 60px;
            letter-spacing: 1.05px;
            font-family: 'Anton', sans-serif;
            border-radius: 5px;
            
            @media only screen and (max-width: 768px) {
                font-size: 24px;
                margin-top: 30px;
            }
        }

        p{
            color: #7a7a7a;
            line-height: 2.2rem;
            letter-spacing: 1.1px;
            margin-top: 30px;
            font-family: 'Anton', sans-serif;
            font-size: 19px;

            @media only screen and (max-width: 768px) {
                font-size: 15px;
            }
        }

        button{
            width: 98%;
            font-size: 46px;
            border-radius: 5px;
            outline: none;
            border: none;
            background-color:  #00A2FF;
            color: white;
            margin-top: 10px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            font-family: 'Anton', sans-serif;
            letter-spacing: 1.8px;
            @media only screen and (max-width: 768px) {
                width: 100%;
            }
            &:hover{
                transform: scale(1.02);
                color: white;
            }

        }
    }
`
export default Detail

