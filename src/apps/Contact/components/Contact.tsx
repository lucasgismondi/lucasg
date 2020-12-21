import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
    showContents: boolean;
}

const Contact: React.FC<Props> = ({ onCardToggle, showContents }) => {
    return <Page id="contact" showContents={showContents}></Page>;
};

export default Contact;
