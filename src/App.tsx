import React from 'react';
import 'swiper/css/swiper.css';
import './App.css';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import { isUndefined } from 'lodash';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';

import Experience from 'apps/Experience';
import Projects from 'apps/Projects';
import Blog from 'apps/Blog';
import Contact from 'apps/Contact';
import Extra from 'apps/Extra';

smoothscroll.polyfill();

const Wrapper = styled(motion.div)`
    position: absolute;
    width: 100vw;
    height: 100vh;
`;

interface State {
    startMobilePos: number;
    isTransitioning: boolean;
    currentPage: number;
    isCardSelected: boolean;
    top: number;
}

class App extends React.Component<{}, State> {
    componentDidMount() {
        this.setCurrentPage();

        window.addEventListener('wheel', this.handleWheelScroll);
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
        currentPage: 0,
        isCardSelected: false,
        top: 0,
    };
    pages = ['experience', 'projects', 'blog', 'contact', 'extra'];

    setCurrentPage = () => {
        const hash = window.location.hash;
        if (hash) {
            const currentPage = this.pages.indexOf(window.location.hash.slice(1));

            if (currentPage >= 0) this.setState({ currentPage });
        }
    };

    handleCardToggle = (isCardSelected: boolean) => this.setState({ isCardSelected });

    handleWheelScroll = (e: WheelEvent) => {
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
        let { currentPage, isTransitioning, isCardSelected } = this.state;
        if (isTransitioning || isCardSelected) {
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
        this.setState({ currentPage });
        const pageName = this.pages[currentPage];

        if (isMobile) {
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
        const { top } = this.state;

        return (
            <Wrapper id="parent-wrapper" initial={{ top }} animate={{ top, transition: { duration: 0.75 } }}>
                <Experience onCardToggle={this.handleCardToggle} />
                <Projects onCardToggle={this.handleCardToggle} />
                <Blog onCardToggle={this.handleCardToggle} />
                <Contact onCardToggle={this.handleCardToggle} />
                <Extra onCardToggle={this.handleCardToggle} />
            </Wrapper>
        );
    }
}

export default App;
