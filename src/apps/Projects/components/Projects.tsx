import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel';
import Break from 'common/Break';
import Link from 'common/Link';
import BodyText from 'common/BodyText';

import rhythmLogo from '../assets/rhythmLogo.png';
import uoftLogo from '../assets/UofTLogo.png';

const RhythmImage = styled.img`
    width: 27vh;
`;

const UofTImage = styled.img`
    width: 27vh;
    filter: brightness(0) invert(1);
`;

interface Props {
    onCardToggle: Function;
    showContents: boolean;
    isScrollingDown: boolean;
    isInitialTransition: boolean;
}

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

const RhythmContent = (
    <div>
        <h3 className="header">
            <Link href="https://sites.google.com/view/getrhythmapp/home">Rhythm</Link> | Cross Platform Music Sharing
        </h3>
        <BodyText>
            <ul>
                <li>
                    Developed an iOS application that allows users to share songs, albums and playlists between Spotify
                    and Apple Music. Rhythm ranked as the Top 40 music app within 24 hours of launching.
                </li>
                <li>
                    Integrated Spotify and Apple Music SDK’s to stream and save songs, albums, and playlists to users’
                    personal Library directly from Rhythm.
                </li>
                <li>
                    Integrated Google Analytics to track a wide variety of user actions, allowing for data driven
                    features and updates.
                </li>
                <li>
                    Created an internal tool to assist with manually correcting the apps song/album matching algorithm,
                    which has a ~97% match rate.
                </li>
                <li>
                    Utilized: React Native, Swift, Objective-C, NodeJS, MySQL, Google Cloud Platform, Elastic Search,
                    Firebase
                </li>
            </ul>
            Rhythm is a music sharing platform that bridges the gap between streaming services. No matter if you
            subscribe to Apple Music or Spotify Premium, you and your friends can follow each other, share your
            favourite songs, albums, or playlists, and stream them right from Rhythm. If you like a song someone shares,
            save it directly to your Apple or Spotify library with the touch of a button.
            <Break />
            I would love to make the repository public but I am unable due to a variety of reasons. But just know some
            of my best work lies in that repository so far!
            <Break />
            Note: Rhythm is no longer available on the iOS App Store as of May 7th, 2021.
            <Break />
        </BodyText>
        <IframeWrapper>
            <StyledIframe
                title="Rhythm - Cross Platform Music Sharing"
                src="https://www.youtube.com/embed/i8Nje598i6w"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </IframeWrapper>
        <Break />
    </div>
);

