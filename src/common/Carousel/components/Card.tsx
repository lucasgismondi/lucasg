import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CARD_HEIGHT, CARD_WIDTH } from '../constants';

const Wrapper = styled(motion.div)<{ show: boolean; backgroundColor: string }>`
    position: relative;
    border-radius: 1em;
    opacity: ${(props) => (props.show ? 0 : 1)};
    background-color: ${(props) => props.backgroundColor};

    width: ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    margin: 2em 0 2em 0;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const HeadingWrapper = styled.div<{ color: string }>`
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
}

interface Props {
    id: string;
    className?: string;
    cardObject: CardObject;
    onClick: Function;
    show: boolean;
}

const Card: React.FC<Props> = ({ className, id, cardObject, onClick, show }) => {
    const { ImageComponent, imageBackgroundColor, imageTextColor, title, subTitle } = cardObject;

    return (
        <Wrapper
            className={`swiper-slide ${className}`}
            id={id}
            onClick={() => onClick()}
            show={show}
            backgroundColor={imageBackgroundColor}
        >
            {ImageComponent}
            <HeadingWrapper color={imageTextColor}>
                <h4>
                    <i>{title}</i>
                </h4>
                <h4>
                    <i>{subTitle}</i>
                </h4>
            </HeadingWrapper>
        </Wrapper>
    );
};

export default Card;
