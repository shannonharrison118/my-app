import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/kawakubo/rei-portrait.jpg'
import img2 from '../../../imgs/kawakubo/lumps-and-bumps.png'
import img3 from '../../../imgs/kawakubo/watanabe-tao-kawakubo.jpeg'
import img4 from '../../../imgs/kawakubo/2d-doll.jpg'
import img5 from '../../../imgs/kawakubo/2016-avant-garde.jpeg'
import img6 from '../../../imgs/kawakubo/hole-sweater.jpg'
import './slides.css'


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
                        <span>some desgins from infamous 'Lumps and Bumps' line from Comme des Garcons challenging the notion of the female form</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>left to right: designs from Junya Watanabe, Tao Kurihara, and Rei Kawakubo</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>famous collection designed to look like a 2d paper doll, commentating on the "flat" nature of fashion</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>avant garde design that is constant in Kawakubo's work</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>infamous 'hole sweater' as Kawakubo created a new style and technique of knitwear with holes in pieces</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;