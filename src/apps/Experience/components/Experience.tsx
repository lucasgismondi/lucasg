import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel/components/Carousel';

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
}

const Experience: React.FC<Props> = ({ onCardToggle, showContents }) => {
    return (
        <Page id="experience" showContents={showContents}>
            <Carousel
                id="experience"
                title="Experience"
                cards={[
                    {
                        title: 'Full Stack',
                        subTitle: '05/2018 - 08/2019',
                        ImageComponent: <LoopioImage src={loopioLogo} alt="loopio-logo" />,
                        imageBackgroundColor: '#02D5CC',
                        imageTextColor: 'black',
                        content: null,
                    },
                    {
                        title: 'Owner',
                        subTitle: '05/2014 - 05/2018',
                        ImageComponent: (
                            <AerialPhotoworksImage src={aerialPhotoworksLogo} alt="aerial-photoworks-logo" />
                        ),
                        imageBackgroundColor: '#FFFFFF',
                        imageTextColor: 'black',
                        content: null,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Experience;
