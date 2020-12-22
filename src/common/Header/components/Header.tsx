import React, { useState } from 'react';
import styled from 'styled-components';
import EventEmitter from 'eventemitter3';

import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';

import Menu from './Menu';
import Link from 'common/Link';

export const NavigateEmitter = new EventEmitter();

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 100;
`;

const InnerWrapper = styled.div`
    padding: 0.6em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const IconLink = styled(Link)`
    padding: 0 0.4em 0 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface Props {
    pageNames: string[];
    scrollToIndex: (index: number, isNavigating: boolean) => void;
}

const Header: React.FC<Props> = ({ pageNames, scrollToIndex }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollToIndex = (index: number = 0) => {
        setIsMenuOpen(false);
        NavigateEmitter.emit('navigating');
        setTimeout(() => scrollToIndex(index, true), 500);
    };

    return (
        <Wrapper>
            <InnerWrapper>
                <Link href="/" textColor="white" newTab={false}>
                    <h3>Lucas Gismondi</h3>
                </Link>
                <Right>
                    <IconLink href="https://github.com/test-js" textColor="white">
                        <GitHub style={{ fontSize: '1.3em' }} />
                    </IconLink>
                    <IconLink href="https://www.linkedin.com/in/lucasgismondi/" textColor="white">
                        <LinkedIn style={{ fontSize: '1.6em' }} />
                    </IconLink>
                    <IconLink href="https://www.instagram.com/lucas.gismondi/" textColor="white">
                        <Instagram />
                    </IconLink>
                    <Menu
                        pageNames={pageNames}
                        scrollToIndex={handleScrollToIndex}
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                </Right>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Header;
