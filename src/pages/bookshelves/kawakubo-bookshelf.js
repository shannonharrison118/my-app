import React from 'react';
import './bookshelf.css';
import { Link } from 'react-router-dom';

const kawaBookshelf = () => {
    return(
        <div class="shelf">
            <div class="row">
                <div class="col-1">
                    <a href="https://www.newyorker.com/magazine/2005/07/04/the-misfit" target="_blank" rel="noreferrer">
                        <h3><i>The Misfit</i></h3>
                        <p>Profile on Rei Kawakubo written by Judith Thurman in 2005 for print in The New Yorker. Considered one of the most detailed profiles
                            on Ms. Kawakubo that goes into detail on the history of Comme des Garcons, select quotes from an interview with Ms. Kawakubo,
                            insight from Adrian Joffe, Kawakubo's husband and president of CDG, and Rei Kawakubo's rise within the fashion industry. 
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://www.archivepdf.net/rei-kawakubo-and-comme-des-garcons-1990" target="_blank" rel="noreferrer">
                        <h3><i>Rei Kawakubo and Comme des Garcons</i></h3>
                        <p>Interview and article from 1990 that sheds insight to her designs, studio, furniture, and store interiors.
                            Also contains several pages of behind-the-scenes content and pictures from during the time Kawakubo was
                            inviting celebrities to her runway.
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.archivepdf.net/comme-des-garcons-universe-of-fashion-1998" target="_blank" rel="noreferrer">
                        <h3><i>Comme des Garcons: Universe of Fashion</i></h3>
                        <p>Includes a short article about Rei Kawakubo and further includes many photographs and ads used throughout
                            the years. Rei Kawakubo talks about her interest in photography and the use of color in how it influences
                            the imagery she surrounds her brand with. Many images were used within Direct Ads and some used within her
                            Six Magazine through its print.
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    <a href="https://www.archivepdf.net/comme-des-garcons" target="_blank" rel="noreferrer">
                        <h3><i>Comme des Garcons on ArchivePDF</i></h3>
                        <p>This page includes the two articles above but further includes scans of some of the Six magazines done by Rei Kawakubo
                            and further scans of various magazines and writings done by or about Rei Kawakubo and the Comme des Garcons brand.
                        </p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <a href="https://032c.com/magazine/role-model-john-waters-rei-kawakubo" target="_blank" rel="noreferrer">
                        <h3><i>Role Model: John Waters on Rei Kawakubo</i></h3>
                        <p>Personal essay written by American avant-garde filmmaker John Waters, best known for his film <i>Pink Flamingos</i>,
                            where he discusses his relationship to Comme des Garcons, Rei Kawakubo, and the importance of her fashions. He talks about
                            his first introduction to the brand, his experience modelling for the brand, and visiting the stores.
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://032c.com/magazine/to-love-alone" target="_blank" rel="noreferrer">
                        <h3><i>To Love Alone</i></h3>
                        <p>Here is a short letter written by American author and theater critic Hilton Als, recipient of the Pulitzer Prize for Criticism,
                            where he speaks about love, loss, and Comme des Garcons.
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://032c.com/magazine/abc-of-cdg" target="_blank" rel="noreferrer">
                        <h3><i>ABC of CDG, from 032c</i></h3>
                        <p>Writings and snippets relating to each letter in the alphabet as it relates to Comme des Garcons. Includes parts of Interviews,
                            fun facts, pictures, and quotes from Ms. Kawakubo directly to give more insight into various aspects of the brand and Rei Kawakubo.
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    <a href="https://i-d.vice.com/en/article/zmnx53/i-con-rei-kawakubo" target="_blank" rel="noreferrer">
                        <h3><i>i-Con: Rei Kawakubo</i></h3>
                        <p>Quotes from Rei Kawakubo originating from previous i-D issues. 
                        </p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <a href="https://observer.com/2016/03/elle-on-earth/" target="_blank" rel="noreferrer">
                        <h3><i>Elle on Earth</i></h3>
                        <p>Op-Ed about one writer's interview experience with Rei Kawakubo and Adrian Joffe, quoted 'The Best Interview [Kawakubo] ever gave' by 
                            Joffe, and how the interview became extremely watered down to include no new information by Joffe and Elle Magazine. 
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://www.elle.com/fashion/a33802/rei-kawakubo-interview/" target="_blank" rel="noreferrer">
                        <h3><i>Rei Kawakubo Never Meant to Start a Revolution</i></h3>
                        <p>The previous article in question. 
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.anothermag.com/fashion-beauty/8126/a-portrait-of-rei-kawakubo-by-those-who-know-her-best?utm_source=fb&utm_medium=social+&utm_campaign=dazed" target="_blank" rel="noreferrer">
                        <h3><i>A Portrait of Rei Kawakubo by Those Who Know Her Best</i></h3>
                        <p>Quotes and snippets about Rei Kawakubo from various designers and pop culture icons who have worked closely with Rei or followed her work
                            for a long time. 
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    <a href="https://i-d.vice.com/en/article/zmnx53/i-con-rei-kawakubo" target="_blank" rel="noreferrer">
                        <h3><i>i-Con: Rei Kawakubo</i></h3>
                        <p>Quotes from Rei Kawakubo originating from previous i-D issues. 
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default kawaBookshelf;