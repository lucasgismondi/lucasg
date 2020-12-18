import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
`;

interface Props {
    id: string;
}

const Page: React.FC<Props> = ({ id, children }) => {
    return <Wrapper id={id}>{children}</Wrapper>;
};

export default Page;
