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
}

const Page: React.FC<Props> = ({ id, showContents, children }) => {
    return (
        <Wrapper id={id}>
            <AnimatePresence>
                {showContents && (
                    <InnerWrapper
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
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
