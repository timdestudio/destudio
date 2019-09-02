/** Creates a rafLoop to handle scroll animations */
export class RafLoop {
    /**
     * Create the RafLoop
     * @param  {} el - Element to check the Yoffset
     */
    constructor(el = window) {
        this.scroll =
            typeof el.pageYOffset === 'number' ? el.pageYOffset : el.scrollTop
        this.lastScroll = 0
        this.deltaY = 0

        this.el = el
        this.momentumY = 0
        this.t = Date.now()
        this.startTime = this.t

        this.functionMap = new WeakMap()
        this.functionsToRun = []

        this.isPaused = false
        this.ticking = false
        this.isRunning = false

        this.setup(el)
    }

    /**
     * Set the eventlisteners
     * @param  {} el - Element to check the Yoffset
     */
    setup(el) {
        this.update = this.update.bind(this)

        // Update value onscroll
        el.addEventListener( 'scroll', e => {
            if( e.currentTarget !== el ) return
            this.scroll =
                    typeof e.target.scrollTop === 'number'
                        ? e.target.scrollTop
                        : window.pageYOffset
        }, true )
    }

    // --- Events ---

    /**
     * Remove a function from the loop
     * @param  {function} fn
     */
    remove(fn) {
        const func = this.functionMap.get(fn)
        this.functionsToRun = this.functionsToRun.filter(
            fn => !Object.is(fn, func)
        )
        this.functionMap.delete(fn)
    }

    /**
     * Add a function to the loop
     * @param  {function} fn - function to be added
     * @param  {function} params - Parameters to be given when the functions runs
     */
    add(fn, ...params) {
        const func = e => fn(e, ...params)
        this.functionMap.set(fn, func)
        this.functionsToRun.push(func)

        if (!this.isRunning) this.start()
    }

    /**
     * Add a function to the loop to be run once
     * @param  {function} fn - function to be added
     * @param  {function} params - Parameters to be given when the functions runs
     */
    addOnce(fn, ...params) {
        const func = e => {
            fn(e, ...params)
            this.remove(fn)
        }
        this.functionMap.set(fn, func)
        this.functionsToRun.push(func)

        if (!this.isRunning) this.start()
    }

    // --- Toggle the loop ---

    /**
     * Start the loop
     */
    start() {
        this.isRunning = true
        window.requestAnimationFrame(this.update)
    }

    /**
     * Pause the loop
     */
    pause() {
        this.isPaused = true
    }

    /**
     * Resume the loop
     */
    resume() {
        this.isPaused = false
        this.t = Date.now()
        this.startTime = this.t
    }

    /**
     * Destroy the rafLoop
     */
    destroy() {
        this.lastScroll = 0
        this.deltaY = 0
        this.momentumY = 0
        this.functionsToRun = []
    }

    //  --- Helpers ---

    /**
     * Set all loop values to 0
     */
    reset() {
        this.lastScroll = 0
        this.deltaY = 0
        this.momentumY = 0
    }

    /**
     * Hard scroll to
     */
    snapTo(x = 0, y = 0) {
        this.el.scrollTo(x, y)
        this.momentumY = y
    }

    /**
     * Get the current arguments for the loop
     * @returns {object} args
     */
    getEvent() {
        if (this.ticking) this.deltaY = this.scroll - this.lastScroll
        const now = Date.now()
        const deltaTime = now - this.t
        const time = now - this.startTime

        this.lastScroll = this.scroll
        this.momentumY += (this.lastScroll - this.momentumY) * 0.15
        this.t = now

        return {
            scrollY: this.lastScroll,
            deltaY: this.deltaY,
            momentumY: this.momentumY,
            deltaTime,
            time
        }
    }

    // --- Loop ---

    /**
     * Default loop function
     */
    update() {
        this.ticking = true

        if (!this.isPaused) {
            const args = this.getEvent()
            for (let i = 0; i < this.functionsToRun.length; i++) {
                this.functionsToRun[i](args)
            }
        }
        this.ticking = false

        if (this.functionsToRun.length === 0) this.isRunning = false
        if (this.isRunning) window.requestAnimationFrame(this.update)
    }
}
