import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CARD_HEIGHT, CARD_WIDTH } from '../constants';

const Wrapper = styled(motion.div)<{ show: boolean; backgroundColor: string }>`
    border-radius: 1em;
    opacity: ${(props) => (props.show ? 0 : 1)};
    background-color: ${(props) => props.backgroundColor};

    width: ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    margin-top: 2em;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export interface CardObject {
    title: string;
    subTitle: string;
    ImageComponent: ReactNode;
    imageBackgroundColor: string;
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
    const { ImageComponent, imageBackgroundColor } = cardObject;

    return (
        <Wrapper
            className={`swiper-slide ${className}`}
            id={id}
            onClick={() => onClick()}
            show={show}
            backgroundColor={imageBackgroundColor}
        >
            {ImageComponent}
        </Wrapper>
    );
};

export default Card;
