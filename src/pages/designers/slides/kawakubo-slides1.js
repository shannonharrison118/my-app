import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/kawakubo/rei-portrait.jpg'
import img2 from '../../../imgs/kawakubo/lumps-and-bumps.png'
import img3 from '../../../imgs/kawakubo/watanabe-tao-kawakubo.jpeg'
import img4 from '../../../imgs/kawakubo/2d-doll.jpg'
import img5 from '../../../imgs/kawakubo/2016-avant-garde.jpeg'
import img6 from '../../../imgs/kawakubo/hole-sweater.jpg'
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
                        <span>infamous lumps and bumps collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>left to right: Junya Watanabe, Tao Kurihara, Rei Kawakubo</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>paper doll collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>avant-garde look</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>special hole sweater that used a unique knitting style to create the holes</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;