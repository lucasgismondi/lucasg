import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import Button from 'common/Button';

const MenuButtonWrapper = styled(motion.button)`
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

const MenuWrapper = styled(motion.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
    display: flex;
    align-items: center;
    z-index: -10;
    top: 0;
`;

const MenuInnerWrapper = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NavigationButton = styled(Button)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.div`
    font-size: 3em;
    font-weight: bold;
`;

interface Props {
    pageNames: string[];
    scrollToIndex: (index: number) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: Function;
}

const Menu: React.FC<Props> = ({ pageNames, scrollToIndex, isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            <MenuButtonWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <TopBar animate={isMenuOpen ? { rotate: 45, top: '0.65em' } : { rotate: 0, top: '1em' }} />
                <BottomBar animate={isMenuOpen ? { rotate: -45, bottom: '0.65em' } : { rotate: 0, bottom: '1em' }} />
            </MenuButtonWrapper>
            <AnimatePresence>
                {isMenuOpen && (
                    <MenuWrapper
                        initial={{ left: '100vw' }}
                        animate={{ left: '0vw' }}
                        exit={{ left: '100vw' }}
                        transition={{ duration: 0.5 }}
                    >
                        <MenuInnerWrapper>
                            {pageNames.map((name, i) => (
                                <NavigationButton key={i} onClick={() => scrollToIndex(i)}>
                                    <ButtonText>{name}</ButtonText>
                                </NavigationButton>
                            ))}
                        </MenuInnerWrapper>
                    </MenuWrapper>
                )}
            </AnimatePresence>
        </>
    );
};

export default Menu;
