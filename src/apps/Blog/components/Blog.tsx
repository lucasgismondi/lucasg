import React from 'react';
import styled from 'styled-components';

import Page from 'common/Page';
import Carousel from 'common/Carousel';
import Link from 'common/Link';

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
                        ImageComponent: (
                            <Link
                                href={
                                    'https://medium.com/loopio-product/my-experience-as-loopios-first-intern-ever-a891967777f4'
                                }
                                hoverAnimation={false}
                            >
                                <LoopioBlogImage src={loopioBlogImage} alt="loopio-blog" />
                            </Link>
                        ),
                        imageBackgroundColor: '#FFFFFF',
                        imageTextColor: 'white',
                        content: null,
                        isLocked: true,
                    },
                ]}
                onCardToggle={onCardToggle}
            />
        </Page>
    );
};

export default Blog;
