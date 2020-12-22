import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
`;

const InnerWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
`;

interface Props {
    id: string;
    showContents: boolean;
    isNavigating: boolean;
}

const Page: React.FC<Props> = ({ id, showContents, isNavigating, children }) => {
    return (
        <Wrapper id={id}>
            <AnimatePresence>
                {(showContents || isNavigating) && (
                    <InnerWrapper
                        initial={{ opacity: isNavigating ? 1 : 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
                        exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.5 } }}
                    >
                        {children}
                    </InnerWrapper>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default Page;
