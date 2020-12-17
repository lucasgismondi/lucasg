import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { CardObject } from './Card';
import { CARD_HEIGHT, CARD_WIDTH, CONTENT_WIDTH, ENTER_DURATION, EXIT_DURATION } from '../constants';

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
    background-color: ${(props) => props.theme.background};
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
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const StyledImage = styled(motion.img)`
    width: 80vh;
`;

const TextContent = styled(motion.div)`
    height: 100vh;
`;

interface Props {
    searchID: string;
    cardObject: CardObject;
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

    const { image, imageAlt } = cardObject;
    return (
        <AnimatePresence onExitComplete={onExitComplete}>
            {show && (
                <Wrapper>
                    <ContentWrapper>
                        <InnerWrapper
                            initial={{ top, height: CARD_HEIGHT, width: CARD_WIDTH, scale: 1 }}
                            animate={{
                                top: 0,
                                height: '100vh',
                                width: CONTENT_WIDTH,
                                scale: [1, 0.9, 1, 1, 1],
                                transition: { duration: ENTER_DURATION },
                            }}
                            exit={{
                                top,
                                height: CARD_HEIGHT,
                                width: CARD_WIDTH,
                                scale: 1,
                                transition: { duration: EXIT_DURATION },
                            }}
                        >
                            <ImageContent
                                initial={{ top, height: CARD_HEIGHT, borderRadius: '1em' }}
                                animate={{
                                    top: 0,
                                    height: '20vh',
                                    borderRadius: '0em',
                                    transition: { duration: ENTER_DURATION },
                                }}
                                exit={{
                                    top,
                                    height: CARD_HEIGHT,
                                    borderRadius: '1em',
                                    transition: { duration: EXIT_DURATION },
                                }}
                            >
                                <StyledImage src={image} alt={imageAlt} />
                            </ImageContent>
                            <TextContent
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: ENTER_DURATION } }}
                                exit={{ opacity: 0, transition: { duration: EXIT_DURATION } }}
                            >
                                <button onClick={onClose}>close</button>
                            </TextContent>
                        </InnerWrapper>
                    </ContentWrapper>
                    <Background
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: ENTER_DURATION } }}
                        exit={{ opacity: 0, transition: { duration: EXIT_DURATION } }}
                    />
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default ExpandedCard;
