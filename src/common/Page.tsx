import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

interface Props {
    id: string;
    title: string;
}

const Page: React.FC<Props> = ({ id, title, children }) => {
    return (
        <Wrapper id={id}>
            <div>{title}</div>
            <div>{children}</div>
        </Wrapper>
    );
};

export default Page;
