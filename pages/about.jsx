import React from 'react'
import Head from 'next/head'

import { RafLoop } from '../utils/rafLoop'

import { getCols, fontSizer } from '../utils/utils'

import '../utils/main.scss'

import Header from '../components/Header.jsx'
import Video from '../components/Video.jsx'
import Products from '../components/Products.jsx'

export default class Index extends React.PureComponent {
    state = {
        rafLoop: false,
        position: 'initial',
    }
    


    componentDidMount = () => {
        this.setState({
            rafLoop: new RafLoop()
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if( !this.state.rafLoop || this.state.rafLoop === prevState.rafLoop ) return

        this.state.rafLoop.add(this.onScroll)
    }

    render = () => {
        const data = {
            introImage: '/static/images/about-intro.jpg',
            aboutImageContent: '/static/images/about-1.jpg',
            aboutImageFooter: '/static/images/about-2.jpg',
        }

        return (
            <div className="container">
                <Head>
                    <title>About de Studio</title>

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="aboutpage for destudio"/>
                </Head>
                 
                <Header {...{
                    rafLoop: this.state.rafLoop
                }} />

                <div className="about-intro">
                    <h1>We make relentlessly honest objects.</h1>
                    <div className="intro-image">
                        <div className="src" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="content-left">
                        <div className="content-image">
                            <div className="src" />
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="content-text">
                            <p>
                                <strong>Honest?</strong>
                                We strip our objects down to their essence. So that we end up with less visual and environmental pollution. We call these objects Honest.
                            </p>
                            <p>
                                <strong>Why honesty matters</strong>
                                Honest things tend to have a positive impact and be beautiful. They don’t hide behind confusing words or decoration. And they are considerate about people and their environment. To make them, requires self reflection and more selfless thinking.
                            </p>
                            <p>
                                <strong>What we’re aiming for</strong>
                                This is why we believe a more honest approach to design helps create a world we'd like to see more of. A more sustainable, forward thinking, positive world.
                            </p>

                            Lorem ipsum dolor sit amet pruit any questions?
                            <a href="">→ Get in touch</a>
                        </div>
                    </div>
                </div>

                <div className="about-footer" ref={ el => this.stickyWrapper = el }>
                    <div className="footer-image">
                        <div className="src" />
                    </div>
                </div>

                { this.renderInstagramPost() } 

                <style jsx>{`
                    .container {
                        position: relative;

                        padding-top: ${getCols(9)}vw;
                        padding-bottom: ${ getCols(1) }vw;
                    }

                    h1 {
                        font-family: 'NBGrotesk';
                        font-size: 48px; // TODO: responsive font size mobile
                        line-height: .96em;
                        letter-spacing: -.04em;

                        width: ${ getCols(11) }vw;
                        margin-left: -.3em;
                    }

                    .about-intro {
                        display: flex;
                        justify-content: space-between;

                        width: 100%;

                        padding: 0 ${ getCols(3) }vw;
                        margin-bottom: ${ getCols(3.7) }vw;
                    }

                    .intro-image {
                        width: ${ getCols(11) }vw;
                    }   

                    .intro-image .src {
                        height: 0;

                        padding-top: 125%;
                        background-position: center;
                        background-size: cover;

                        background-image: url('${ data.introImage }');
                    }

                    .about-content {
                        display: flex;
                        align-items: flex-end;

                        padding: 0 ${ getCols(2) }vw;
                        margin-bottom: ${ getCols(4) }vw;
                    }

                    .content-left,
                    .content-right {
                        width: 50%;
                    }

                    .content-image {
                        width: ${ getCols(10) }vw;
                    }   

                    .content-image .src {
                        height: 0;

                        padding-top: 125%;
                        background-position: center;
                        background-size: cover;

                        background-image: url('${ data.aboutImageContent }');
                    }

                    .content-text {                 
                        font-size: 20px; // TODO: responsive font size mobile
                        line-height: .96em;
                        letter-spacing: -.04em;
                        
                        padding-left: ${ getCols(1.5) }vw;
                        padding-right: ${ getCols(2) }vw;
                    }

                    .content-text strong {
                        display: block;
                        margin-bottom: .2em;
                    }

                    .content-text a {
                        display: block;
                        margin-top: .5em;

                        font-weight: 700;
                    }

                    .content-text p:not(:last-of-type) {
                        margin-bottom: ${getCols(1.1)}vw;
                    }

                    .content-text p:last-of-type {
                        margin-bottom: ${getCols(1.9)}vw;
                    }

                    .about-footer {
                        display: flex;
                        justify-content: flex-end;
                        
                        padding-right: ${getCols(5)}vw;
                    }

                    .footer-image {
                        width: ${ getCols(10) }vw;
                    }   

                    .footer-image .src {
                        height: 0;

                        padding-top: 150%;
                        background-position: center;
                        background-size: cover;

                        background-image: url('${ data.aboutImageFooter }');
                    }

                    @media (min-width: 900px) { 
                        .container {
                            padding-top: ${getCols(3.5)}vw;
                            padding-bottom: ${ getCols(1.8) }vw;
                        }

                        h1 {
                            font-size: ${ fontSizer(96) }vw;
                        }

                        .content-text {
                            font-size: ${ fontSizer(18) }vw;
                            // font-size: 18px;
                            line-height: 1.3em;
                            letter-spacing: -.01em;
                        }

                        .content-text p {
                            font-size: ${ fontSizer(20) }vw;
                            // font-size: 20px;
                            line-height: 1.3em;
                            letter-spacing: -.01em;
                        }
                    }
                `}</style>
            </div>
        )
    }

    renderInstagramPost = () => {
        return (
            <div className="instagram-post">
                <div className="instagram-image">
                    <div className="instagram-image-mask">
                        <div className="instagram-image-inner">
                        </div>
                    </div>
                </div>

                <div className="caption">
                    <strong>Stay posted</strong>
                    Follow us on instagram
                </div>

                <style jsx>{`
                    .instagram-post {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;

                        width: 100%;
                    }

                    .instagram-image {
                        width: ${ getCols(13) }vw;
                        height: ${ getCols(13 * 1.25) }vw;
                    }

                    .instagram-image-mask {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        
                        overflow: hidden;
                    }
                    
                    .instagram-image-inner {
                        position: absolute;
                        top: 0;
                        left: 0;

                        width: 100%;
                        height: 100%;

                        background-image: url('/static/images/instagram.jpg');
                        background-size: cover;
                        background-repeat: no-repeat;
                    }

                    .caption {
                        font-size: 14px; // TODO: responsive font size mobile
                        line-height: 1.43em;

                        margin: 1.5em 0;

                        width: ${ getCols(13) }vw;
                    }

                    .caption strong {
                        display: block;
                    }

                    @media (min-width: 900px) { 
                        .instagram-post {
                            position: absolute;
                            bottom: ${ getCols(2) }vw;
                            left: ${ getCols(1) }vw;

                            width: ${ getCols(4) }vw;
                            
                            transform: ${ this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none' };
                            opacity: ${ this.state.position !== 'bottom' ? 0: 1 };

                            transition: transform .95s cubic-bezier(.19, 1, .22, 1), opacity .45s ease;
                        }

                        .instagram-image {
                            width: ${ getCols(4) }vw;
                            height: ${ getCols(4 * 1.25) }vw;
                        }

                        .instagram-image-mask {
                            transform: ${ this.state.position !== 'bottom' ? 'translateX(-100%)' : 'none' };
                            transition: transform 1.15s cubic-bezier(.19, 1, .22, 1);
                        }

                        .instagram-image-inner {
                            transform: ${ this.state.position !== 'bottom' ? 'translateX(80%)' : 'none' };
                            transition: transform .95s cubic-bezier(.19, 1, .22, 1);
                        }

                        .caption {
                            font-size: ${ fontSizer(16) }vw;
                            line-height: 1.37em;
                            
                            margin: 1.75em 0;
                            margin-bottom: 0;
                            width: ${ getCols(4) }vw;
                        }
                    }
                `}</style>
            </div>
        )
    }

    onScroll = args => {
        if( !this.stickyWrapper ) return

        if( !this.bounds || this.bounds.windowWidth !== window.innerWidth ) {
            const wrapperBounds = this.stickyWrapper.getBoundingClientRect()
            this.bounds = {
                top: wrapperBounds.top + args.scrollY,
                bottom: wrapperBounds.bottom + args.scrollY,
                windowWidth: window.innerWidth
            }
        }

        const {bottom = 0} = this.bounds

        let position = 'initial'

        if (args.scrollY + window.innerHeight >= bottom) {
            position = 'bottom'
        }

        if( position === this.state.position ) return

        this.setState({
            position: position
        })
    }
}