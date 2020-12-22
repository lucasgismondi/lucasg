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
            <Link href="https://www.getrhythmapp.com">
                <i>Rhythm</i>
            </Link>{' '}
            | <i>Cross Platform Music Sharing</i>
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
        albums, or playlists, and stream them right from Rhythm. Your news feed caters to your chosen streaming service,
        meaning that even when your friends post songs from the other service, you see the version that you can stream.
        If you like a song someone shares, save it directly to your Apple or Spotify library with the touch of a button.
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
                        content: null,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Projects;
