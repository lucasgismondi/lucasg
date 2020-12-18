import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
}

const Blog: React.FC<Props> = ({ onCardToggle }) => {
    return <Page id="blog"></Page>;
};

export default Blog;
