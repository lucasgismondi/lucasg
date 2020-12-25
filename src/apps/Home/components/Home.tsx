import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

import Page from 'common/Page';
import Link from 'common/Link';

import lucasImage from '../assets/lucasProfilePhoto.jpeg';
import resume from '../assets/LUCAS GISMONDI - RESUME.pdf';

const InnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 2em;
    flex-direction: column;
`;

const LucasImage = styled.img`
    border-radius: 100%;
    width: ${isMobileOnly ? '7em' : '10em'};
    height: ${isMobileOnly ? '7em' : '10em'};
    margin: ${isMobileOnly ? '1em' : '2em'};
    box-shadow: 0 0 3em black;
`;

const Description = styled.div`
    margin: ${isMobileOnly ? '1em 3em 1em 3em' : '2em 3em 2em 3em'};
    text-align: justify;
    max-width: 1000px;
    font-size: 0.9em;
`;

interface Props {
    onCardToggle: Function;
    showContents: boolean;
    isNavigating: boolean;
}

const Home: React.FC<Props> = ({ showContents, isNavigating }) => {
    return (
        <Page id="home" showContents={showContents} isNavigating={isNavigating}>
            <InnerWrapper>
                <LucasImage src={lucasImage} />
                <h1 className="header">Lucas Gismondi</h1>
                <h2 className="subheader">Software Developer</h2>
                <Description>
                    &emsp; In May of 2018, I started my career as a Full-Stack Software Developer at Loopio. Since then,
                    I have built a large scale social network for music, called Rhythm, and have deployed multiple web
                    applications that deal with problems such as COVID-19 data capture and medical school application
                    costs. In April of 2021, I will be graduating from the University of Toronto, with an Honours
                    Bachelor of Science, in the Computer Science Specialist program. I am grateful for the opportunities
                    I have had so far and look forward to continue honing in on my skills and help the people around me.
                </Description>
                <Link href={resume} textColor="white">
                    <h4>View Resume</h4>
                </Link>
            </InnerWrapper>
        </Page>
    );
};

export default Home;
