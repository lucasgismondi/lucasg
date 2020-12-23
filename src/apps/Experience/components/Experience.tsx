import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel';
import Link from 'common/Link';

import loopioLogo from '../assets/loopioLogo.png';
import aerialPhotoworksLogo from '../assets/aerialPhotoworksLogo.png';

const LoopioImage = styled.img`
    width: 27vh;
    filter: brightness(0%);
`;

const AerialPhotoworksImage = styled.img`
    width: 26vh;
`;

interface Props {
    onCardToggle: Function;
    showContents: boolean;
    isNavigating: boolean;
}

const LoopioContent = (
    <div>
        <h3>Full Stack Software Developer (Intern)</h3>
        <h3>
            <Link href="https://www.loopio.com">Loopio Inc.</Link> | RFP Management Software
        </h3>
        <h5>05/2018 - 08/2019</h5>
        <ul>
            <li>
                Developed a Chrome Extension to assist with importing content into the customer library from anywhere on
                the web. Installations surpassed competitor solution within 5 days of being on the Chrome Store.
            </li>
            <li>Implemented integrations with Slack & Microsoft Dynamics.</li>
            <li>
                Gained extensive End to End, Integration & Unit testing experience. 100% code coverage required on all
                newly created features. Active member on Loopio’s internal Testing Guild where we developed testing
                standards for the Engineering Team.
            </li>
            <li>Developed a bulk user import solution for large enterprise customers.</li>
            <li>Utilized: JavaScript, React, Redux, HTML/CSS, PHP, MySQL, Git</li>
        </ul>
        Loopio is a Knowledge Management platform that assists in managing the RFP process and is based in Toronto,
        Canada. While at Loopio, I was able to work on meaningful features that made an impact on the business. The
        experience I gained was everything I could have asked for as I was given a broad range of responsibilities and
        had the opportunity to work with a very talented group of people.
        <br />
        <br />
        Here is a{' '}
        <Link href="https://medium.com/loopio-product/my-experience-as-loopios-first-intern-ever-a891967777f4">
            link
        </Link>{' '}
        to a blog post I wrote about my experience!
    </div>
);

const IframeWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 42.2vw;
    max-height: 562.5px;
`;

const StyledIframe = styled.iframe`
    width: 75vw;
    height: 42.2vw;
    max-width: 1000px;
    max-height: 562.5px;
`;

const AerialPhotoworksContent = (
    <div>
        <h3>Owner</h3>
        <h3>Aerial PhotoWorks | Aerial Photography Service</h3>
        <h5>05/2014 - 08/2018</h5>
        <br />
        Aerial PhotoWorks was an aerial photography and video company I started when I was 16. At the time, drone
        technology was beginning to trend, so I thought it would be a perfect time to take advantage of the opportunity
        and pair it with my interests. I secured $3000 in government funding, through the Summer Company program at the
        Richmond Hill Small Business Enterprise Center, to help with startup costs. By the end of the program, I was
        presented with the William F. Bell Entrepreneur Award, which recognizes successful young entrepreneurs. You can
        read more about it{' '}
        <Link href="https://www.yorkregion.com/community-story/4909588-gismondi-earns-richmond-hill-entrepreneur-award/">
            here
        </Link>
        ! During my journey, I was fortunate to provide my services to the Toronto Transit Commission (TTC), Telelatino
        Network (TLN), Superior Events Group, Richmond Hill and many others.
        <br />
        <br />
        Here is a compilation I made of some of the work I did!
        <br />
        <br />
        <IframeWrapper>
            <StyledIframe
                title="Aerial PhotoWorks Compilation"
                src="https://www.youtube.com/embed/TEy0Ys6KRj0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </IframeWrapper>
        <br />
        <br />
    </div>
);

const Experience: React.FC<Props> = ({ onCardToggle, showContents, isNavigating }) => {
    return (
        <Page id="experience" showContents={showContents} isNavigating={isNavigating}>
            <Carousel
                id="experience"
                title="Experience"
                cards={[
                    {
                        title: 'Full Stack Software Developer (Intern)',
                        subTitle: 'RFP Management Software',
                        ImageComponent: <LoopioImage src={loopioLogo} alt="loopio-logo" />,
                        imageBackgroundColor: '#02D5CC',
                        imageTextColor: 'black',
                        content: LoopioContent,
                    },
                    {
                        title: 'Owner',
                        subTitle: 'Aerial Photography Service',
                        ImageComponent: (
                            <AerialPhotoworksImage src={aerialPhotoworksLogo} alt="aerial-photoworks-logo" />
                        ),
                        imageBackgroundColor: '#FFFFFF',
                        imageTextColor: 'black',
                        content: AerialPhotoworksContent,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Experience;
