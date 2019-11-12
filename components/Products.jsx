import React from 'react'
import Link from 'next/link';

import { fontSizer, getCols, } from '../utils/utils'

class Products extends React.PureComponent {
    state = {
        position: 'initial'
    }

    componentDidUpdate = prevProps => {
        if( !this.props.rafLoop || this.props.rafLoop === prevProps.rafLoop ) return

        this.props.rafLoop.add(this.onScroll)
    }

    render = () => {
        const products = [
            {
                image: '/static/images/task-light.png',
                hoverImage: '/static/images/task-light-detail.png',
                title: 'Task Light',
                price: '599.00'
            },
            {
                image: '/static/images/tea-light-big.png',
                hoverImage: '/static/images/tea-light-big-detail.png',
                title: 'Tea Light Holder',
                price: '90.00'
            },
            {
                image: '/static/images/tea-light-small.png',
                hoverImage: '/static/images/tea-light-small-detail.png',
                title: 'Tea Light Holder Big',
                price: '125.00'
            },
        ]

        return (
            <div className="container" ref={ el => this.stickyWrapper = el }>
                <div className={`sticky-text ${ this.state.position !== 'initial' ? 'fixed' : '' }`} ref={ el => this.stickyEl = el }>
                    <p>
                        Our objects are completely stripped down, they have nothing to hide. Good looking and good for the world.
                        <strong><Link href="/about">→ More about De Studio</Link></strong>
                    </p>
                </div>

                <div className="products">
                    { this.renderProducts(products) } 
                </div>

                { this.renderInstagramPost() } 

                <style jsx>{`
                    .container {
                        position: relative;
                        display: flex;
                        flex-direction: column;

                        width: 100%;
                        height: 100%;

                        padding: ${ getCols(2) }vw;
                    }

                    .sticky-text {
                        font-size: 16px; // TODO: responsive font size mobile
                        line-height: 1.3em;
                        letter-spacing: -.01em;

                        width: 90%;
                        margin-bottom: ${ getCols(4.85) }vw;
                        
                        opacity: ${ this.state.position === 'bottom' ? 0 : 1 };
                        transition: opacity .45s ease;
                    }

                    .sticky-text strong {
                        display: block;
                        margin-top: .8em;
                    }

                    @media (min-width: 900px) { 
                        .container {
                            align-items: flex-end;
                            
                            padding: ${ getCols(1) }vw;
                            padding-bottom: 0;
                        }

                        .sticky-text {
                            position: absolute;
                            top: ${getCols(1)}vw;
                            left: ${ getCols(1) }vw;
    
                            font-size: ${ fontSizer(20) }vw;
                            line-height: 1.3em;
                            letter-spacing: -.01em;
    
                            width: ${ getCols(7) }vw;
                            margin-bottom: 0;
                        }

                        .sticky-text.fixed {
                            position: fixed;
                        }
                    }
                `}</style>
            </div>
        )
    }

    renderProducts = products => {
        return products.map((product, i) => {
            return (
                <div className="product-card" key={i}>
                    {/* <a href="" target="_blank" rel="noopener" className="product-image"> */}
                    <div className="product-image">
                        <span className="product-image-hover"></span>
                    </div>
                    {/* </a> */}

                    <div className="caption">
                        <strong>{ product.title }</strong>
                        EUR { product.price }
                    </div>

                    <style jsx>{`
                        .product-card {
                            display: flex;
                            flex-direction: column;

                            width: 100%;

                            margin-bottom: ${ getCols(2.5) }vw;
                        }

                        .product-card:last-of-type {
                            margin-bottom: ${ getCols(6) }vw;
                        }

                        .product-image {
                            position: relative;
                            overflow: hidden;
                            
                            width: 100%;
                            height: ${ getCols(26*1.2) }vw;
                        }

                        .product-image:before {
                            content: '';
                            
                            position: absolute;
                            top: 0;
                            left: 0;

                            width: 100%;
                            height: 100%;

                            background: #F7F7F7;
                            background-image: url('${ product.image }');
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: contain;

                            transition: opacity .15s ease;
                        }
                        
                        .product-image-hover {
                            position: absolute;
                            top: 0;
                            left: 0;
                            
                            width: 100%;
                            height: 100%;

                            z-index: 1;

                            background-image: url('${ product.hoverImage }');
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;

                            opacity: 0;
                            // transform: scale(1.05);
                            transition: transform .75s cubic-bezier(.19, 1, .22, 1), opacity .15s ease;
                        }

                        @media (hover: hover) {
                            .product-image:hover:before {
                                opacity: 0;
                            }

                            .product-image:hover .product-image-hover {
                                transform: none;
                                opacity: 1;
                            }
                        }

                        .caption {
                            font-size: 14px; // TODO: responsive font size mobile
                            line-height: 1.43em;

                            margin: 1.5em 0;
                        }

                        .caption strong {
                            display: block;
                        }

                        @media (min-width: 900px) { 
                            .product-card {
                                width: ${ getCols(13) }vw;
    
                                margin-bottom: ${ getCols(1.25) }vw;
                            }

                            .product-card:last-of-type {
                                margin-bottom: ${ getCols(.3) }vw;
                            }

                            .product-image {
                                height: ${ getCols(13*1.2) }vw;
                            }

                            .caption {
                                font-size: ${ fontSizer(16) }vw;
                                line-height: 1.37em;
                                
                                margin: 1.75em 0;
                            }
                        }
                    `}</style>
                </div>
            )
        })
    }

    renderInstagramPost = () => {
        return (
            <a href="https://www.instagram.com/thisisdestudio/" rel="noopener" target="_blank"  className="instagram-post">
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
                        font-size: 14px;
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
                            bottom: ${ getCols(.85) }vw;
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
            </a>
        )
    }

    onScroll = args => {
        if( !this.stickyEl || !this.stickyWrapper ) return

        if( !this.bounds || this.bounds.windowWidth !== window.innerWidth ) {
            const wrapperBounds = this.stickyWrapper.getBoundingClientRect()
            this.bounds = {
                top: wrapperBounds.top + args.scrollY,
                bottom: wrapperBounds.bottom + args.scrollY,
                windowWidth: window.innerWidth
            }
        }

        const {top = 0, bottom = 0} = this.bounds

        let position = 'initial'

        if( args.scrollY > top && args.scrollY + window.innerHeight < bottom) {
            position = 'fixed'
        } else if (args.scrollY + window.innerHeight >= bottom) {
            position = 'bottom'
        }

        if( position === this.state.position ) return

        this.setState({
            position: position
        })
    }
}

export default Products