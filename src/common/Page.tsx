import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.background};
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

interface Props {
    id: string;
    title: string;
}

const Page: React.FC<Props> = ({ id, title, children }) => {
    return (
        <Wrapper id={id}>
            <HeaderWrapper>
                <h1>{title}</h1>
            </HeaderWrapper>
            <div>{children}</div>
        </Wrapper>
    );
};

export default Page;
