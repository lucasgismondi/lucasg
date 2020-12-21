import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Link from 'common/Link';

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
    scrollToIndex: (index: number) => void;
}

const Header: React.FC<Props> = ({ pageNames, scrollToIndex }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollToIndex = (index: number = 0) => {
        setIsMenuOpen(false);
        setTimeout(() => scrollToIndex(index), 500);
    };

    return (
        <Wrapper>
            <InnerWrapper>
                <Link href="/" newTab={false}>
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
