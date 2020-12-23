import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel';

import loopioBlogImage from '../assets/loopioBlogCover.jpg';

const LoopioBlogImage = styled.img`
    width: 81vh;
`;

interface Props {
    onCardToggle: Function;
    showContents: boolean;
    isNavigating: boolean;
}

const Blog: React.FC<Props> = ({ onCardToggle, showContents, isNavigating }) => {
    return (
        <Page id="blog" showContents={showContents} isNavigating={isNavigating}>
            <Carousel
                id="blog"
                title="Blog"
                cards={[
                    {
                        title: "My Experience as Loopio's First-Ever Intern",
                        subTitle: '',
                        ImageComponent: <LoopioBlogImage src={loopioBlogImage} alt="loopio-blog" />,
                        imageBackgroundColor: '#FFFFFF',
                        imageTextColor: 'white',
                        content: null,
                        link:
                            'https://medium.com/loopio-product/my-experience-as-loopios-first-intern-ever-a891967777f4',
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Blog;
