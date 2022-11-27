import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/fanning/portrait.jpg'
import img2 from '../../../imgs/fanning/asics.jpg'
import img3 from '../../../imgs/fanning/vest.jpg'
import img4 from '../../../imgs/fanning/color.jpg'
import img5 from '../../../imgs/fanning/knit.jpg'
import img6 from '../../../imgs/fanning/pattern.jpg'
import img7 from '../../../imgs/fanning/tailoring.jpg'
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
                        <span>Laura and Deanna Fanning portrait</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>long-time collaboration with Asics</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>vest that highlights their adventerous shapes and materials</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>strong use of color and color-blocking</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>specialty knitwear that features the same bold color choices</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>mixing patterns is a design code in their work</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img7} alt="img7" />
                        <span>strong tailoring details in every piece they create</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;