import React from 'react';
import './bookshelf.css';
import { Link } from 'react-router-dom';
import kawakubo from '../designers/kawakubo.js';

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
                    <a href="https://www.dazeddigital.com/fashion/article/18727/1/rei-kawakubo-paul-smith-1995-interview-cindy-sherman-met-ball" target="_blank" rel="noreferrer">
                        <h3><i>First Lady of Fashion</i></h3>
                        <p>Interview between Rei Kawakubo and Paul Smith for Dazed Magazine in 1995, republished online in 2017 for the Met Gala in Rei Kawakubo's name. 
                            Originally written in 1995.
                        </p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <a href="https://www.dazeddigital.com/fashion/article/35747/1/michele-lamy-comme-des-garcons-archive" target="_blank" rel="noreferrer">
                        <h3><i>Inside Michele Lamy’s Comme archive</i></h3>
                        <p>Before the opening of the Met Museum's exhibit on Rei Kawakubo and Comme des Garcons, Michelle Lamy talked about her personal CDG archive 
                            with Dazed magazine. Michelle Lamy was a key figure of the underground creative scene in LA during the 90's and is the now wife of 
                            designer Rick Owens and is cofounder of OwensCorp, their managing firm for the brand. 
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://www.businessoffashion.com/articles/news-analysis/the-children-of-comme/" target="_blank" rel="noreferrer">
                        <h3><i>The Children of Comme</i></h3>
                        <p>Article from 2015 about the designers who earned their own namesake labels within the Comme des Garcons franchise or notable desgners who
                            left the Comme des Garcons brand to begin their own labels. 
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.stylezeitgeist.com/forums/showthread.php?2539-The-Comme-des-Gar%E7ons-quot-Universe-quot&p=262048&viewfull=1#post262048" target="_blank" rel="noreferrer">
                        <h3><i>Fight Club pt. 1</i></h3>
                        <p>Article by Sarah Mower for Vogue in September of 2006 about the Comme des Garcons brand and Rei Kawakubo. 
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    <a href="https://www.stylezeitgeist.com/forums/showthread.php?2539-The-Comme-des-Gar%E7ons-quot-Universe-quot&p=262049&viewfull=1#post262049" target="_blank" rel="noreferrer">
                        <h3><i>Fight Club pt. 2</i></h3>
                        <p>Article by Sarah Mower for Vogue in September of 2006 about the Comme des Garcons brand and Rei Kawakubo. 
                        </p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <a href="https://fuckyeahcommedesgarcons.tumblr.com" target="_blank" rel="noreferrer">
                        <h3><i>Tumblr Blog dedicated to Comme des Garcons</i></h3>
                        <p>fuckyeahcommedesgarcons
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://www.anothermag.com/fashion-beauty/8465/your-first-look-at-the-new-dover-street-market-london" target="_blank" rel="noreferrer">
                        <h3><i>Your First Look at the New Dover Street Market London</i></h3>
                        <p>Article from AnotherMag when the first Dover Street Market in London was set to open in 2004. 
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://i-d.vice.com/en/article/kz85pw/rewind-to-the-moment-dover-street-market-landed-in-london-and-rewrote-the-rules-of-retail" target="_blank" rel="noreferrer">
                        <h3><i>rewind to the moment dover street market landed in london and rewrote the rules of retail</i></h3>
                        <p>Photos from i-D Magazine during the opening of Dover Streem Market London in 2004. 
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    <a href="https://archivings.net/tagged/comme%20des%20garcons" target="_blank" rel="noreferrer">
                        <h3><i>Archivings.net CDG</i></h3>
                        <p>Website featuring scans from magazines and other sources that feature various labels, including Comme des Garcons. 
                        </p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <a href="https://www.metmuseum.org/exhibitions/listings/2017/rei-kawakubo" target="_blank" rel="noreferrer">
                        <h3><i>Rei Kawakubo/Comme des Garcons: Art of the In-Between</i></h3>
                        <p>Exhibition page from the Met Museum on Rei Kawakubo and Comme des Garcons following the theme of dichotomies within her creative works. 
                            Features select images and videos surrounding the event. 
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://www.metmuseum.org/art/collection/search?q=Rei+Kawakubo" target="_blank" rel="noreferrer">
                        <h3><i>Met Museum's archive of CDG Works</i></h3>
                        <p>Page of the Comme des Garcons pieces that were entered into the Met Museums archive for the exhibit with date and garmet information. 
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.youtube.com/watch?v=G1zn8GONKgQ" target="_blank" rel="noreferrer">
                        <h3><i>TimesTalks: Adrian Joffe, Andrew Bolton and Vanessa Friedman in Conversation</i></h3>
                        <p>Interview between Vanessa Friedman, fashion journalist, Andrew Bolton, Met's Costume Institute director, and Adrian Joffe, Comme des Garcons persident,
                            about the then-upcoming Met exhibit on Rei Kawakubo and Comme des Garcons for The New York Times.   
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    <a href="https://www.youtube.com/watch?v=HdR9PkJWz_I" target="_blank" rel="noreferrer">
                        <h3><i>Who Is Rei Kawakubo? | The Leader Of The Comme Des Garçons Universe</i></h3>
                        <p>Youtube video by Fashion Roadman on the history of Comme des Garcons and Rei Kawakubo. He talks about significant collections, 
                            all of the Comme labels, and the importance of Dover Street Market. 
                        </p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <a href="https://www.dezeen.com/2019/05/09/rei-kawakubo-comme-des-garcons-interview/" target="_blank" rel="noreferrer">
                        <h3><i>Comme des Garçons is "nothing about clothes" says Rei Kawakubo</i></h3>
                        <p>Brief summary written about Rei Kawkubo and the Comme des Garcons label followed by an interview done for DeZeen. 
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://www.vogue.com/article/rei-kawakubo-isamu-noguchi-award-interview" target="_blank" rel="noreferrer">
                        <h3><i>A Chat With Rei Kawakubo as She Wins the Noguchi Award</i></h3>
                        <p>Interview with Rei Kawakubo in 2019 after she won the Isamu Noguchi Award, an award destinguished for artists bridging 
                            Eastern and Western cultures. She was the first Fashion Designer to recieve the award and arguably the most internationally-known
                            recipient since the awards inception in 2014. 
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.anothermag.com/fashion-beauty/13173/cover-story-rei-kawakubo-on-anger-passion-and-dissonance-interview-2021" target="_blank" rel="noreferrer">
                        <h3><i>Rei Kawakubo on Anger, Passion and Dissonance</i></h3>
                        <p>Article and interview by AnotherMag in 2021 with Rei Kawakubo talking about her working through lockdown and digital medias. 
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    <a href="https://www.theguardian.com/fashion/2018/sep/15/a-rare-interview-with-comme-des-garcons-designer-rei-kawakubo" target="_blank" rel="noreferrer">
                        <h3><i>A rare interview with Comme des Garçons designer Rei Kawakubo</i></h3>
                        <p>Interview given to The Guardian in 2018 by Rei Kawakubo and Adrian Joffe. 
                        </p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <a href="https://www.vogue.com/article/comme-des-garcons-rei-kawakubo-spring-2021-interview" target="_blank" rel="noreferrer">
                        <h3><i>“The Power of Clothing” According to Comme des Garçons’s Rei Kawakubo</i></h3>
                        <p>Interview by Mitsuko Watanabe for Vogue in 2021 with Rei Kawakubo. 
                        </p>
                    </a>
                </div>
                <div class="col-2">
                    <a href="https://www.interviewmagazine.com/fashion/rei-kawakubo-founder-of-comme-des-garcons-exchanges-emails-with-bjork" target="_blank" rel="noreferrer">
                        <h3><i>Future Folklore: An Unedited E-Mail Correspondence Between Rei Kawakubo and Björk</i></h3>
                        <p>Email Interview done between Bjork and Rei Kawakubo in 2019 for Interview Magazine. 
                        </p>
                    </a>
                </div>
                <div class="col-3">
                    <a href="https://www.ft.com/content/8fe9dd68-25e1-11e7-8691-d5f7e0cd0a16" target="_blank" rel="noreferrer">
                        <h3><i>‘It was a battle’ — Rei Kawakubo, Comme des Garçons founder, on her Met exhibition</i></h3>
                        <p>Interview between Rei Kawakubo and Andrew Bolton on her Met Exhibit in 2016 before the exhibits launch in 2017. 
                        </p>
                    </a>
                </div>
                <div class="col-4">
                    
                </div>
            </div>
            <div class="back">
                <Link to="/kawakubo" component={kawakubo}><h3>back</h3></Link>
            </div>
        </div>
    );
};

export default kawaBookshelf;