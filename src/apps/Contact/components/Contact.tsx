import React from 'react';
import Page from 'common/Page';

interface Props {
    onCardToggle: Function;
}

const Contact: React.FC<Props> = ({ onCardToggle }) => {
    return <Page id="contact" title="Contact"></Page>;
};

export default Contact;