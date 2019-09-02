import React from 'react'
// import delay from 'delay'
// import Observer from 'react-intersection-observer'

// import {mergeClassNames,} from 'bia-template-helpers'
// import {map, clamp,} from 'bia-math'
// import {ratioPercentage, getResponsiveImage, supportsMixBlendMode,} from '_utils'

class Image extends React.PureComponent {
    // state = {
    //     src: this.props.src,
    //     inView: false,
    // }

    // async componentDidMount() {
    //     if (this.state.src) return

    //     await delay(250)

    //     if (!this.container) return
    //     const bounds = this.container.getBoundingClientRect()

    //     this.setState({
    //         bounds,
    //         top: bounds.top + window.pageYOffset,
    //         bottom: bounds.bottom + window.pageYOffset,
    //         actualHeight: bounds.height * this.initScale,
    //         hasBlend: supportsMixBlendMode(),
    //     })

    //     this.props.rafScroll && this.props.rafScroll.add(this.rafLoop)
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (!this.props.image || prevProps.image.url === this.props.image.url)
    //         return

    //     const newSrc = getResponsiveImage(this.props.image, this.state.bounds)

    //     if (prevState.src && (!this.state.src || newSrc === this.state.src))
    //         return

    //     return this.setState({
    //         src: newSrc,
    //     })
    // }

    // componentWillUnmount() {
    //     this.props.rafScroll && this.props.rafScroll.remove(this.rafLoop)
    // }

    // /**
    //  * Event Handlers
    //  */
    // toggleInView = inView => {
    //     if (this.state.src || inView == false || !this.props.image) return

    //     const imageSrc = getResponsiveImage(this.props.image, this.state.bounds)

    //     this.setState({
    //         src: imageSrc,
    //         inView: true,
    //     })

    //     if (this.props.callback) {
    //         const image = document.createElement(`img`)
    //         image.src = imageSrc
    //         image.onload = e => {
    //             this.props.callback()
    //         }
    //     }
    // }
    /**
     * Renders
     */

    render() {
        return <div></div>

        const {image,} = this.props
        const {url = ``, alt = ``,} = image ? image : {}

        // thisthis.props.callback()

        return (
            <Observer
                className={mergeClassNames(
                    s.container,
                    this.props.className,
                    this.props.animateInView ? s.animateInView : false,
                    this.state.inView //  && this.props.animateInView
                        ? s.inView
                        : false
                )}
                onChange={this.toggleInView}
                threshold={0}
                rootMargin="0% 0% 25%"
                triggerOnce={true}
                style={this.getContainerStyle()}
            >
                {typeof document === `undefined` && (
                    <noscript>
                        <img src={url} alt={alt} />
                    </noscript>
                )}
                {this.props.hasBlendMode && this.state.hasBlend ? (
                    <div
                        className={mergeClassNames(
                            s.blendMode,
                            this.props.noBlendHoverState
                                ? s.noHoverState
                                : false,
                            this.props.isActive ? s.active : false,
                            this.props.blendClassName
                                ? this.props.blendClassName
                                : false
                        )}
                    />
                ) : (
                    false
                )}
                <div className={s.imageMask}>
                    <div
                        className={mergeClassNames(
                            !this.state.src ? s.src : s.loadedSrc,
                            this.props.hasBlendMode && !this.props.isActive
                                ? s.grayScale
                                : false,
                            this.props.parallax ? s.hasParallax : false
                        )}
                        ref={el => (this.container = el)}
                        // onLoad={() => this.props.callback()}
                        style={{
                            ...this.props.style,
                            backgroundImage: this.state.src
                                ? `url(${this.state.src})`
                                : ``,
                        }}
                        {...this.props.events}
                    />
                </div>

                {this.props.children ? this.props.children : false}
            </Observer>
        )
    }

    // /**
    //  * Helpers
    //  */

    // getContainerStyle = () => {
    //     const {image, ratio = false, byPassRatio = false,} = this.props

    //     if (!image || byPassRatio) return {}

    //     const {width, height,} = image
    //     const padding = ratio ? ratio : ratioPercentage({width, height,})
    //     return {
    //         paddingBottom: `${padding}%`,
    //     }
    // }

    // rafLoop = args => {
    //     const scrollY = args.scrollY + window.innerHeight
    //     if (
    //         !this.state.src ||
    //         scrollY < this.state.top ||
    //         args.scrollY >= this.state.bottom
    //     )
    //         return

    //     const transformValue = clamp(
    //         0,
    //         10,
    //         map(
    //             [0, this.state.actualHeight + window.innerHeight,],
    //             [0, 10,],
    //             scrollY - this.state.top
    //         )
    //     )
    //     if (transformValue > 10) return

    //     this.transform += (transformValue - this.curTransform) * 0.1
    //     this.curTransform = this.transform

    //     this.container.style.transform = `translate3d(0, -${
    //         this.transform
    //     }%, 0)`
    // }
}

export default Image
