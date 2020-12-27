import React from 'react';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import { isMobile, isSafari } from 'react-device-detect';

import Home from 'apps/Home';
import Experience from 'apps/Experience';
import Projects from 'apps/Projects';
import Blog from 'apps/Blog';
import Contact from 'apps/Contact';

import Header from 'common/Header';
import ScrollProgress from 'common/ScrollProgress';

import { DARK_THEME } from 'utils/constants';
import pattern from 'pattern.png';

smoothscroll.polyfill();

const Wrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
`;

const BackgroundImage = styled.div`
    position: absolute;
    opacity: 0.5;
    height: 100vh;
    width: 100vw;
    background-image: url(${pattern});
    filter: brightness(0%);
    background-size: 100em auto;
    top: 0;
`;

interface State {
    startMobilePos: number;
    isTransitioning: boolean;
    currentPage: number;
    isCardSelected: boolean; // false after expanded card close animation is complete
    isCardExpanded: boolean; // false after close button is pressed on expanded card
    isScrolling: boolean;
    isScrollingDown: boolean;
    isInitialTransition: boolean;
}

class App extends React.Component<{}, State> {
    componentDidMount() {
        this.setCurrentPage();

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('hashchange', this.setCurrentPage);
        window.addEventListener('wheel', this.handleWheelScroll, { passive: false });
        window.addEventListener('touchstart', this.handleTouchStart);
        window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        window.addEventListener('keydown', this.handleKeyScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('hashchange', this.setCurrentPage);
        window.removeEventListener('wheel', this.handleWheelScroll);
        window.removeEventListener('touchstart', this.handleTouchStart);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('keydown', this.handleKeyScroll);
    }

    state: State = {
        startMobilePos: 0,
        isTransitioning: false,
        currentPage: -1,
        isCardSelected: false,
        isCardExpanded: false,
        isScrolling: false,
        isScrollingDown: false,
        isInitialTransition: true,
    };
    pages = ['home', 'experience', 'projects', 'blog', 'contact'];
    pageNames = ['Home', 'Experience', 'Projects', 'Blog', 'Contact'];
    isScrollingTimeout = 0;

    setCurrentPage = () => {
        const hash = window.location.hash;
        setTimeout(() => this.setState({ isInitialTransition: false }), 750);
        if (hash) {
            const currentPage = this.pages.indexOf(window.location.hash.slice(1));

            if (currentPage >= 0) {
                this.scrollToIndex(currentPage);
            } else {
                this.scrollToIndex(0);
            }
        } else {
            this.scrollToIndex(0);
        }
    };

    handleCardToggle = (isCardSelected: boolean, isCardExpanded: boolean) =>
        this.setState({ isCardSelected, isCardExpanded });

    handleResize = () => {
        const { currentPage } = this.state;
        this.scrollToIndex(currentPage);
    };

    handleWheelScroll = async (e: WheelEvent) => {
        const { isCardSelected } = this.state;
        if (isCardSelected) return;
        e.preventDefault();

        const isScrollingUp = e.deltaY < 0;
        isScrollingUp ? this.handleScroll('up') : this.handleScroll('down');

        // To help with natural scrolling
        window.clearTimeout(this.isScrollingTimeout);
        await this.setState({ isScrolling: true });

        this.isScrollingTimeout = setTimeout(() => this.setState({ isScrolling: false }), 66);
    };

    handleTouchStart = (e: TouchEvent) => this.setState({ startMobilePos: e.touches[0].clientY });

    handleTouchMove = (e: TouchEvent) => {
        const { startMobilePos, isCardSelected } = this.state;
        if (isCardSelected) return;
        e.preventDefault();

        const currMobilePos = e.touches[0].clientY;
        if (startMobilePos - currMobilePos < -100) {
            this.handleScroll('up');
        } else if (startMobilePos - currMobilePos > 100) {
            this.handleScroll('down');
        }
    };

    handleKeyScroll = (e: KeyboardEvent) => {
        const { isCardSelected } = this.state;
        if (isCardSelected) return;

        if (e.code === 'ArrowUp') {
            this.handleScroll('up');
        } else if (e.code === 'ArrowDown') {
            this.handleScroll('down');
        }
    };

    handleScroll = (direction: 'up' | 'down') => {
        let { currentPage, isTransitioning, isCardSelected, isScrolling } = this.state;
        if (isTransitioning || isCardSelected || isScrolling) {
            return;
        } else {
            this.setState({ isTransitioning: true });
            setTimeout(() => this.setState({ isTransitioning: false }), 750);
        }

        if (
            (direction === 'up' && currentPage === 0) ||
            (direction === 'down' && currentPage === this.pages.length - 1)
        )
            return;

        currentPage = direction === 'up' ? currentPage - 1 : currentPage + 1;

        this.scrollToIndex(currentPage);
    };

    scrollToIndex = async (index: number) => {
        const { currentPage } = this.state;
        if (currentPage === index) return;

        await this.setState({ isScrollingDown: index > currentPage });
        this.setState({ currentPage: index });
        const pageName = this.pages[index];

        window.location.hash = `#${pageName}`;
    };

    render() {
        const { currentPage, isCardExpanded, isScrollingDown, isInitialTransition } = this.state;

        return (
            <ThemeProvider theme={DARK_THEME}>
                <Wrapper id="parent-wrapper">
                    {!isMobile && !isSafari && <BackgroundImage />}
                    <Header pageNames={this.pageNames} scrollToIndex={this.scrollToIndex} />
                    <ScrollProgress
                        scrollToIndex={this.scrollToIndex}
                        currentPage={currentPage}
                        pages={this.pages}
                        isCardExpanded={isCardExpanded}
                    />
                    {currentPage >= 0 && (
                        <>
                            <Home
                                onCardToggle={this.handleCardToggle}
                                showContents={currentPage === 0}
                                isScrollingDown={isScrollingDown}
                                isInitialTransition={isInitialTransition}
                            />
                            <Experience
                                onCardToggle={this.handleCardToggle}
                                showContents={currentPage === 1}
                                isScrollingDown={isScrollingDown}
                                isInitialTransition={isInitialTransition}
                            />
                            <Projects
                                onCardToggle={this.handleCardToggle}
                                showContents={currentPage === 2}
                                isScrollingDown={isScrollingDown}
                                isInitialTransition={isInitialTransition}
                            />
                            <Blog
                                onCardToggle={this.handleCardToggle}
                                showContents={currentPage === 3}
                                isScrollingDown={isScrollingDown}
                                isInitialTransition={isInitialTransition}
                            />
                            <Contact
                                onCardToggle={this.handleCardToggle}
                                showContents={currentPage === 4}
                                isScrollingDown={isScrollingDown}
                                isInitialTransition={isInitialTransition}
                            />
                        </>
                    )}
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default App;
