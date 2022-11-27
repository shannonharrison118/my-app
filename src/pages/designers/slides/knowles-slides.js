import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/knowles/first-collection.jpg'
import img2 from '../../../imgs/knowles/early-work.jpeg'
import img3 from '../../../imgs/knowles/beyonce.jpg'
import img4 from '../../../imgs/knowles/denim.jpg'
import img5 from '../../../imgs/knowles/hat-and-bag.jpg'
import img6 from '../../../imgs/knowles/ss19-backstage.jpg'
import img7 from '../../../imgs/knowles/knowles-portrait.jpg'
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
                        <span>look from first collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>other early work done after graduation</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>Beyonce wearing Charlotte Knowles full outfit</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>first use of denim wear they utilized a hand wash method to create the gradient</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>iconic 'Pussy Hat' and 'Striker Bag' that have become staples of the brand</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>backstage photo from ss19 collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img7} alt="img7" />
                        <span>portrait of Charlotte Knowles with partner Alexandre Arsenault</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;