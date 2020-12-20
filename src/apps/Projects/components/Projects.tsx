import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel/components/Carousel';

import rhythmLogo from '../assets/rhythmLogo.png';
import uoftLogo from '../assets/UofTLogo.png';

interface Props {
    onCardToggle: Function;
}

const RhythmImage = styled.img`
    width: 27vh;
`;

const UofTImage = styled.img`
    width: 27vh;
    filter: brightness(0) invert(1);
`;

const Projects: React.FC<Props> = ({ onCardToggle }) => {
    return (
        <Page id="projects">
            <Carousel
                id="projects"
                title="Projects"
                cards={[
                    {
                        title: 'test',
                        subTitle: 'test',
                        ImageComponent: <RhythmImage src={rhythmLogo} alt="rhtyhm-logo" />,
                        imageBackgroundColor: '#BC34D4',
                        content: null,
                    },
                    {
                        title: 'test',
                        subTitle: 'test',
                        ImageComponent: <UofTImage src={uoftLogo} alt="university-of-toronto-logo" />,
                        imageBackgroundColor: '#082C64',
                        content: null,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Projects;
