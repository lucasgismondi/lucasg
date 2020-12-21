import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.a)<{ textColor: string }>`
    color: ${(props) => props.textColor};
`;

interface Props {
    href: string;
    textColor?: string;
    newTab?: boolean;
}

const Link: React.FC<Props> = ({ href, textColor = 'white', newTab = true, children }) => {
    return (
        <Wrapper
            href={href}
            textColor={textColor}
            target={newTab ? '_blank' : ''}
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.5 }}
        >
            {children}
        </Wrapper>
    );
};

export default Link;
