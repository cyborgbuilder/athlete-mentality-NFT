import React,{Component} from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './ImageSlider.css'

export default class PauseOnHover extends Component {
 
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
           
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 2,
           
          }
        }
      ]

    };
    
    return (

      <Container> 
        <Wrapper>
        <Slider {...settings}>
            <Wrap>
            <img src="/images/i1.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/i2.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/0275.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/0314.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/0929.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/1008.png"  />
            </Wrap>
            <Wrap>
            <img src="/images/8734.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/055117.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/055116.png"  />
            </Wrap>
            
            <Wrap>
            <img src="/images/055115.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/055114.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/055113.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/055112.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/055111.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/055110.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05519.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05518.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05517.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05516.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05515.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05514.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05513.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05512.png"  />
            </Wrap>

            <Wrap>
            <img src="/images/05511.png"  />
            </Wrap>
        </Slider>
        </Wrapper>
      </Container>
    );
  }
}

const Container=styled.div`
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 41%, rgba(42,97,108,1) 100%);;
// padding-right:100px;
// padding-left:100px;
padding-top: 300px;
padding-bottom: 300px;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 768px) {
    height: 15vh;
    padding-top: 100px;
  }


ul li button {
  &:before{
      font-size:8px;
      color:white;

  }
}
ul li.slick-active button:before{
  color:white;
}



`
const Wrapper = styled.div`
 width: 90%;
 


 @media only screen and (max-width: 768px) {
  margin-top: 160px;
}
`

const Wrap=styled.div`
 cursor:pointer;
 align-content:center;
 justify-content:center;

    

    img {
        border:4px solid transparent;
        border-radius:3px;
        width:100%;
        height:100%;
        
        object-fit:cover;
        display:flex;
      }

    }

    Slider{
        margin-top: 100px;
      
    }
 `
