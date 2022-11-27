import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/margiela/portrait.jpg'
import img2 from '../../../imgs/margiela/porcelain.jpg'
import img3 from '../../../imgs/margiela/glove-top.jpg'
import img4 from '../../../imgs/margiela/kid-on-model.jpg'
import img5 from '../../../imgs/margiela/kid-frontrow.jpg'
import img6 from '../../../imgs/margiela/tabi-shoe.jpg'
import img7 from '../../../imgs/margiela/tabi-show.jpg'
import img8 from '../../../imgs/margiela/sock-sweater.jpg'
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
                        <span>Martin Margiela, one of the only few photos of him</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>waistcoat created from broken pieces of porcelain dishes</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>top made entirely of old gloves</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>show from 1998 where the kids had been included since Margiela used their playground as a runway</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>kids from the neighborhood sitting front row</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>infamous Margiela tabi shoe which is adapted from the traditional tabi style of shoe in Japan</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img7} alt="img7" />
                        <span>famous runway where models wore tabi's with paint on the bottom of the soles leaving the iconic "hoof" marks</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img8} alt="img8" />
                        <span>infamous sock sweater that people could create at home using a guide the margiela team created</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;