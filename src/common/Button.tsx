import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Props {
    className?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    hoverAnimation?: boolean;
}

const InnerWrapper = styled.div`
    width: fit-content;
`;

const Underline = styled(motion.div)`
    height: 0.3em;
    width: 100%;
    background-color: white;
`;

const Button: React.FC<Props> = ({ className, onClick, hoverAnimation = true, children }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <button
            className={className}
            onClick={onClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <InnerWrapper>
                {children}
                {hoverAnimation && <Underline animate={{ opacity: isHovering ? 1 : 0 }} />}
            </InnerWrapper>
        </button>
    );
};

export default Button;
