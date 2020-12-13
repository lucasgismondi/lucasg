import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
`;

interface Props {
    id: string;
    children: ReactNode;
}

const Page: React.FC<Props> = ({ id, children }) => {
    return <Wrapper id={id}>{children}</Wrapper>;
};

export default Page;
