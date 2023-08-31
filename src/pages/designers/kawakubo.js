import React from 'react';
import './kawakubo.css';
import Slideshow1 from './slides/kawakubo-slides1';
import Slideshow2 from './slides/kawakubo-slides2';
import Slideshow3 from './slides/kawakubo-slides3';
import Slideshow4 from './slides/kawakubo-slides4';
import { Link } from 'react-router-dom';
import bookshelf from '../bookshelves/kawakubo-bookshelf';

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
                    the ‘history of aesthetics’ learning about both Eastern and Western works. 
                    At the start of her time in university, Japan was still occupied by the US Army with the economy and political system 
                    in a distressed state. By the time of her graduation though, Japan had emerged from the ranks of the developing world. 
                    The country’s exit of the second World War period though meant that energies were focused on reconstruction and modernization 
                    of its heavy industries. Meaning, specifically the garment industry, could only operate on the utmost basic level, even saying 
                    the “one-dollar-blouse” came from this period of Japanese garment production. Kawakubo has said her home life did not seem much 
                    affected by the post-war period. 
                </p>
                <p>However, Japanese creatives, including Kawkaubo along with other artists, played a crucial role in establishing the country’s international 
                    reputation, comparable to the impact of Japanese engineers, industrialists, and bankers. The Western world still perceived Japan as a country 
                    that produced diligent people that were content to follow behind others innovations. The growing creative scene in Japan helped shape this as 
                    many notable fashion designers, like Issey Miyake, Kenzo Takada, and later Rei Kawakubo, began to expand their brands to Western audiences and 
                    gain more international recognition.
                </p>
                <p>After graduation, Kawakubo worked in advertising for a textile company called Asahi Kasei, starting in 1964. Working at Asahi exposed her to people 
                    who worked within fashion and, having a male boss who actually believed in allowing women to make a full contribution, she met photographers and 
                    learned more about the advertising world. Atsuko Kozasu, who later worked as a fashion journalist and editor for Marie Claire Japon and within 
                    Comme des Garcons, worked at Asahi at the same time as Kawakubo. Kozasu provided a lot of advice and guidance to Kawakubo early in her career and was the 
                    one who pushed Kawakubo to pursue freelance styling in 1967. During her work as a stylist, Kawakubo often felt pre-existing clothes didn’t convey the proper 
                    mood or appear right in the way she intended. This then pushed Kawakubo to begin making her own clothes within her styling shoots. After two years of styling, 
                    Kawakubo began making her own clothes under the label Comme Des Garcons, meaning “like the boys” in French, and incorporated the brand name in 1973. Kawakubo 
                    opened her first Tokyo boutique in 1975 and also added a menswear line “Comme des Garcons Homme” in 1978. 
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
                <p>At the start of a collection, Kawakubo usually starts with abstract drawings and relies on her senior pattern cutters to help her 
                    interpret the drawing and work towards a physical rendition. Many companies have designers produce specific and detailed drawings of looks and pattern 
                    makers work off standard forms and interpret them each season. Kawakubo shares that there are no standard patterns at Comme des Garcons for pattern cutters to work from. 
                    “They are expected to innovate,” says Kawakubo. The senior pattern-cutters each have their own distinct design style which influences who Kawakubo asks to work on specific 
                    garments or interpret different drawings. Examples of these abstract drawings handed off to pattern-cutters have included a crumpled piece of paper and even just 
                    spoken to “imitate the moment of flipping a pillow case inside out” while not relying on a pillow case shape or anything specific.
                </p>
                <p>Kawakubo and the pattern cutters work to decipher the mood and shape that Kawakubo is looking for with no clear intent in the beginning. “It certainly is a process that both the 
                    cutters and Kawakubo value for its spontaneity and the possibilities it provides for creative interaction.”
                </p>
                <p>The fabric choices also play a significant role in the creative process and how the final garments convey their specific ideas. Kawakubo has long worked with Hiroshi Matsushita, 
                    a fabric designer at Orimono Kenkyu Sha Fabric Company, to create many of the innovative fabrics used in Kawakubo’s collections since the 80’s. For example, Matsushita developed 
                    a rayon with criss-cross elastic to create the illusion of melting for the <i>‘bubble and boil’</i> collection. The fabric development is just as important to the Comme des Garcons’ 
                    garments as the construction as every element is made in vain of the emotions of each collection. The same way garments are created from scratch each season, the fabric development 
                    always starts from a fresh place without influence of the previous collections.
                </p>
                
                <div class="team">
                    <h3>Full CDG Team</h3>
                    <p>top row, left to right:
                        <p>designer rei kawakubo, deputy-chief pattern cutter makiko hatakeyama, knitwear deigners rikuko ikeuchi, pattern cutter hirofumi ikenami, production manager shigeru
                            tsuchida, production mikito nishimura, production chief hiroyuki sato, pattern cutter ashiko yana, deputy knitwear/accessories keiichi tanikoshi, model amy nemec.</p></p>
                    <p>middle row, left to right:
                        <p>pattern cutter tamima akiyama, pattern director yoneko kikuchi, managing director tsubomi tanaka, production yuichi omaru, pattern cutter chizu hirose,
                            head pattern cutter keiko yamazaki, chief pattern cutter masako masaki, production taichi yoshida.</p></p>
                    <p>bottom row, left to right:
                        <p>pattern cutters yasuko masubuchi, yusuke monden, tetsuya hashimoto, shiro miyao, yusuke horihata, knitwear miwako netsuka, knitwear/accessories yuzo takenaka,
                            pattern cutter emi akutsu</p>
                    </p>
                </div>
            </div>
            <div class="slidess">
                <Slideshow1 />
            </div>
            <div class="writing">
                <h2>Growing Comme des Garcons </h2>
                <p>The development of the brand throughout the 70s, since its start in 1973, had garnered a devoted fan base who went on camping trips with the brand and even collected together 
                    at a restaurant dedicated to Comme des Garcons fans. Early designs resembled Japanese fishermen and working-class clothing, one example from Kawakubo being a denim apron skirt 
                    that was made in multiple iterations. By 1980, 150 shops across Japan were all built upon the down-to-earth, practical design philosophy.
                </p>
                <p> In the 1980s, Rei Kawakubo’s sensibilities regarding dress shifted into more of the avant-garde expressions we see today, though not immediately. A year after her Paris debut, 
                    she debuted the infamous collection <i>Destroy</i>, where models stomped down the catwalk to a drum beat in war paint and ragged uniforms. In this collection, the infamous hole 
                    sweater was shown. Amongst the mockery of a sweater made with holes, she referred to it as “Comme des Garcons lace”, possibly with irony but definitely a nod to her resentment 
                    for convention. 
                </p>
                <p> The innovation of each collection since the 80s has helped to cement Kawakubo as a force within the fashion industry and sustain her presence in the Paris Fashion Week schedule. 
                    She once described her work as similar to Zen koans, unsolvable puzzles set by Buddhist teachers which, by being unsolvable, teach you the limits of your intellect and so set 
                    your mind free. The references of each collection are often elusive and the only hint from the Comme des Garcons team regarding the theme of a collection is the title. 
                </p>
                <p>Alongside the growing exposure of the Comme des Garcons label, Kawakubo has fostered the creativity and professional development of many now prominent names within fashion. 
                   The first protege of Kawakubo was Junya Watanabe in 1992, who first worked as a pattern maker for Comme des Garcons and was given his own label to design and show under. 
                   Some other designers to earn their own labels to work under include Kei Ninomiya of Noir by Kei Ninomiya, Tao Kurihara of Tao, and Chitose Abe of Sacai, to name a few. 
                   All of these designers began working at the Comme des Garcons label and were then recognized as having their own distinct design views, which positions Comme des Garcons as a 
                   foster of creative talent and incredible technique. The varying design aesthetics of each designer has also brought in a broader audience, thus growing the Comme des Garcons 
                   fanbase stronger regardless of the current critic opinions.
                </p>
                <p>Rei Kawakubo’s husband, Adrian Joffe, also plays a significant role in the success of Comme des Garcons. He joined the company as a commercial director before marrying Kawakubo 
                    and eventually was named President of the Comme des Garcons company working out of the International office in Paris. Many of the commercial successes, such as Comme des Garcons 
                    PLAY and Dover Street Market, are attributed to his business expertise. It's said Joffe handles all business and market-related responsibilities to allow Kawakubo to run the 
                    Japan headquarters and manage all creative aspects of the brand. Since creativity is arguably the most defining pillar of the CDG label, the division of power between Kawakubo 
                    and Joffe allows them to do what many fashion brands are unable to accomplish: profit while not compromising creativity. 
                </p>
                <p>Dover Street Market is also incredibly strategic to the success of Comme des Garcons. DSM provides an art-gallery-inspired shopping experience for all CDG brands and stocks many 
                    relevant brands and independent designers. To be stocked in DSM is for Rei Kawakubo to believe in your vision as a brand. Each brand is given a small section of the store where 
                    they are allowed creative freedom to decorate and present their clothes however they please. This marketplace approach to creating a department store allows followers of all 
                    different subcultures to shop in one place and discover other new designers creating great work. DSM first opened in London on Dover Street, typically housing office buildings, 
                    in 2004 and has since opened stores across the globe in NYC, LA, Ginza, Beijing, Singapore, and Paris. <br></br>
                <small>*Paris is opening a full-fledged DSM store in 2024 as previously, Paris only had a ‘parfums market’ and then ‘little market’</small>
                </p>
                
            </div>
            <div class="slidess">
                <Slideshow3 />
            </div>
            <div class="writing">
                <h2>Famous Works</h2>
                <p>Below are some of the most infamous looks and images from the Comme des Garcons universe. </p>
            </div>
            <div class="slidess">
                <Slideshow4 />
            </div>
            <div class="writing">
                <div id="bs-kawa">
                    <Link to="/kawakubo/bookshelf" component={bookshelf}><h4>Rei Kawakubo Bookshelf</h4></Link>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default kawakubo;