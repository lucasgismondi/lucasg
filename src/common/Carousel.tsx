import React from 'react';
import { ReactIdSwiperProps } from 'react-id-swiper';
import { isNull } from 'lodash';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

import Card, { CardObject } from './Card';
import ExpandedCard from './ExpandedCard';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`;

interface Props {
    id: string;
    cards: CardObject[];
    onCardToggle: Function;
}

interface State {
    selectedIndex: number | null;
    activeIndex: number;
    isCardExpanded: boolean;
}

class Carousel extends React.Component<Props, State> {
    state: State = {
        selectedIndex: null,
        activeIndex: 0,
        isCardExpanded: false,
    };
    swiper = null;

    params: ReactIdSwiperProps = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        on: {
            slideChangeTransitionEnd: () => {
                // @ts-ignore
                this.swiper.childNodes[0].childNodes.forEach((card, i) => {
                    if (card.className.includes('swiper-slide-active')) {
                        this.setState({ activeIndex: i });
                    }
                });
            },
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    };

    handleSelect = (index: number) => {
        const { onCardToggle } = this.props;
        const { activeIndex } = this.state;

        onCardToggle(true);
        activeIndex === index && this.setState({ selectedIndex: index, isCardExpanded: true });
    };

    handleClose = () => this.setState({ isCardExpanded: false });

    handleExitComplete = () => {
        const { onCardToggle } = this.props;

        onCardToggle(false);
        this.setState({ selectedIndex: null });
    };

    renderCards = () => {
        const { id, cards } = this.props;
        const { selectedIndex } = this.state;

        return cards.map((card, i) => (
            <Card
                key={i}
                id={`${id}${i}`}
                cardObject={card}
                onClick={() => this.handleSelect(i)}
                show={selectedIndex === i}
            />
        ));
    };

    render() {
        const { id, cards } = this.props;
        const { selectedIndex, isCardExpanded } = this.state;

        return (
            <Wrapper>
                <ExpandedCard
                    searchID={`${id}${selectedIndex}`}
                    cardObject={isNull(selectedIndex) ? null : cards[selectedIndex]}
                    onClose={this.handleClose}
                    onExitComplete={this.handleExitComplete}
                    show={isCardExpanded}
                />
                <Swiper {...this.params} ref={(o: any) => (this.swiper = o)}>
                    {this.renderCards()}
                </Swiper>
            </Wrapper>
        );
    }
}
export default Carousel;
