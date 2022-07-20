import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1a from '../../img/banner1a.jpg';
import banner1b from '../../img/banner1b.jpg';
import banner1c from '../../img/banner1c.jpg';

class BannerPr extends React.Component{

    render(){
        return(
            <Carousel fade>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" 
                 height="520"
                src={banner1a}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100"
                  height="520"
                src={banner1b}
                alt="Second slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item interval={3000}>
              <img className="d-block w-100"
                  height="520"
                src={banner1c}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         
        );
    }
}
export default BannerPr;