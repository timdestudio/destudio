import React from 'react'
import Link from 'next/link';

import { getCols, fontSizer, clamp } from '../utils/utils'

import Image from './Image.jsx'

class Header extends React.PureComponent {
    triggerY = -1
    triggerpoint = 150

    componentDidUpdate = prevProps => {
        if( !this.props.rafLoop || this.props.rafLoop === prevProps.rafLoop ) return

        this.props.rafLoop.add(this.onScroll)
    }

    render = () => {
        return (
            <header className="header" ref={ el => this.menu = el }>
                {/* <a href="" target="_blank" rel="noopener">Shop</a> */}
                <Link href="/about">
                  <a>About</a>
                </Link>
                
                <Link href="/">
                    <a className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                            <path style={{fill: '#191919'}} d="M16,55.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.56,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z"/>
                            <path style={{fill: '#191919'}} d="M17.89,24.14a2.17,2.17,0,0,0,0-3.06L16,19.16a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z"/>
                            <path style={{fill: '#191919'}} d="M52.81,25.22a2.17,2.17,0,0,0,0-3.06l-1.92-1.92a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5Z"/>
                            <path style={{fill: '#191919'}} d="M50.89,56.24a2.17,2.17,0,0,0-3.06,0l-1.5,1.5,5,5,1.5-1.5a2.17,2.17,0,0,0,0-3.06Z"/>
                            <path style={{fill: '#191919'}} d="M38.75,0l2.48,2.48-.78.84L37.1,0H0V72H37l-2.53-2.5-1.92,1.92-.84-.84,4.74-4.74.84.84-1.92,2L38.75,72H72V0ZM52,14.36,58.69,21l-.78.9L51.19,15.2Zm-5,5a3.33,3.33,0,0,1,4.74,0l1.92,1.92a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L44.65,21.8Zm-8.22,8.16,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,24.5l.84-.84L47.05,28a3.35,3.35,0,0,1-4.74,4.74L38,28.4ZM27.61,2.66l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,3.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06a2.59,2.59,0,0,1,.06,3.72L34.33,9.44a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06A2.64,2.64,0,0,1,27.61,2.66ZM21,9.38l.84.84L18,14.12l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84-4.8,4.8-6.66-6.72Zm-8.94,8.88a3.33,3.33,0,0,1,4.74,0l2,2a3.33,3.33,0,0,1,0,4.74l-2.4,2.4L9.67,20.66ZM18.79,61l-2.4,2.4L9.67,56.72l2.4-2.4a3.33,3.33,0,0,1,4.74,0l2,2A3.33,3.33,0,0,1,18.79,61Zm4.14-4.2-6.66-6.66L21,45.44l.84.84L18,50.18l2.1,2.1,3.9-3.9.84.84-3.9,3.9,2.1,2,3.9-3.9.84.84ZM35.41,44.36l-1.08,1.08a2.64,2.64,0,0,1-3,.48l.54-1.08a1.36,1.36,0,0,0,1.62-.24l1-1.08a1.49,1.49,0,0,0,0-2c-.54-.54-1.14-.42-1.8-.06-.48.3-1,.66-1.56,1-1.08.72-2.22,1.2-3.48-.06a2.64,2.64,0,0,1-.06-3.72l1.08-1.08a2.64,2.64,0,0,1,3-.48l-.54,1.08a1.36,1.36,0,0,0-1.62.24L28.45,39.5a1.43,1.43,0,0,0,.06,2c.54.54,1.14.42,1.8.06.48-.3,1-.66,1.56-1,1.08-.72,2.22-1.2,3.48.06A2.59,2.59,0,0,1,35.41,44.36Zm-.84-10.8-1.92,1.92-.84-.84,4.74-4.74.84.84-2,1.92,5.82,5.82-.78.9Zm12.3,35.16a3.34,3.34,0,0,1-4.56,0L38,64.4l.84-.84,4.26,4.32a2.16,2.16,0,1,0,3.06-3.06L41.83,60.5l.84-.84L47.05,64A3.33,3.33,0,0,1,46.87,68.72Zm6.84-6.66-2.4,2.4L44.65,57.8l2.4-2.4a3.33,3.33,0,0,1,4.74,0l1.92,1.92A3.33,3.33,0,0,1,53.71,62.06Zm4.2-4.14L51.19,51.2l.84-.84L58.69,57Zm5-5a3.33,3.33,0,0,1-4.74,0L56.29,51A3.35,3.35,0,0,1,61,46.22L63,48.14A3.33,3.33,0,0,1,63,52.88Zm0-36a3.33,3.33,0,0,1-4.74,0L56.29,15A3.35,3.35,0,0,1,61,10.22L63,12.14A3.33,3.33,0,0,1,63,16.88Z"/>
                            <path style={{fill: '#191919'}} d="M62.05,12.92,60.13,11a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,16a2.17,2.17,0,0,0,3.24-2.88Z"/>
                            <path style={{fill: '#191919'}} d="M62.05,48.92,60.13,47a2.17,2.17,0,0,0-3.24,2.88l.18.18L59,52a2.17,2.17,0,1,0,3.24-2.88Z"/>
                        </svg>
                    </a>
                </Link>

                <style jsx>{`
                    .header {
                        position: fixed;
                        top: 0;
                        left: 0;

                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        width: 100%;
                        
                        padding: ${ getCols(2) }vw;
                        z-index: 3;
                    }

                    a {
                        font-size: 14px; // TODO: responsive font size mobile
                        font-weight: 600;
                        margin-right: 1.75em;
                    }

                    a:last-of-type {
                        margin-right: 2em;
                    }

                    .logo {
                        position: relative;
                        width: ${ getCols(3.75) }vw;
                        height: ${ getCols(3.75) }vw;

                        background: white;
                    }

                    @media (min-width: 900px) { 
                        .header {
                            padding: ${ getCols(1) }vw;
                        }

                        a {
                            font-size: ${fontSizer(16)}vw;
                            margin-right: 2em;
                        }
    
                        a:last-of-type {
                            margin-right: 3em;
                        }

                        .logo {
                            width: ${ getCols(1.5) }vw;
                            height: ${ getCols(1.5) }vw;
                        }
                    }
                `}</style>
            </header>
        )
    }

    onScroll = (args) => {
        if (!this.menu) return

        if (this.triggerY === -1) this.triggerY = args.scrollY + this.triggerpoint
        let diffY = 0

        if (args.scrollY >= this.triggerY) {
            diffY = clamp(args.scrollY - this.triggerY, 0, 150)

            if (diffY === 150) {
                this.triggerY = args.scrollY - diffY
            }
        }

        if (args.deltaY < 0 && diffY === 0)
            this.triggerY = args.scrollY + this.triggerpoint

        this.menu.style.transform = `translate3d(0, -${diffY}px, 0)`
    }
}

export default Header