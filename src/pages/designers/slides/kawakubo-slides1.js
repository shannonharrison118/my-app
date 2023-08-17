import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../../../imgs/kawakubo/cdg-pattern.png'
import img2 from '../../../imgs/kawakubo/cdg-fabric.png'
import img3 from '../../../imgs/kawakubo/cdg-fw84.jpeg'
import img4 from '../../../imgs/kawakubo/cdg-backstage-ss88.png'
import img5 from '../../../imgs/kawakubo/cdg-hole-1982.png'
import img6 from '../../../imgs/kawakubo/cdg-christy-1986.png'
import img7 from '../../../imgs/kawakubo/cdg-team.png'
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
                        <span>Pattern cutting room in Aoyama Office</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                        <span>Fabric producer, Hiroshi Matasushita, who worked closely with Kawakubo</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img7} alt="img7" />
                        <span>Full CDG team</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                        <span>Look from Fall/Winter 1984 collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img4} alt="img4" />
                        <span>Models backstage at Spring/Summer 1988 collection</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img5} alt="img5" />
                        <span>Catalog photo of infamous hole sweater from 1982</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img6} alt="img6" />
                        <span>Christy Turlington for collection catalog in 1986</span>
                    </div>
                </div>
                {/* <div className="each-slide">
                    <div>
                        <img src={img8} alt="img8" />
                        <span>snippet from interview with Rei Kawakubo</span>
                    </div>
                </div> */}
            </Slide>
        </div>
    )
}

export default Slideshow;