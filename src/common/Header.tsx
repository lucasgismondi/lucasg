import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
`;

const InnerWrapper = styled.div`
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header: React.FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <button>Lucas Gismondi</button>
                <MenuButton />
            </InnerWrapper>
        </Wrapper>
    );
};

const MenuButtonWrapper = styled(motion.div)`
    position: relative;
    height: 1.5em;
    width: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Bar = styled(motion.div)`
    position: absolute;
    background-color: white;
    height: 0.17em;
    width: 2.1em;
`;

const MenuButton: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuButtonWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Bar animate={isMenuOpen ? { rotate: 45, top: '0.65em' } : { rotate: 0, top: '1em' }} />
            <Bar animate={isMenuOpen ? { rotate: -45, bottom: '0.65em' } : { rotate: 0, bottom: '1em' }} />
        </MenuButtonWrapper>
    );
};

export default Header;
