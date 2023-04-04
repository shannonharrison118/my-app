import React from 'react';
import './designers.css';
import Slideshow from '../designers/slides/knowles-slides.js'

const knowles = () => {
    return(
        <div class="page">
            <div class="info">
            <h1>Charlotte Knowles</h1>
            <p>Charlotte Knowles graduated from Central Saint Martins in 2017 having previously interned for brands like 
                Alexander McQueen, Acne Studios, Helmut Lang, and Gareth Pugh. She established her namesake brand with 
                partner Alexandre Arsenault and has been renamed to just KNWLS. Since the inception of the brand, Knowles 
                has focused designs around the central ideas of “What is femininity?” and revolving around ideas of femininity 
                and privacy and intimacy and how these can translate to wearable pieces for outside. Knowles had her first 
                runway show at London Fashion Week in the Fall/Winter 2018 season, only about a year after she graduated and 
                started up her brand. 
            </p>
            <p>They have focused on expanding their production style by making denim pieces all done with hand-wash, making 
                bags with the same producers of Dior, and making unique sunglasses and eyewear pieces with brand TDKent 
                Eyewear. They also include hand details such as braiding details as was popular in the 2000’s on band t-shirts 
                and including various hand crafted details across their collections. 
            </p>
            <p>Their pieces are designed to be fully functional and almost act as an armor while still being sensual and empowering 
                for the wearer. Culminating a cult-following from musicians like Grimes to models like Bella Hadid and various other 
                well known people, KNWLS has built up an online presence and gained popularity largely from Instagram. The brand has 
                since been picked up by large retailers such as SSENSE, Dover Street Market, and others which has greatly helped in 
                the brands success thus far. 
            </p>
            </div>

            <div class="slidess">
                <Slideshow />
            </div>
        </div>
    )
}

export default knowles;