export function fontSizer(size) {
    const responsiveSize = size / 14
    
    return responsiveSize
}

export function getCols(amount) {
    return (amount / 29) * 100;
}

export function getImageFactor(rectWidth, rectHeight, image) {
    const rectRatio = rectWidth / rectHeight
    const imageRatio = image.naturalWidth / image.naturalHeight

    const factorX = rectRatio > imageRatio ? 1 : (1 * rectRatio) / imageRatio
    const factorY = rectRatio > imageRatio ? (1 / rectRatio) * imageRatio : 1
    
    return { factorX, factorY }
}

export function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value))
}

export function map(from, to, s) {
    return to[0] + ((s - from[0]) * (to[1] - to[0])) / (from[1] - from[0])
}

export function refToArray(el, array) {
    if (!el || !Array.isArray(array) || array.includes(el)) return
    return array.push(el)
}

export function isMobile() {
    try {
        document.createEvent('TouchEvent')
        return true
    } catch (e) {
        return false
    }
}

export function setHtmlOverflow(newState = 'initial') {
    if (!BIA_HTML) BIA_HTML = document.querySelector('html')

    if (isMobile()) {
        if (newState === 'initial') {
            if (!window.BIA_SCROLL_BLOCK) return

            if (window.addEventListener) {
                window.removeEventListener('scroll', blockBodyScroll, false)
            }
            window.onmousewheel = document.onmousewheel = null
            window.ontouchmove = null
            window.onwheel = null
            document.onkeydown = null

            window.BIA_SCROLL_BLOCK = false
        }

        if (newState === 'hidden') {
            if (window.BIA_SCROLL_BLOCK) return
            if (window.removeEventListener) {
                window.addEventListener('scroll', blockBodyScroll, false)
            }
            window.onwheel = blockBodyScroll
            window.ontouchmove = blockBodyScroll
            window.onmousewheel = document.onmousewheel = blockBodyScroll
            document.onkeydown = preventDefaultForScrollKeys

            window.BIA_SCROLL_BLOCK = true
        }
    }

    BIA_HTML.style.overflow = newState
}