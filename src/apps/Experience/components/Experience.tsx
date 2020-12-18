import React from 'react';
import Page from 'common/Page';
import Carousel from 'common/Carousel/components/Carousel';

import loopioLogo from '../assets/loopioLogo.png';

interface Props {
    onCardToggle: Function;
}

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
                        image: loopioLogo,
                        imageAlt: 'loopio-logo',
                        content: null,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Experience;
