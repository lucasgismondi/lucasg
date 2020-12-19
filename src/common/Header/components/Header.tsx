import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
`;

const InnerWrapper = styled.div`
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header: React.FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <button>Lucas Gismondi</button>
                <Menu />
            </InnerWrapper>
        </Wrapper>
    );
};

export default Header;
