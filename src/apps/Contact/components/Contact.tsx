import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Link from 'common/Link';

import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ContactWrapper = styled.div`
    height: 60vh;
    width: 50vh;
    margin: 2em 0 2em 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 2em;
`;

const IconLink = styled(Link)`
    padding: 0 1em 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface Props {
    onCardToggle: Function;
    showContents: boolean;
    isNavigating: boolean;
}

const Contact: React.FC<Props> = ({ onCardToggle, showContents, isNavigating }) => {
    return (
        <Page id="contact" showContents={showContents} isNavigating={isNavigating}>
            <Wrapper>
                <h1>Contact</h1>
                <ContactWrapper>
                    <Link href="mailto:lucas.m.gismondi@gmail.com" textColor="white">
                        <h2>lucas.m.gismondi@gmail.com</h2>
                    </Link>
                    <IconWrapper>
                        <IconLink href="https://github.com/lucasgismondi" textColor="white">
                            <GitHub style={{ fontSize: '3em' }} />
                        </IconLink>
                        <IconLink href="https://www.linkedin.com/in/lucasgismondi/" textColor="white">
                            <LinkedIn style={{ fontSize: '4em' }} />
                        </IconLink>
                        <IconLink href="https://www.instagram.com/lucas.gismondi/" textColor="white">
                            <Instagram style={{ fontSize: '3.7em' }} />
                        </IconLink>
                    </IconWrapper>
                </ContactWrapper>
            </Wrapper>
        </Page>
    );
};

export default Contact;
