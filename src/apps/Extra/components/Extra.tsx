import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
}

const Extra: React.FC<Props> = ({ onCardToggle }) => {
    return <Page id="extra"></Page>;
};

export default Extra;