const UofTContent = (
    <div>
        <BodyText>
            Working towards my Computer Science degree at UofT has been a very rewarding process. UofT has taught me how
            to solve problems using First Principles Thinking which will likely prove to be the most important lesson in
            my career. Some of my coursework included Algorithm Design & Analysis, Operating Systems, Algorithms & Data
            Structures, Human & Computer Interaction, Engineering Large Software Systems, Software Testing &
            Verification, and Natural Language Processing. My favourite part of the experience was working with smart
            classmates in the beautiful city of Toronto.
            <Break />
            Below are a few of my favourite projects I have worked on throughout the years. The projects that are
            highest on the list are the most relevant.
            <Break />
            <b>
                Note some repositories are hidden for academic integrity reasons but may be made available temporarily.
            </b>
            <Break numBreaks={3} />
        </BodyText>
        <h3 className="header">Structured Data Capture</h3>
        <h4 className="subheader">6 Person Team</h4>
        <h5 className="subheader">CSC302 - Engineering Large Software Systems</h5>
        <BodyText>
            <Break numBreaks={1} />
            The goal of this project was to apply software engineering data management practices to create a prototype
            reporting system that uses versioned, structured data to enable more efficient and timely collection of
            pandemic status data and thus improve information governance. For this project, we worked to implement the
            Standard Data Capture specification by creating a client and backend service. UI/UX design, system
            architecture, dev ops, testing, and product management tasks were involved when creating the product.
            <Break />
            <Link href="https://github.com/csc302-fall-2020/proj-TBD">Repository</Link>
            <Break numBreaks={3} />
        </BodyText>
        <h3 className="header">Medical School Cost Calculator</h3>
        <h4 className="subheader">6 Person Team</h4>
        <h5 className="subheader">CSC301 - Introduction to Software Engineering</h5>
        <BodyText>
            <Break numBreaks={1} />
            For this project, we implemented a Medical School Cost Calculator that assists students applying to Medical
            School reduce their application costs. We developed the webapp for the University of Toronto Faculty of
            Medicine. The webapp continues to be actively maintained by students who take CSC301.
            <Break />
            <Link href="https://med-school-calculator.web.app/">Website</Link>
            <Break numBreaks={3} />
        </BodyText>
        <h3 className="header">Action Item Manager</h3>
        <h4 className="subheader">4 Person Team</h4>
        <h5 className="subheader">CSC309 - Programming on the Web</h5>
        <BodyText>
            <Break numBreaks={1} />
            For this project, we were given the freedom to develop any web application we wanted as long as there was a
            backend, client, and user authentication involved. Our idea actually stemmed from a process observation made
            when I was interning at Loopio. There are multiple cases in a practical world where each member on a team
            has to complete the same task, but there are no formal tools for enterprise companies to achieve tracking
            individual progress on this task. Our Action Item Manager attempts to solve this problem.
            <Break />
            <Link href="https://github.com/lucasgismondi/action-item-manager">Repository</Link>
            <Break numBreaks={1} />
            <Link href="https://pacific-atoll-01415.herokuapp.com/login">Website</Link>
            <Break numBreaks={3} />
        </BodyText>
        <h3 className="header">File System Implementation</h3>
        <h4 className="subheader">2 Person Team</h4>
        <h5 className="subheader">CSC369 - Operating Systems</h5>
        <BodyText>
            <Break numBreaks={1} />
            Our task for this assignment was to design and implement a simple extent-based file system using C and FUSE.
            Commands like ls, stat, mkdir, rm were required to support multiple data blocks and extents.
            <Break numBreaks={3} />
        </BodyText>
        <h3 className="header">Political Persuasion Identifier</h3>
        <h4 className="subheader">Solo Project</h4>
        <h5 className="subheader">CSC401 - Natural Language Computing</h5>
        <BodyText>
            <Break numBreaks={1} />
            For this assignment, we made use of python and scikit-learn to identify where someone was on the political
            spectrum based on their reddit comments from political subreddits. The project involved cleaning input data,
            training models, and determining the most effective features and models using p-values.
            <Break numBreaks={3} />
        </BodyText>
        <h3 className="header">Altera Guitar Hero</h3>
        <h4 className="subheader">2 Person Team</h4>
        <h5 className="subheader">CSC258 - Computer Organization</h5>
        <BodyText>
            <Break numBreaks={1} />
            For this project, we were given the freedom to implement a graphical game using the De1-SoC Altera
            Development board. Our group implemented a Guitar Hero style game.
            <Break />
        </BodyText>
    </div>
);

const Projects: React.FC<Props> = ({ onCardToggle, showContents, isScrollingDown, isInitialTransition }) => {
    return (
        <Page
            id="projects"
            showContents={showContents}
            isScrollingDown={isScrollingDown}
            isInitialTransition={isInitialTransition}
        >
            <Carousel
                id="projects"
                title="Projects"
                cards={[
                    {
                        title: 'Cross Platform Music Sharing',
                        subTitle: '',
                        ImageComponent: <RhythmImage src={rhythmLogo} alt="rhtyhm-logo" />,
                        imageBackgroundColor: '#BC34D4',
                        imageTextColor: 'white',
                        content: RhythmContent,
                    },
                    {
                        title: '',
                        subTitle: '',
                        ImageComponent: <UofTImage src={uoftLogo} alt="university-of-toronto-logo" />,
                        imageBackgroundColor: '#082C64',
                        imageTextColor: 'white',
                        content: UofTContent,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Projects;
