import React from 'react';
import Page from 'common/Page';
import Carousel from 'common/Carousel';

interface Props {
    onCardToggle: Function;
}

const Projects: React.FC<Props> = ({ onCardToggle }) => {
    return (
        <Page id="projects" title="Projects">
            <Carousel
                id="projects"
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

export default Projects;
