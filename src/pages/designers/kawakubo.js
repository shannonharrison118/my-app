import React from 'react';
import './kawakubo.css';
import Slideshow1 from './slides/kawakubo-slides1';
import Slideshow2 from './slides/kawakubo-slides2'
import { Link } from 'react-router-dom';

const kawakubo = () => {
    return(
        <div class="page">
            <div class="writing">
                <h1>Rei Kawakubo</h1>
                <br></br>
                <p>Rei Kawakubo is a Japanese fashion designer who founded the Comme Des Garcons label and Dover Street Market.</p>
                <h2>Biography</h2>
                <p>Kawakubo grew up in Tokyo and was the oldest daughter, and only girl, of three kids in her family. 
                    Her father was an administrator at Keio University, a prestigious institution that championed Western culture and 
                    women’s rights. Kawakubo later went on to attend Keio University studying Fine Arts and Literature, which she called 
                    the ‘history of aesthetics’ learning about both Eastern and Western works. After graduation, Kawakubo worked in 
                    advertising for a textile company, starting in 1964, and then transitioned to a freelance stylist in 1967. 
                    After two years of styling, she began making her own clothes under the label Comme Des Garcons, meaning “like the boys” 
                    in French, and incorporated the brand name in 1973. Kawakubo opened her first Tokyo boutique in 1975 and also added a 
                    menswear line “Comme des Garcons Homme” in 1978. 
                </p>
                <p>In 1981, Kawakubo presented her first collection at Paris fashion Week and opened her first boutique in Paris in 1982. 
                    Kawakubo is noted to be one of the main forces in bringing Japanese fashion to the West, alongside <Link to="/yamamoto">Yohji Yamamoto</Link>, 
                    who also showed in Paris Fashion Week that year. 
                </p>
            </div>
            <div class="slidess">
                <Slideshow2 />
            </div>
            <div class="writing">
                <h2>Early Work and Design Process</h2>
                <p>Being from a non-technical background, Kawakubo’s design process also follows an unconventional flow that she is revered for.
                    In an email when asked about her process, she said
                </p>
                <p class="email">My design process never starts or finishes. I am always hoping to find something through the mere act of living my daily life.
                    I do not work from a desk, and do not have an exact starting point for any collection. There is never a mood board, I do not go through fabric swatches,
                    I do not sketch, there is no eureka moment, there is no end to the search for something new. As I live my normal life,
                    I hope to find something that click starts a thought, and then something totally unrelated would arise, and then maybe a third unconnected element would come from nowhere.
                    Often in each collection, there are three or so seeds of things that come together accidentally to form what appears to everyone else as a final product, but for me it is never ending.
                    There is never a moment when I think, ‘this is working, this is clear.’ If for one second I think something is finished, the next thing would be impossible to do.
                </p>
            </div>
            <div class="slidess">
                <Slideshow1 />
            </div>
        </div>
    );
};

export default kawakubo;