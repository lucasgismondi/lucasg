import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
}

const Projects: React.FC<Props> = ({ onCardToggle }) => {
    return <Page id="projects"></Page>;
};

export default Projects;
