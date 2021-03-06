import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { isSafari, isBrowser, isMobile } from 'react-device-detect';

import { CardObject } from './Card';
import Icon from 'common/Icon';
import Break from 'common/Break';

import { CARD_HEIGHT, CARD_WIDTH, ENTER_DURATION, EXIT_DURATION } from '../constants';

const Wrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    top: 0;
    background-color: ${'#FFFFFF00'};
`;

const ContentWrapper = styled.div<{ isClosing: boolean }>`
    position: absolute;
    z-index: 100;
    height: 100vh;
    width: 100vw;
    background-color: ${'#FFFFFF00'};
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
`;

const ExitButtonWrapper = styled(motion.div)`
    position: fixed;
    z-index: 200;
    top: 2em;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
`;

const ExitButton = styled(motion.button)`
    border: none;
    background-color: white;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    opacity: 0.75;
    margin: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageContent = styled(motion.div)<{ backgroundColor: string }>`
    position: relative;
    top: 0;
    background-color: ${(props) => props.backgroundColor};
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const HeadingWrapper = styled(motion.div)`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 1em;
    max-width: calc(${CARD_WIDTH} - 2em);
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TextContent = styled(motion.div)`
    padding: 1em;
    max-width: 1000px;
`;

interface Props {
    searchID: string;
    cardObject: CardObject;
    onClose: () => void;
    onExitComplete: () => void;
    show: boolean;
}
let initialTop: number = 0;

const ExpandedCard: React.FC<Props> = ({ searchID, cardObject, onClose, onExitComplete, show }) => {
    const [exitTop, setExitTop] = useState<number>(0);
    const [isClosing, setIsClosing] = useState(false);

    if (show) {
        const element = document.getElementById(searchID);
        if (element) initialTop = element.getBoundingClientRect().top;
    }

    useEffect(() => {
        if (isSafari && isBrowser) {
            const element = document.querySelector('#parent-wrapper');
            // @ts-ignore
            disableBodyScroll(element);

            return () => {
                // @ts-ignore
                enableBodyScroll(element);
            };
        }
    }, []);

    const handleClose = async () => {
        const element = document.getElementById('expanded-card-content');
        if (element) await setExitTop(initialTop - element.getBoundingClientRect().top);
        await setIsClosing(true);
        onClose();
        setIsClosing(false);
    };

    const { ImageComponent, imageBackgroundColor, title, subTitle, imageTextColor, content } = cardObject;
    return (
        <AnimatePresence onExitComplete={onExitComplete}>
            {show && (
                <Wrapper>
                    <ExitButtonWrapper>
                        <ExitButton
                            onClick={handleClose}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.5, duration: ENTER_DURATION } }}
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        >
                            <Icon name="close" color="black" />
                        </ExitButton>
                    </ExitButtonWrapper>
                    <ContentWrapper isClosing={isClosing}>
                        <InnerWrapper
                            id="expanded-card-content"
                            initial={{ top: initialTop, height: CARD_HEIGHT, width: CARD_WIDTH, scale: 1 }}
                            animate={{
                                top: 0,
                                height: '100vh',
                                width: '100vw',
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
                                backgroundColor={imageBackgroundColor}
                                initial={{ height: CARD_HEIGHT, borderRadius: '1em' }}
                                animate={{
                                    height: '20vh',
                                    borderRadius: '0em',
                                    transition: { duration: ENTER_DURATION },
                                }}
                                exit={{
                                    height: CARD_HEIGHT,
                                    borderRadius: '1em',
                                    transition: { duration: EXIT_DURATION },
                                }}
                            >
                                {ImageComponent}
                                <HeadingWrapper
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0, transition: { duration: ENTER_DURATION } }}
                                    exit={{ opacity: 1, transition: { duration: EXIT_DURATION } }}
                                >
                                    <h4 className="header" style={{ color: imageTextColor }}>
                                        {title}
                                    </h4>
                                    <h5 className="subheader" style={{ color: imageTextColor }}>
                                        {subTitle}
                                    </h5>
                                </HeadingWrapper>
                            </ImageContent>
                            <TextWrapper>
                                <TextContent
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { delay: ENTER_DURATION, duration: ENTER_DURATION },
                                    }}
                                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                >
                                    {content}
                                    {isMobile && <Break numBreaks={6} />}
                                </TextContent>
                            </TextWrapper>
                        </InnerWrapper>
                    </ContentWrapper>
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default ExpandedCard;
