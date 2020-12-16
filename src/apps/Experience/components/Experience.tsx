import React from 'react';
import Page from 'common/Page';
import Carousel from 'common/Carousel';

interface Props {
    onCardToggle: Function;
}

const Experience: React.FC<Props> = ({ onCardToggle }) => {
    return (
        <Page id="experience" title="Experience">
            <Carousel
                id="experience"
                cards={[
                    { title: 'test', subTitle: 'test', content: null },
                    { title: 'test', subTitle: 'test', content: null },
                    { title: 'test', subTitle: 'test', content: null },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Experience;
