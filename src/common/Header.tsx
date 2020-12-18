import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 100;
`;

const InnerWrapper = styled.div`
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconButton = styled.button`
    display: flex;
    align-items: center;
`;

const Header: React.FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <button>Lucas Gismondi</button>
                <IconButton>
                    <Icon name="menu" fontSize={1.7} />
                </IconButton>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Header;
