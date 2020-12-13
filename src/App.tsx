import React from 'react';
import './App.css';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';
import { isUndefined } from 'lodash';

import Experience from 'apps/Experience';
import Projects from 'apps/Projects';
import Blog from 'apps/Blog';
import Contact from 'apps/Contact';
import Extra from 'apps/Extra';

smoothscroll.polyfill();

const Wrapper = styled.div``;

interface State {
    startMobilePos: number;
    isTransitioning: boolean;
    currentPage: number;
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
    };
    pages = ['experience', 'projects', 'blog', 'contact', 'extra'];

    setCurrentPage = () => {
        const hash = window.location.hash;
        if (hash) {
            const currentPage = this.pages.indexOf(window.location.hash.slice(1));

            if (currentPage >= 0) this.setState({ currentPage });
        }
    };

    handleWheelScroll = (e: WheelEvent) => {
        const isScrollingUp = e.deltaY < 0;
        isScrollingUp ? this.handleScroll('up') : this.handleScroll('down');
    };

    handleTouchStart = (e: TouchEvent) => this.setState({ startMobilePos: e.touches[0].clientY });

    handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const { startMobilePos } = this.state;

        const currMobilePos = e.touches[0].clientY;
        const isScrollingUp = startMobilePos - currMobilePos < 0;
        isScrollingUp ? this.handleScroll('up', true) : this.handleScroll('down', true);
    };

    handleScroll = (direction: 'up' | 'down', isMobile: boolean = false) => {
        let { currentPage, isTransitioning } = this.state;
        if (isTransitioning) {
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
        return (
            <Wrapper id="parent-wrapper">
                <Experience />
                <Projects />
                <Blog />
                <Contact />
                <Extra />
            </Wrapper>
        );
    }
}

export default App;
