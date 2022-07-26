import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1a from '../../img/banner1a.jpg';
import banner1b from '../../img/banner1b.jpg';
import banner1c from '../../img/banner1c.jpg';

class BannerPr extends React.Component{

    render(){
        return(
            <Carousel fade id="inicio">
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" 
                 height="520"
                src={banner1a}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>JUNTOS, SOMOS MAIS FORTES!</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100"
                  height="520"
                src={banner1b}
                alt="Second slide"
              />
          
              <Carousel.Caption>
                <h3>EMBARQUE NESSA MISSÃO!</h3>
                <p>Seja um voluntário</p>
              </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={3000}>
              <img className="d-block w-100"
                  height="520"
                src={banner1c}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>FAÇA A DIFERENÇA, DOE.</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         
        );
    }
}
export default BannerPr;