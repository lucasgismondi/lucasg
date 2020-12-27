import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
`;

const InnerWrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

interface Props {
    id: string;
    showContents: boolean;
    isScrollingDown: boolean;
    isInitialTransition: boolean;
}

const Page: React.FC<Props> = ({ id, showContents, children, isScrollingDown, isInitialTransition }) => {
    return (
        <AnimatePresence>
            {showContents && (
                <Wrapper id={id}>
                    <InnerWrapper
                        initial={isInitialTransition ? { opacity: 0 } : { top: isScrollingDown ? '100vh' : '-100vh' }}
                        animate={
                            isInitialTransition
                                ? { opacity: 1, transition: { duration: 0.75 } }
                                : { top: '0vh', transition: { duration: 0.75 } }
                        }
                        exit={{ top: isScrollingDown ? '-100vh' : '100vh', transition: { duration: 0.75 } }}
                    >
                        {children}
                    </InnerWrapper>
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default Page;
