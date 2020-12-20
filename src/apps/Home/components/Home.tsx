import React from 'react';
import styled from 'styled-components';

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
    width: 10em;
    height: 10em;
    margin: 2em;
`;

const Description = styled.div`
    margin: 2em;
`;

interface Props {
    onCardToggle: Function;
}

const Home: React.FC<Props> = () => {
    return (
        <Page id="home">
            <InnerWrapper>
                <LucasImage src={lucasImage} />
                <h1>Lucas Gismondi</h1>
                <h2>Software Developer</h2>
                <Description>Some description goes here...</Description>
                <Link href={resume}>
                    <h4>View Resume</h4>
                </Link>
            </InnerWrapper>
        </Page>
    );
};

export default Home;
