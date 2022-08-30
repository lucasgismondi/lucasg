import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel';
import Link from 'common/Link';
import Break from 'common/Break';
import BodyText from 'common/BodyText';

import bitbuyLogo from '../assets/bitbuyLogo.png';
import tabloLogo from '../assets/tabloLogo.png';
import loopioLogo from '../assets/loopioLogo.png';
import aerialPhotoworksLogo from '../assets/aerialPhotoworksLogo.png';

const BitbuyImage = styled.img`
    width: 28vh;
`;

const TabloImage = styled.img`
    width: 25vh;
`;

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
    isScrollingDown: boolean;
    isInitialTransition: boolean;
}

const BitbuyContent = (
    <div>
        <h3 className="header">
            <Link href="https://www.bitbuy.ca">Bitbuy Technologies Inc.</Link> | Crypto Exchange
        </h3>
        <h4 className="subheader">Software Developer | Treasury, Risk, Collateral & Marketplace Systems</h4>
        <h5 className="subheader">08/2022 - Current</h5>
        <Break />
        <h4 className="subheader">Mobile Engineer | Application & Productivity</h4>
        <h5 className="subheader">01/2022 - 08/2022</h5>
        <BodyText>
            <ul>
                <li>
                    Implemented EAS (Expo Application Services) into the mobile build process. Documented entire process
                    to help other engineering teams across the business migrate to EAS.
                </li>
                <li>Reduced Web build time by ~25% (8 minutes).</li>
                <li>
                    Increased both Web & Mobile releases to a minimum of 1 release per week by creating and modifying a
                    variety of Github workflows, which included Slack notifications, to improve CI/CD pipeline.
                </li>
                <li>
                    Streamlined coin implementation process on Mobile. This involved code refactoring, documenting the
                    overall process, and improving communication on coin requirements.
                </li>
                <li>Utilized: React Native, React, Github Actions, Typescript, Gatsby, HTML, CSS.</li>
            </ul>
        </BodyText>
    </div>
);

const TabloContent = (
    <div>
        <h3 className="header">
            <Link href="https://www.tablocreative.com">Tablo Creative</Link> | Boutique Consulting Agency
        </h3>
        <h4 className="subheader">Web Developer</h4>
        <h5 className="subheader">11/2021 - Current</h5>
        <BodyText>
            <ul>
                <li>
                    Implemented new design system for <Link href="https://www.metabase.com">metabase.com.</Link>{' '}
                    Complete overhaul of the entire site.
                </li>
                <li>
                    Implemented internal Shopify Monogram app for{' '}
                    <Link href="https://www.trouvailleonline.com">trouvailleonline.com.</Link> Utilized Glitch for the backend. Try
                    it by adding an item from <Link href="https://trouvailleonline.com/collections/monogram">here</Link>
                    , and navigating to the cart! Click “Add Complimentary Monogram” within the cart to view.
                </li>
                <li>
                    Implemented custom discount indicator for <Link href="https://www.futz.com">futz.com</Link> on their
                    collections pages for their Shopify store.
                </li>
                <li>Utilized: Jekyll, Liquid, JavaScript, HTML, CSS, NodeJS, Glitch, Webhooks.</li>
            </ul>
        </BodyText>
    </div>
);

const LoopioContent = (
    <div>
        <h3 className="header">
            <Link href="https://www.loopio.com">Loopio Inc.</Link> | RFP Management Software
        </h3>
        <h4 className="subheader">Full Stack Software Developer | Integrations & Projects</h4>
        <h5 className="subheader">05/2018 - 08/2019, 06/2021 - 01/2022</h5>
        <BodyText>
            <ul>
                <li>
                    Refactored Loopio build process to allow support for Typescript. Introduced Typescript to the
                    engineering team through a Lunch & Learn presentation.
                </li>
                <li>Developed a new PDF import system for Loopio’s Project Import feature.</li>
                <li>
                    Developed a Chrome Extension to assist with importing content into the customer library from
                    anywhere on the web. Installations surpassed competitor solution within 5 days of being on the
                    Chrome Store.
                </li>
                <li>Implemented integrations with Slack & Microsoft Dynamics.</li>
                <li>
                    Gained extensive End to End, Integration & Unit testing experience. 100% code coverage required on
                    all newly created features. Active member on Loopio’s internal Testing Guild where we developed
                    testing standards for the Engineering Team.
                </li>
                <li>Developed a bulk user import solution for large enterprise customers.</li>
                <li>Utilized: JavaScript, React, Redux, HTML/CSS, PHP, MySQL, Git.</li>
            </ul>
            Loopio is a Knowledge Management platform that assists in managing the RFP process and is based in Toronto,
            Canada. While at Loopio, I was able to work on meaningful features that made an impact on the business. The
            experience I gained was everything I could have asked for as I was given a broad range of responsibilities
            and had the opportunity to work with a very talented group of people.
            <Break />
            Here is a{' '}
            <Link href="https://medium.com/loopio-product/my-experience-as-loopios-first-intern-ever-a891967777f4">
                link
            </Link>{' '}
            to a blog post I wrote about my experience!
        </BodyText>
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
        <h3 className="header">Aerial PhotoWorks | Aerial Photography Service</h3>
        <h4 className="subheader">Owner</h4>
        <h5 className="subheader">05/2014 - 08/2018</h5>
        <BodyText>
            <Break numBreaks={1} />
            Aerial PhotoWorks was an aerial photography and video company I started when I was 16. At the time, drone
            technology was beginning to trend, so I thought it would be a perfect time to take advantage of the
            opportunity and pair it with my interests. I secured $3000 in government funding, through the Summer Company
            program at the Richmond Hill Small Business Enterprise Center, to help with startup costs. By the end of the
            program, I was presented with the William F. Bell Entrepreneur Award, which recognizes successful young
            entrepreneurs. You can read more about it{' '}
            <Link href="https://www.yorkregion.com/community-story/4909588-gismondi-earns-richmond-hill-entrepreneur-award/">
                here
            </Link>
            ! During my journey, I was fortunate to provide my services to the Toronto Transit Commission (TTC),
            Telelatino Network (TLN), Superior Events Group, Richmond Hill and many others.
            <Break />
            Here is a compilation I made of some of the work I did!
            <Break />
        </BodyText>
        <IframeWrapper>
            <StyledIframe
                title="Aerial PhotoWorks Compilation"
                src="https://www.youtube.com/embed/TEy0Ys6KRj0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </IframeWrapper>
        <Break />
    </div>
);

const Experience: React.FC<Props> = ({ onCardToggle, showContents, isScrollingDown, isInitialTransition }) => {
    return (
        <Page
            id="experience"
            showContents={showContents}
            isScrollingDown={isScrollingDown}
            isInitialTransition={isInitialTransition}
        >
            <Carousel
                id="experience"
                title="Experience"
                cards={[
                    {
                        title: 'Software Developer',
                        subTitle: 'Crypto Exchange',
                        ImageComponent: <BitbuyImage src={bitbuyLogo} alt="bitbuy-logo" />,
                        imageBackgroundColor: '#DFD9CD',
                        imageTextColor: 'black',
                        content: BitbuyContent,
                    },
                    {
                        title: 'Web Developer',
                        subTitle: 'Boutique Consulting Agency',
                        ImageComponent: <TabloImage src={tabloLogo} alt="tablo-creative-logo" />,
                        imageBackgroundColor: '#092D27',
                        imageTextColor: 'white',
                        content: TabloContent,
                    },
                    {
                        title: 'Full Stack Software Developer',
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
