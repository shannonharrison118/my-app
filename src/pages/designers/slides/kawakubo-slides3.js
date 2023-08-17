import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/kawakubo/cdg-70-top.jpg'
import img2 from '../../../imgs/kawakubo/cdg-70-skirt.jpg'
import img3 from '../../../imgs/kawakubo/cdg-1975.jpg'
import img4 from '../../../imgs/kawakubo/cdg-hm-line.jpg'
import img5 from '../../../imgs/kawakubo/cdg-empress-pearl.jpg'
import img6 from '../../../imgs/kawakubo/watanabe-tao-kawakubo.jpeg'

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
                        <span>top made by CDG in the 70's</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>skirt made by CDG in the 70's</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>outfit from CDG from 1975</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>work from Junya Watanabe, Tao Kurihara, and Rei Kawakubo</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>people lined up for CDGxH&M collab</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>Japanese Empress Michiko wearing CDG pearls</span>
                    </div>
                </div>
                
            </Slide>
        </div>
    )
}

export default Slideshow;