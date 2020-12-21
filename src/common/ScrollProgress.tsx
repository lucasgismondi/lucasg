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
`;

const ScrollIndicator = styled(motion.div)`
    opacity: 0.2;
    flex-grow: 1;
    width: 0.5vh;
    padding: 1vh 1vh 0 1vh;
    cursor: pointer;
`;

const InnerIndicator = styled.div`
    background-color: white;
    height: 100%;
`;

interface Props {
    scrollToIndex: (index: number) => void;
    currentPage: number;
    pages: string[];
    isCardExpanded: boolean;
}

const ScrollProgress: React.FC<Props> = ({ scrollToIndex, currentPage, pages, isCardExpanded }) => {
    return (
        <AnimatePresence>
            {!isCardExpanded && (
                <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <InnerWrapper>
                        {pages.map((page, i) => (
                            <ScrollIndicator
                                key={i}
                                whileHover={{ opacity: 1 }}
                                onClick={() => scrollToIndex(i)}
                                animate={{ opacity: currentPage === i ? 1 : 0.2 }}
                            >
                                <InnerIndicator />
                            </ScrollIndicator>
                        ))}
                    </InnerWrapper>
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default ScrollProgress;
