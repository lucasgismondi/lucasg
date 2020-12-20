import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Button from 'common/Button';

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
                <Button hoverAnimation={false} onClick={() => handleScrollToIndex()}>
                    <h3>Lucas Gismondi</h3>
                </Button>
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
