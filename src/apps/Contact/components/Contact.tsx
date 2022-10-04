import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Link from 'common/Link';

import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';

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
    isScrollingDown: boolean;
    isInitialTransition: boolean;
}

const Contact: React.FC<Props> = ({ onCardToggle, showContents, isScrollingDown, isInitialTransition }) => {
    return (
        <Page
            id="contact"
            showContents={showContents}
            isScrollingDown={isScrollingDown}
            isInitialTransition={isInitialTransition}
        >
            <Wrapper>
                <h1 className="header">Contact</h1>
                <ContactWrapper>
                    <Link href="mailto:lucas.m.gismondi@gmail.com" textColor="white">
                        <h3 style={{ fontStyle: 'normal' }}>lucas.m.gismondi@gmail.com</h3>
                    </Link>
                    <IconWrapper>
                        <IconLink href="https://github.com/lucasgismondi" textColor="white">
                            <GitHub style={{ fontSize: '3em' }} />
                        </IconLink>
                        <IconLink href="https://www.linkedin.com/in/lucasgismondi/" textColor="white">
                            <LinkedIn style={{ fontSize: '4em' }} />
                        </IconLink>
                    </IconWrapper>
                </ContactWrapper>
            </Wrapper>
        </Page>
    );
};

export default Contact;
