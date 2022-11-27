import './designers.css';
import React from 'react';
import Slideshow from '../designers/slides/tai-slides.js'

const tai = () => {
    return(
        <div class="page">
            <div class="info">
            <h1>Peng Tai</h1>
            <p>Peng Tai grew up in Taiwan and graduated from the London College of Fashion in 2017 with a master’s 
                degree in menswear. He then moved to Paris with wife Isa Kwai who serves as his muse and atelier manager. 
                Tai draws the romantic energy of his home Paris and blends it with traditional Chinese design and construction. 
                Tai draws on the principle of the five elements in Chinese culture - earth, wood, fire metal, and water - 
                and the belief that balance comes from all elements being in harmony to drive his collections. Tai says 
                “We put this idea into the process of making our garments. For example, metal is for sewing, water is for washing, 
                fire is for dyeing. If we balance each stage during the process, we can make a garment better”. Tai also says 
                they use a traditional Chinese herbal medicine as a dye for the garments saying it's similar to balancing the 
                energy in the body to return to a state of well-being naturally. 
            </p>
            <p>Starting in 2019, Tai developed five different collections over a three year period, each surrounding one element 
                both in design and development. In his water collection, his team developed a new process of embroidery that involved 
                weaving with the water. Due to the handicraft embedded into the design process, no two pieces are exactly the same 
                making them each unique and very personal.
            </p>
            <p>Tai’s website reads “Our vision of beauty represents an androgynous personality with both wildness and restraint, 
                where Yin and Yang evolve to reach a balance and produce a variety of possibilities. Peng Tai is determined to 
                spread Chinese culture and aesthetics in a more modern and avant-garde way in the global context”. 
            </p>
            </div>

            <Slideshow />
        </div>
    )
}

export default tai;