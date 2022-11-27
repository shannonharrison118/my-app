import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/tai/peng-tai.jpg'
import img2 from '../../../imgs/tai/fire.jpg'
import img3 from '../../../imgs/tai/wood.jpg'
import img4 from '../../../imgs/tai/water.jpg'
import img5 from '../../../imgs/tai/metal.jpg'
import img6 from '../../../imgs/tai/earth.jpg'
import img7 from '../../../imgs/tai/editorial.jpg'
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
                        <span>Peng Tai portrait</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>dual look from fire collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>look from wood collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>look from water collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>look from metal collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>look from earth collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img7} alt="img7" />
                        <span>editorial photo</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;