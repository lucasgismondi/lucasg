import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { CardObject } from './Card';
import Icon from 'common/Icon';
import pattern from 'pattern.png';

import { CARD_HEIGHT, CARD_WIDTH, CONTENT_WIDTH, ENTER_DURATION, EXIT_DURATION } from '../constants';

const Wrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    top: 0;
    background-color: ${'#ffffff00'};
`;

const Background = styled(motion.div)<{ parentWrapperTop: number }>`
    top: ${(props) => props.parentWrapperTop}px;
    position: absolute;
    height: 1000vh;
    width: 100vw;
    background-color: ${(props) => props.theme.background};
`;

const BackgroundImage = styled.div`
    height: 100%;
    width: 100vw;
    background-image: url(${pattern});
    filter: brightness(0%);
    background-size: 100em auto;
`;

const ContentWrapper = styled.div<{ isClosing: boolean }>`
    position: absolute;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: ${'#ffffff00'};
    display: flex;
    justify-content: center;

    overflow-y: ${(props) => (props.isClosing ? 'hidden' : 'scroll')};
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

const ExitButtonWrapper = styled(motion.div)`
    position: fixed;
    z-index: 100;
    top: 0;
    width: ${CONTENT_WIDTH};
    max-width: 100vw;
    display: flex;
    justify-content: flex-end;
`;

const ExitButton = styled(motion.button)`
    border: none;
    background-color: grey;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    opacity: 0.75;
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
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
    onClose: () => void;
    onExitComplete: () => void;
    show: boolean;
}

const ExpandedCard: React.FC<Props> = ({ searchID, cardObject, onClose, onExitComplete, show }) => {
    let initialTop: number = 0;
    let parentWrapperTop: number = 0;
    const [exitTop, setExitTop] = useState<number>(0);
    const [isClosing, setIsClosing] = useState(false);

    if (show) {
        const element = document.getElementById(searchID);
        if (element) initialTop = element.getBoundingClientRect().top;

        const parentWrapper = document.getElementById('parent-wrapper');
        if (parentWrapper) parentWrapperTop = parentWrapper.getBoundingClientRect().top;
    }

    const handleClose = async () => {
        const element = document.getElementById('expanded-card-content');
        if (element) await setExitTop(initialTop - element.getBoundingClientRect().top);
        await setIsClosing(true);
        onClose();
        setIsClosing(false);
    };

    const { image, imageAlt } = cardObject;
    return (
        <AnimatePresence onExitComplete={onExitComplete}>
            {show && (
                <Wrapper>
                    <ContentWrapper isClosing={isClosing}>
                        <ExitButtonWrapper>
                            <ExitButton
                                onClick={handleClose}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.5, duration: ENTER_DURATION } }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            >
                                <Icon name="close" />
                            </ExitButton>
                        </ExitButtonWrapper>
                        <InnerWrapper
                            id="expanded-card-content"
                            initial={{ top: initialTop, height: CARD_HEIGHT, width: CARD_WIDTH, scale: 1 }}
                            animate={{
                                top: 0,
                                height: '100vh',
                                width: CONTENT_WIDTH,
                                scale: [1, 0.9, 1, 1, 1],
                                transition: { duration: ENTER_DURATION },
                            }}
                            exit={{
                                top: exitTop,
                                height: CARD_HEIGHT,
                                width: CARD_WIDTH,
                                scale: 1,
                                transition: { duration: EXIT_DURATION },
                            }}
                        >
                            <ImageContent
                                initial={{ top: initialTop, height: CARD_HEIGHT, borderRadius: '1em' }}
                                animate={{
                                    top: 0,
                                    height: '20vh',
                                    borderRadius: '0em',
                                    transition: { duration: ENTER_DURATION },
                                }}
                                exit={{
                                    top: exitTop,
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
                            />
                        </InnerWrapper>
                    </ContentWrapper>
                    <Background
                        parentWrapperTop={parentWrapperTop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: ENTER_DURATION } }}
                        exit={{ opacity: 0, transition: { duration: EXIT_DURATION } }}
                    >
                        <BackgroundImage />
                    </Background>
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default ExpandedCard;
