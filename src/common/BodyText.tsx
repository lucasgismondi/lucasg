import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 0.9em;
`;

interface Props {
    className?: string;
}

const BodyText: React.FC<Props> = ({ className, children }) => {
    return <Wrapper className={className}>{children}</Wrapper>;
};

export default BodyText;
