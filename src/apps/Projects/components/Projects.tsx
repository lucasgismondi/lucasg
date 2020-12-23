import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel';

import rhythmLogo from '../assets/rhythmLogo.png';
import uoftLogo from '../assets/UofTLogo.png';
import Link from '../../../common/Link';

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
    isNavigating: boolean;
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
        <h3>
            <Link href="https://www.getrhythmapp.com">Rhythm</Link> | Cross Platform Music Sharing
        </h3>
        <ul>
            <li>
                Developed an iOS application that allows users to share songs, albums and playlists between Spotify and
                Apple Music. Rhythm ranked as the Top 40 music app within 24 hours of launching.
            </li>
            <li>
                Integrated Spotify and Apple Music SDK’s to stream and save songs, albums, and playlists to users’
                personal Library directly from Rhythm.
            </li>
            <li>
                Integrated Google Analytics to track a wide variety of user actions, allowing for data driven features
                and updates.
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
        Rhythm is a music sharing platform that bridges the gap between streaming services. No matter if you subscribe
        to Apple Music or Spotify Premium, you and your friends can follow each other, share your favourite songs,
        albums, or playlists, and stream them right from Rhythm. If you like a song someone shares, save it directly to
        your Apple or Spotify library with the touch of a button.
        <br />
        <br />
        I would love to make the repository public but I am unable due to a variety of reasons. But just know some of my
        best work lies in that repository so far!
        <br />
        <br />
        Download on the <Link href="https://apps.apple.com/us/app/rhythm/id1499889444?ls=1">App Store</Link>!
        <br />
        <br />
        <IframeWrapper>
            <StyledIframe
                title="Rhythm - Cross Platform Music Sharing"
                src="https://www.youtube.com/embed/i8Nje598i6w"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </IframeWrapper>
        <br />
        <br />
    </div>
);

const UofTContent = (
    <div>
        Working towards my degree at UofT has been a very rewarding process. UofT has taught me how to solve problems
        using First Principles Thinking which will likely prove to be the most important lesson in my career. Some of my
        coursework included Algorithm Design & Analysis, Operating Systems, Algorithms & Data Structures, Human &
        Computer Interaction, Engineering Large Software Systems, Software Testing & Verification, Natural Language
        Processing My favourite part of the experience was working with smart classmates in the beautiful city of
        Toronto.
        <br />
        <br />
        Below are a few of my favourite projects I have worked on throughout the years. The projects that are highest on
        the list are the most relevant.
        <br />
        <br />
        <b>Note some repositories are hidden for academic integrity reasons but may be made available temporarily.</b>
        <br />
        <br />
        <br />
        <br />
        <h3>Structured Data Capture</h3>
        <h3>6 Person Team</h3>
        <h5>CSC302 - Engineering Large Software Systems</h5>
        <br />
        The goal of this project was to apply software engineering data management practices to create a prototype
        reporting system that uses versioned, structured data to enable more efficient and timely collection of pandemic
        status data and thus improve information governance. For this project, we worked to implement the Standard Data
        Capture specification by creating a client and backend service. UI/UX design, system architecture, dev ops,
        testing, and project management tasks were involved when creating the product.
        <br />
        <br />
        <Link href="https://github.com/csc302-fall-2020/proj-TBD">Repository</Link>
        <br />
        <br />
        <br />
        <br />
        <h3>Medical School Cost Calculator</h3>
        <h3>6 Person Team</h3>
        <h5>CSC301 - Introduction to Software Engineering</h5>
        <br />
        For this project, we implemented a Medical School Cost Calculator that assists students applying to Medical
        School reduce their application costs. We developed the webapp for the University of Toronto Faculty of
        Medicine. The webapp continues to be actively maintained by students who take CSC301.
        <br />
        <br />
        <Link href="https://med-school-calculator.web.app/">Website</Link>
        <br />
        <br />
        <br />
        <br />
        <h3>Action Item Manager</h3>
        <h3>4 Person Team</h3>
        <h5>CSC309 - Programming on the Web</h5>
        <br />
        For this project, we were given the freedom to develop any web application we wanted as long as there was a
        backend, client, and user authentication involved. Our idea actually stemmed from a process observation made
        when I was interning at Loopio. There are multiple cases in a practical world where each member on a team has to
        complete the same task, but there are no formal tools for enterprise companies to achieve tracking individual
        progress on this task. Our Action Item Manager attempts to solve this problem.
        <br />
        <br />
        <Link href="https://github.com/lucasgismondi/action-item-manager">Repository</Link>
        <br />
        <Link href="https://pacific-atoll-01415.herokuapp.com/login">Website</Link>
        <br />
        <br />
        <br />
        <br />
        <h3>File System Implementation</h3>
        <h3>2 Person Team</h3>
        <h5>CSC369 - Operating Systems</h5>
        <br />
        Our task for this assignment was to design and implement a simple extent-based file system using C and FUSE.
        Commands like ls, stat, mkdir, rm were required to support multiple data blocks and extents.
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Political Persuasion Identifier</h3>
        <h3>Solo Project</h3>
        <h5>CSC401 - Natural Language Computing</h5>
        <br />
        For this assignment, we made use of python and scikit-learn to identify where someone was on the political
        spectrum based on their reddit comments on political subreddits. The project involved cleaning input data,
        training models, and determining the features and models using p values. My algorithm had a 60% success rate.
        <br />
        <br />
        <br />
        <br />
        <h3>Altera Guitar Hero</h3>
        <h3>2 Person Team</h3>
        <h5>CSC258 - Computer Organization</h5>
        <br />
        For this project, we were given the freedom to implement a graphical game using the De1-SoC Altera Development
        board. Our group implemented a Guitar Hero style game.
        <br />
        <br />
    </div>
);

const Projects: React.FC<Props> = ({ onCardToggle, showContents, isNavigating }) => {
    return (
        <Page id="projects" showContents={showContents} isNavigating={isNavigating}>
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
