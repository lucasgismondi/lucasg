import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { CardObject } from './Card';

const Wrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    top: 0;
    background-color: ${'#ffffff00'};
`;

const Background = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    background-color: white;
`;

const ContentWrapper = styled.div`
    position: absolute;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: ${'#ffffff00'};
    display: flex;
    justify-content: center;

    overflow-y: scroll;
    -webkit-overflow-scrolling: scroll; /* iOS Safari */

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;

const InnerWrapper = styled(motion.div)`
    position: absolute;
    max-width: 100vw;
`;

const ImageContent = styled(motion.div)`
    background-color: black;
    width: 100%;
`;

const TextContent = styled(motion.div)`
    height: 100vh;
    background-color: red;
`;

interface Props {
    searchID: string;
    cardObject: CardObject | null;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onExitComplete: () => void;
    show: boolean;
}

const ExpandedCard: React.FC<Props> = ({ searchID, cardObject, onClose, onExitComplete, show }) => {
    let top: number | undefined = 0;
    if (show) {
        const element = document.getElementById(searchID);
        if (element) top = element.getBoundingClientRect().top;
    }

    return (
        <AnimatePresence onExitComplete={onExitComplete}>
            {show && (
                <Wrapper>
                    <ContentWrapper>
                        <InnerWrapper
                            initial={{ top, height: '75vh', width: '45vh', scale: 1 }}
                            animate={{
                                top: 0,
                                height: '100vh',
                                width: '80vh',
                                scale: [1, 0.9, 1, 1, 1],
                                transition: { duration: 0.75 },
                            }}
                            exit={{
                                top,
                                height: '75vh',
                                width: '45vh',
                                scale: 1,
                                transition: { duration: 0.6 },
                            }}
                        >
                            <ImageContent
                                initial={{ top, height: '75vh', borderRadius: '1em' }}
                                animate={{
                                    top: 0,
                                    height: '20vh',
                                    borderRadius: '0em',
                                    transition: { duration: 0.75 },
                                }}
                                exit={{
                                    top,
                                    height: '75vh',
                                    borderRadius: '1em',
                                    transition: { duration: 0.6 },
                                }}
                            >
                                <button onClick={onClose}>close</button>
                            </ImageContent>
                            <TextContent
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.75 } }}
                                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                            >
                                HERE IS SOME CONTENT
                            </TextContent>
                        </InnerWrapper>
                    </ContentWrapper>
                    <Background
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.75 } }}
                        exit={{ opacity: 0, transition: { duration: 0.6 } }}
                    />
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default ExpandedCard;
