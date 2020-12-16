import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)<{ show: boolean }>`
    border-radius: 1em;
    background-color: black;
    opacity: ${(props) => (props.show ? 0 : 1)};

    width: 45vh;
    height: 75vh;
`;

export interface CardObject {
    title: string;
    subTitle: string;
    content: ReactNode;
}

interface Props {
    id: string;
    className?: string;
    cardObject: CardObject | null;
    onClick: Function;
    show: boolean;
}

const Card: React.FC<Props> = ({ className, id, cardObject, onClick, show }) => {
    return (
        <Wrapper className={`swiper-slide ${className}`} id={id} onClick={() => onClick()} show={show}>
            card component
        </Wrapper>
    );
};

export default Card;
