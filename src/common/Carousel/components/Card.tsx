import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CARD_HEIGHT, CARD_WIDTH } from '../constants';

const Wrapper = styled(motion.div)<{ show: boolean; backgroundColor: string; color: string }>`
    position: relative;
    border-radius: 1em;
    opacity: ${(props) => (props.show ? 0 : 1)};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    width: ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    margin: 2em 0 2em 0;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const ClickMeWrapper = styled(motion.div)`
    position: absolute;
    top: 5em;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const HeadingWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1em;
    color: ${(props) => props.color};
`;

export interface CardObject {
    title: string;
    subTitle: string;
    ImageComponent: ReactNode;
    imageBackgroundColor: string;
    imageTextColor: string;
    content: ReactNode;
    link?: string;
}

interface Props {
    id: string;
    className?: string;
    cardObject: CardObject;
    onClick: Function;
    show: boolean;
    tabIndex?: number;
    hasClickMeAnimation?: boolean;
}

let didClickOnce = false;

const Card: React.FC<Props> = ({ className, id, cardObject, onClick, show, tabIndex, hasClickMeAnimation }) => {
    const { ImageComponent, imageBackgroundColor, imageTextColor, title, subTitle } = cardObject;

    const handleClick = () => {
        didClickOnce = true;
        onClick();
    };

    return (
        <Wrapper
            className={`swiper-slide ${className}`}
            id={id}
            onClick={handleClick}
            show={show}
            backgroundColor={imageBackgroundColor}
            color={imageTextColor}
            tabIndex={tabIndex}
        >
            {hasClickMeAnimation && !didClickOnce && (
                <ClickMeWrapper animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <b>Click Me!</b>
                </ClickMeWrapper>
            )}
            {ImageComponent}
            <HeadingWrapper>
                <h4>{title}</h4>
                <h5>{subTitle}</h5>
            </HeadingWrapper>
        </Wrapper>
    );
};

export default Card;
