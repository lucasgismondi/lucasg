import React from 'react';
import 'swiper/css/swiper.css';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import { isUndefined } from 'lodash';
import { isMobile, isSafari } from 'react-device-detect';
import { motion } from 'framer-motion';

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

const Wrapper = styled(motion.div)`
    position: absolute;
    width: 100vw;
    height: fit-content;
    background-color: ${(props) => props.theme.background};
`;

const BackgroundImage = styled.div`
    position: absolute;
    height: 100%;
    width: 100vw;
    background-image: url(${pattern});
    filter: brightness(0%);
    background-size: 100em auto;
    top: 0;
`;

interface State {
    startMobilePos: number;
    isTransitioning: boolean;
    isNavigating: boolean;
    currentPage: number;
    isCardSelected: boolean; // false after expanded card close animation is complete
    isCardExpanded: boolean; // false after close button is pressed on expanded card
    top: number;
}

class App extends React.Component<{}, State> {
    componentDidMount() {
        this.setCurrentPage();

        window.addEventListener('wheel', this.handleWheelScroll, { passive: false });
        window.addEventListener('touchstart', this.handleTouchStart);
        window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleWheelScroll);
        window.removeEventListener('touchstart', this.handleTouchStart);
        window.removeEventListener('touchmove', this.handleTouchMove);
    }

    state: State = {
        startMobilePos: 0,
        isTransitioning: false,
        isNavigating: false,
        currentPage: 0,
        isCardSelected: false,
        isCardExpanded: false,
        top: 0,
    };
    pages = ['home', 'experience', 'projects', 'blog', 'contact'];
    pageNames = ['Home', 'Experience', 'Projects', 'Blog', 'Contact'];

    setCurrentPage = () => {
        const hash = window.location.hash;
        if (hash) {
            const currentPage = this.pages.indexOf(window.location.hash.slice(1));

            if (currentPage >= 0) {
                this.setState({ isNavigating: true });
                setTimeout(() => this.setState({ isNavigating: false }), 500);
                this.setState({ currentPage });
            }
        }
    };

    handleCardToggle = (isCardSelected: boolean, isCardExpanded: boolean) =>
        this.setState({ isCardSelected, isCardExpanded });

    handleWheelScroll = (e: WheelEvent) => {
        const { isCardSelected } = this.state;
        if (isCardSelected) return;
        e.preventDefault();

        if (Math.abs(e.deltaY) < 100) return; // To help with natural scrolling

        const isScrollingUp = e.deltaY < 0;
        isScrollingUp ? this.handleScroll('up') : this.handleScroll('down');
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

    handleScroll = (direction: 'up' | 'down') => {
        let { currentPage, isTransitioning, isNavigating, isCardSelected } = this.state;
        if (isTransitioning || isNavigating || isCardSelected) {
            return;
        } else {
            this.setState({ isTransitioning: true });
            setTimeout(() => this.setState({ isTransitioning: false }), 500);
        }

        if (
            (direction === 'up' && currentPage === 0) ||
            (direction === 'down' && currentPage === this.pages.length - 1)
        )
            return;

        currentPage = direction === 'up' ? currentPage - 1 : currentPage + 1;

        this.scrollToIndex(currentPage);
    };

    scrollToIndex = (index: number, isNavigating: boolean = false) => {
        if (isNavigating) {
            this.setState({ isNavigating: true });
            setTimeout(() => this.setState({ isNavigating: false }), 500);
        }
        this.setState({ currentPage: index });
        const pageName = this.pages[index];

        if (isMobile || isSafari) {
            const parentWrapperTop = document.getElementById('parent-wrapper')?.getBoundingClientRect().top;
            const sectionTop = document.getElementById(pageName)?.getBoundingClientRect().top;

            if (isUndefined(sectionTop) || isUndefined(parentWrapperTop)) return;
            const newTop = sectionTop - parentWrapperTop;
            window.scrollTo({
                top: newTop,
                behavior: 'smooth',
            });
        }
        window.location.hash = `#${pageName}`;
    };

    render() {
        const { top, currentPage, isCardExpanded, isNavigating } = this.state;

        return (
            <ThemeProvider theme={DARK_THEME}>
                <Wrapper id="parent-wrapper" initial={{ top }} animate={{ top, transition: { duration: 0.75 } }}>
                    <BackgroundImage />
                    <Header pageNames={this.pageNames} scrollToIndex={this.scrollToIndex} />
                    <ScrollProgress
                        scrollToIndex={this.scrollToIndex}
                        currentPage={currentPage}
                        pages={this.pages}
                        isCardExpanded={isCardExpanded}
                    />
                    <Home onCardToggle={this.handleCardToggle} showContents={currentPage === 0 || isNavigating} />
                    <Experience onCardToggle={this.handleCardToggle} showContents={currentPage === 1 || isNavigating} />
                    <Projects onCardToggle={this.handleCardToggle} showContents={currentPage === 2 || isNavigating} />
                    <Blog onCardToggle={this.handleCardToggle} showContents={currentPage === 3 || isNavigating} />
                    <Contact onCardToggle={this.handleCardToggle} showContents={currentPage === 4 || isNavigating} />
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default App;
