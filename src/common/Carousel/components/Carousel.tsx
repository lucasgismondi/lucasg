import React from 'react';
import { ReactIdSwiperProps, SwiperInstance } from 'react-id-swiper';
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
    swiper: SwiperInstance;
    hideExpandedCardCompletely: boolean;
}

class Carousel extends React.Component<Props, State> {
    componentDidMount() {
        NavigateEmitter.addListener('navigating', this.handleNavigating);
        window.addEventListener('keydown', this.handleEnterKey);
    }

    componentWillUnmount() {
        NavigateEmitter.removeListener('navigating', this.handleNavigating);
        window.removeEventListener('keydown', this.handleEnterKey);
    }

    handleNavigating = () => {
        this.handleClose();
        this.handleExitComplete();
        this.setState({ hideExpandedCardCompletely: true });
        setTimeout(() => this.setState({ hideExpandedCardCompletely: false }), 250);
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
        swiper: null,
        hideExpandedCardCompletely: false,
    };

    params: ReactIdSwiperProps = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        keyboard: true,
        on: {
            transitionEnd: () => {
                const { swiper } = this.state;
                if (swiper) this.setState({ activeIndex: swiper.activeIndex });
            },
        },
        coverflowEffect: {
            rotate: 25,
            stretch: -50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        getSwiper: (swiper) => this.setState({ swiper }),
    };

    handleSelect = async (index: number) => {
        const { cards } = this.props;
        const { activeIndex, swiper } = this.state;

        const { link } = cards[index];
        if (link) {
            window.open(link, '_blank', 'noopener noreferrer');
            return;
        }

        if (activeIndex === index) {
            this.handleOpen(index);
        } else if (swiper) {
            swiper.slideTo(index, 500);
            setTimeout(async () => this.handleOpen(index), 500);
        }
    };

    handleOpen = async (index: number) => {
        const { onCardToggle } = this.props;

        onCardToggle(true, true);
        // await this set state to hide the card selected inside the Swiper component
        await this.setState({ selectedIndex: index });
        this.setState({ isCardExpanded: true });
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
                hasClickMeAnimation={i === 0}
            />
        ));
    };

    render() {
        const { id, title, cards } = this.props;
        const { selectedIndex, isCardExpanded, activeIndex, hideExpandedCardCompletely } = this.state;
        return (
            <Wrapper>
                {!hideExpandedCardCompletely && (
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
                                <Swiper {...this.params} initialSlide={activeIndex}>
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
