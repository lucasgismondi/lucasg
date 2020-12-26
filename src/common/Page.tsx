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
    left: 0;
    height: 100%;
    width: 100%;
`;

interface Props {
    id: string;
    showContents: boolean;
    isScrollingDown: boolean;
}

const Page: React.FC<Props> = ({ id, showContents, children, isScrollingDown }) => {
    return (
        <Wrapper id={id}>
            <AnimatePresence>
                {showContents && (
                    <InnerWrapper
                        initial={{ top: isScrollingDown ? '100vh' : '-100vh' }}
                        animate={{ top: '0vh', transition: { duration: 0.75 } }}
                        exit={{ top: isScrollingDown ? '-100vh' : '100vh', transition: { duration: 0.75 } }}
                    >
                        {children}
                    </InnerWrapper>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default Page;
