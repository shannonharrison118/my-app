import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/theyskens/patchwork-process.jpg'
import img2 from '../../../imgs/theyskens/madonna.jpeg'
import img3 from '../../../imgs/theyskens/first-collection.jpg'
import img4 from '../../../imgs/theyskens/first-collection2.jpg'
import img5 from '../../../imgs/theyskens/first-collection3.jpg'
import img6 from '../../../imgs/theyskens/hair-dress.jpg'
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
                        <span>Theyskens' creating his custom patchwork dresses that have become a design staple in his current brand</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>Madonna famously wearing Theyskens' design that helped his career take off</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>look from his first collection featuring leather and suiting that are design staples for him</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>look from his first collection that highlights the gothic but gorgeous aesthetic his designs take</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>up close detail of a look from his first collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>famous dress from his early work meant to look like hair draped along her whole body</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;