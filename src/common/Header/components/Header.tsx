import React, { useState } from 'react';
import styled from 'styled-components';
import EventEmitter from 'eventemitter3';

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
                <Menu
                    pageNames={pageNames}
                    scrollToIndex={handleScrollToIndex}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
            </InnerWrapper>
        </Wrapper>
    );
};

export default Header;
