import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
    showContents: boolean;
}

const Blog: React.FC<Props> = ({ onCardToggle, showContents }) => {
    return <Page id="blog" showContents={showContents}></Page>;
};

export default Blog;
