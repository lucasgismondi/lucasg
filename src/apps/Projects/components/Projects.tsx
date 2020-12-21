import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel/components/Carousel';

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
}

const Projects: React.FC<Props> = ({ onCardToggle, showContents }) => {
    return (
        <Page id="projects" showContents={showContents}>
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
                        content: null,
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
