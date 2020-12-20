import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel/components/Carousel';

import loopioLogo from '../assets/loopioLogo.png';
import aerialPhotoworksLogo from '../assets/aerialPhotoworksLogo.png';

interface Props {
    onCardToggle: Function;
}

const LoopioImage = styled.img`
    width: 27vh;
    filter: brightness(0%);
`;

const AerialPhotoworksImage = styled.img`
    width: 26vh;
`;

const Experience: React.FC<Props> = ({ onCardToggle }) => {
    return (
        <Page id="experience">
            <Carousel
                id="experience"
                title="Experience"
                cards={[
                    {
                        title: 'test',
                        subTitle: 'test',
                        ImageComponent: <LoopioImage src={loopioLogo} alt="loopio-logo" />,
                        imageBackgroundColor: '#02D5CC',
                        content: null,
                    },
                    {
                        title: 'test',
                        subTitle: 'test',
                        ImageComponent: (
                            <AerialPhotoworksImage src={aerialPhotoworksLogo} alt="aerial-photoworks-logo" />
                        ),
                        imageBackgroundColor: '#ffffff',
                        content: null,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Experience;
