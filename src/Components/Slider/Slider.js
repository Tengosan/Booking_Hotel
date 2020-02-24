import React from 'react';
import { Slide } from 'react-slideshow-image';

import img1 from '../App/assets/img/image1.png'
import img2 from '../App/assets/img/image2.png'
import img3 from '../App/assets/img/image3.png'

const properties ={
    duration:60000,
    transitionDuration:500,
    infinite: true,
    indicators: true,
    arrows: true
  }
  
  const Slideshow = () =>{
      return(
        <div className="containerSlide">
          <Slide {...properties}>
            <div className="each-slide">
              <div>
                <img src={img1} alt="img"/>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img src={img2} alt="img2"/>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img src={img3} alt="img3"/>
              </div>
            </div>
          </Slide>
        </div>
      )
  }

  export default Slideshow;