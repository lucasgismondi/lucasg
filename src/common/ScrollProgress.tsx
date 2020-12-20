import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.div)`
    position: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 5;
`;

const InnerWrapper = styled.div`
    max-height: 50vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    padding: 1vh;
`;

const ScrollIndicator = styled(motion.div)`
    background-color: white;
    opacity: 0.2;
    flex-grow: 1;
    width: 0.5vh;
    margin-bottom: 1vh;
    cursor: pointer;
`;

interface Props {
    scrollToIndex: (index: number) => void;
    currentPage: number;
    pages: string[];
    isCardSelected: boolean;
}

const ScrollProgress: React.FC<Props> = ({ scrollToIndex, currentPage, pages, isCardSelected }) => {
    return (
        <AnimatePresence>
            {!isCardSelected && (
                <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <InnerWrapper>
                        {pages.map((page, i) => (
                            <ScrollIndicator
                                key={i}
                                whileHover={{ opacity: 1 }}
                                onClick={() => scrollToIndex(i)}
                                animate={{ opacity: currentPage === i ? 1 : 0.2 }}
                            />
                        ))}
                    </InnerWrapper>
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default ScrollProgress;
