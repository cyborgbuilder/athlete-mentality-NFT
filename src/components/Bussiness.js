import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
function Bussiness() {


    

    return (
        <Container>
            <Wrap>
                <Header>
                <h1>Business Model</h1>
                </Header>
                
               <Content>
               <Left>
                <div>
                    <img src="/images/0261.png"/>
                </div>
                </Left>
             

                
                <Right>

                    <div>
                   
                    <p>Athlete Mentality was founded by Johnny Nitti out of California, USA. Our founder is an athlete, entrepreneur, and attorney. The goal of Athlete Mentality is to develop the largest community of athletes in the Metaverse and allow these athletes to run the business and reap the benefits of future sponsorship, licensing, and branding deals. This business is not started by large corporation with millions of dollars to spend on Marketing. The success of this business relies on the community members and the decisions of the DAO. By minting or purchasing an Athlete Mentality NFT on the secondary market, you will become a Teammate. Teammates will not only receive full commercial rights to your NFT, you will also participate and influence the strategy and future success of this business. This DAO will revolutionize the sports industry by creating one of the most successful sports brands in the Metaverse. The best part is, the decentralization of the DAO allows everyday individuals to reap the benefits that the large corporations have monopolized in the past. Mint or Purchase your Athlete Mentality NFT today to become a Teammate and influence the future of this Web3.0 Brand. </p>
                    </div>
                    
                </Right>
               </Content>
                
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 140vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    

  
    @media only screen and (max-width: 768px) {
        height: 300vh;
        position: relative;
        margin-top: 0;
    }



`

const Wrap = styled.div`
    width: 90%;
    margin-top: 70px;
    border: 6px solid rgba(9,9,121,1);
    border-radius: 15px;

   

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 95%;
        margin-top: 190px;
    }
`

const Content = styled.div`
    width: 100%;
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const Header = styled.div`


h1{
    
    font-size: 70px;
    color: rgba(9,9,121,1);

    @media only screen and (max-width: 768px) {
        font-size: 50px;
        margin-top: 20px;
    }
}

`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        width: 80%;

        img{
            width: 100%;
            border-radius: 15px;
        }
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 50px;
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
        margin-top: 10px;
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
            color: black;
            line-height: 2.2rem;
            letter-spacing: 1.1px;
            margin-top: 30px;
            font-family: 'Anton', sans-serif;
            font-size: 19px;
            margin-top: 60px;
            

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
export default Bussiness
