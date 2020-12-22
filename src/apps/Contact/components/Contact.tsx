import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
    showContents: boolean;
    isNavigating: boolean;
}

const Contact: React.FC<Props> = ({ onCardToggle, showContents, isNavigating }) => {
    return <Page id="contact" showContents={showContents} isNavigating={isNavigating}></Page>;
};

export default Contact;
