import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
}

const Home: React.FC<Props> = ({ onCardToggle }) => {
    return <Page id="home"></Page>;
};

export default Home;
