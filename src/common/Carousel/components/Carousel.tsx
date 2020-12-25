import React from 'react';
import { ReactIdSwiperProps } from 'react-id-swiper';
import { isNull } from 'lodash';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import Card, { CardObject } from './Card';
import ExpandedCard from './ExpandedCard';
import { EXIT_DURATION } from '../constants';

import { NavigateEmitter } from 'common/Header/components/Header';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const ContentWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const SwiperWrapper = styled.div`
    width: 100%;
`;

interface Props {
    id: string;
    title: string;
    cards: CardObject[];
    onCardToggle: Function;
}

interface State {
    selectedIndex: number | null;
    activeIndex: number;
    isCardExpanded: boolean;
    isNavigating: boolean;
}

class Carousel extends React.Component<Props, State> {
    componentDidMount() {
        // fixing weird bug that keeps isNavigating to true after navigation
        this.setState({ isNavigating: false });
        NavigateEmitter.addListener('navigating', this.handleNavigating);
        window.addEventListener('keydown', this.handleEnterKey);
    }

    componentWillUnmount() {
        NavigateEmitter.removeListener('navigating', this.handleNavigating);
        window.removeEventListener('keydown', this.handleEnterKey);
    }

    handleNavigating = () => {
        this.setState({ isNavigating: true, selectedIndex: null, isCardExpanded: false });
    };

    handleEnterKey = (e: KeyboardEvent) => {
        let activeElement = document.activeElement;
        if (activeElement && activeElement.className.includes('swiper-slide') && e.code === 'Enter') {
            const { activeIndex } = this.state;

            let index = 0;
            while ((activeElement = activeElement.previousSibling as Element) != null) index++;
            if (activeIndex === index) this.handleSelect(activeIndex);
        }
    };

    state: State = {
        selectedIndex: null,
        activeIndex: 0,
        isCardExpanded: false,
        isNavigating: false,
    };
    swiper = null;

    params: ReactIdSwiperProps = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        keyboard: true,
        on: {
            transitionEnd: () => {
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
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    };

    handleSelect = async (index: number) => {
        const { onCardToggle, cards } = this.props;
        const { activeIndex } = this.state;

        if (activeIndex === index) {
            const { link } = cards[index];
            if (link) {
                window.open(link, '_blank', 'noopener noreferrer');
                return;
            }

            onCardToggle(true, true);
            // await this set state to hide the card selected inside the Swiper component
            await this.setState({ selectedIndex: index });
            this.setState({ isCardExpanded: true });
        }
    };

    handleClose = () => {
        const { onCardToggle } = this.props;

        onCardToggle(true, false);
        this.setState({ isCardExpanded: false });
    };

    handleExitComplete = () => {
        const { onCardToggle } = this.props;

        onCardToggle(false, false);
        this.setState({ selectedIndex: null });
    };

    renderCards = () => {
        const { id, cards } = this.props;
        const { selectedIndex, activeIndex } = this.state;

        return cards.map((card, i) => (
            <Card
                key={i}
                id={`${id}${i}`}
                cardObject={card}
                onClick={() => this.handleSelect(i)}
                show={selectedIndex === i}
                tabIndex={activeIndex === i ? 0 : undefined}
                hasClickMeAnimation={false}
            />
        ));
    };

    render() {
        const { id, title, cards } = this.props;
        const { selectedIndex, isCardExpanded, activeIndex, isNavigating } = this.state;
        return (
            <Wrapper>
                {!isNavigating && (
                    <ExpandedCard
                        searchID={`${id}${selectedIndex}`}
                        cardObject={isNull(selectedIndex) ? cards[0] : cards[selectedIndex]}
                        onClose={this.handleClose}
                        onExitComplete={this.handleExitComplete}
                        show={isCardExpanded}
                    />
                )}
                <AnimatePresence>
                    {!isCardExpanded && (
                        <ContentWrapper
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.6 } }}
                            exit={{ opacity: 0, transition: { duration: EXIT_DURATION } }}
                        >
                            <HeaderWrapper>
                                <h1 className="header">{title}</h1>
                            </HeaderWrapper>
                            <SwiperWrapper>
                                <Swiper {...this.params} initialSlide={activeIndex} ref={(o: any) => (this.swiper = o)}>
                                    {this.renderCards()}
                                </Swiper>
                            </SwiperWrapper>
                        </ContentWrapper>
                    )}
                </AnimatePresence>
            </Wrapper>
        );
    }
}
export default Carousel;
