import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const TopBar = styled(Bar)`
    top: 1em;
`;

const BottomBar = styled(Bar)`
    bottom: 1em;
`;

const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuButtonWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <TopBar animate={isMenuOpen ? { rotate: 45, top: '0.65em' } : { rotate: 0, top: '1em' }} />
            <BottomBar animate={isMenuOpen ? { rotate: -45, bottom: '0.65em' } : { rotate: 0, bottom: '1em' }} />
        </MenuButtonWrapper>
    );
};

export default Menu;
