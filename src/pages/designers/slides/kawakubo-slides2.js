import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/kawakubo/rei-portrait.jpg'
import img2 from '../../../imgs/kawakubo/first-tokyo.jpg'
import img3 from '../../../imgs/kawakubo/rei-yohji.jpeg'
import img4 from '../../../imgs/kawakubo/first-paris.png'
import './horizontal.css';

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                        <span>Rei Kawakubo</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>first boutique in Tokyo, opened in 1975</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>Rei Kawakubo and Yohji Yamamoto</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>first boutique in Paris, opened in 1982</span>
                    </div>
                </div>
                
            </Slide>
        </div>
    )
}

export default Slideshow;