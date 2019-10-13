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
        rafLoop: false
    }

    componentDidMount = () => {
        this.setState({
            rafLoop: new RafLoop()
        })
    }

    render = () => {
        return (
            <div className="container">
                <Head>
                    <title>De Studio</title>

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="landingspage for destudio"/>
                </Head>
                 
                <Header {...{
                    rafLoop: this.state.rafLoop
                }} />
                <Video />
                <h1>We make relentlessly honest objects.</h1>

                <Products {...{
                    rafLoop: this.state.rafLoop
                }} />
                

                <style jsx>{`
                    .container {
                        padding-top: ${getCols(8)}vw;
                        padding-bottom: ${ getCols(1) }vw;
                    }

                    h1 {
                        font-family: 'NBGrotesk';
                        font-size: 48px; // TODO: responsive font size mobile
                        line-height: 1em;
                        letter-spacing: -.04em;

                        padding: ${ getCols(4) }vw ${ getCols(2) }vw;
                        padding-bottom: 0;
                        
                        width: 100%;
                    }

                    @media (min-width: 900px) { 
                        .container {
                            padding-top: ${getCols(3.5)}vw;
                            padding-bottom: ${ getCols(1) }vw;
                        }

                        h1 {
                            font-size: ${ fontSizer(98) }vw;

                            padding: ${ getCols(.75) }vw ${ getCols(1) }vw;
                            padding-bottom: ${ getCols(4.75) }vw;

                            width: 75%;
                        }
                    }
                `}</style>
            </div>
        )
    }
}