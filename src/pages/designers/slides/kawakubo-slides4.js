import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/kawakubo/cdg-fw82.jpg'
import img2 from '../../../imgs/kawakubo/cdg-fw84.jpeg'
import img3 from '../../../imgs/kawakubo/cdg-fw92.jpg'
import img4 from '../../../imgs/kawakubo/cdg-fw94.jpg'
import img5 from '../../../imgs/kawakubo/cdg-ss97.jpg'
import img6 from '../../../imgs/kawakubo/cdg-ss97-2.png'
import img7 from '../../../imgs/kawakubo/cdg-fw02.jpg'
import img8 from '../../../imgs/kawakubo/cdg-ss03.jpg'
import img9 from '../../../imgs/kawakubo/cdg-fw05.jpg'
import img10 from '../../../imgs/kawakubo/cdg-ss12.jpg'
import img11 from '../../../imgs/kawakubo/cdg-ss15.jpg'
import img12 from '../../../imgs/kawakubo/cdg-fw15.jpeg'
import img13 from '../../../imgs/kawakubo/cdg-fw16.jpg'
import img14 from '../../../imgs/kawakubo/cdg-ss18.jpg'
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
                        <span>Fall/Winter 1982</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>Fall/Winter 1984</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>Fall/Winter 1992</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>Fall/Winter 1994</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>Spring/Summer 1997</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>Spring/Summer 1997</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img7} alt="img7" />
                        <span>Fall/Winter 2002</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img8} alt="img8" />
                        <span>Spring/Summer 2003</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img9} alt="img9" />
                        <span>Fall/Winter 2005</span>
                    </div>
                </div>
                
                <div className="each-slide">
                    <div>
                        <img src={img10} alt="img10" />
                        <span>Spring/Summer 2012</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img11} alt="img11" />
                        <span>Spring/Summer 2015</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img12} alt="img12" />
                        <span>Fall/Winter 2015</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img13} alt="img13" />
                        <span>Fall/Winter 2016</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img14} alt="img14" />
                        <span>Spring/Summer 2018</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;