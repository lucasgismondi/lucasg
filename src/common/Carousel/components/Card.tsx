import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CARD_HEIGHT, CARD_WIDTH, CONTENT_WIDTH } from '../constants';

const Wrapper = styled(motion.div)<{ show: boolean }>`
    border-radius: 1em;
    opacity: ${(props) => (props.show ? 0 : 1)};

    width: ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    margin-top: 2em;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const StyledImage = styled.img`
    width: ${CONTENT_WIDTH};
`;

export interface CardObject {
    title: string;
    subTitle: string;
    image: string;
    imageAlt: string;
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
    const { image, imageAlt } = cardObject;

    return (
        <Wrapper className={`swiper-slide ${className}`} id={id} onClick={() => onClick()} show={show}>
            <StyledImage src={image} alt={imageAlt} />
        </Wrapper>
    );
};

export default Card;
