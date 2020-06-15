import './App.scss'

import { PropTypes } from 'prop-types'
import React, { Component } from 'react'

import LeftBar from './LeftBar'
//import { CovidModule, WeatherModule } from './Modules'
import Settings from './Settings'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pixelStep: 10,
            holding: -1,
            settingsRef: undefined,
            settings: {
                language: 'french'
            },
            grabbing: false,
            mouse: {},
            modules: [],
            modulesRefs: [],
            modulesLocked: [],
            modulesRatios: []
        }
    }

    /**
     * Check if rectA overlaps rectB
     * @param {{left:number, right:number, top:number, bottom:number}} rectA
     * @param {{left:number, right:number, top:number, bottom:number}} rectB
     */
    isOver(rectA, rectB) {
        return (
            (rectA.right >= rectB.left &&
                rectA.right <= rectB.right &&
                rectA.bottom <= rectB.bottom &&
                rectA.bottom >= rectB.top) ||
            (rectA.right >= rectB.left &&
                rectA.right <= rectB.right &&
                rectA.top >= rectB.top &&
                rectA.top <= rectB.bottom) ||
            (rectA.left <= rectB.right &&
                rectA.left >= rectB.left &&
                rectA.bottom <= rectB.bottom &&
                rectA.bottom >= rectB.top) ||
            (rectA.left <= rectB.right &&
                rectA.left >= rectB.left &&
                rectA.top >= rectB.top &&
                rectA.top <= rectB.bottom) ||
            (rectB.right >= rectA.left &&
                rectB.right <= rectA.right &&
                rectB.bottom <= rectA.bottom &&
                rectB.bottom >= rectA.top) ||
            (rectB.right >= rectA.left &&
                rectB.right <= rectA.right &&
                rectB.top >= rectA.top &&
                rectB.top <= rectA.bottom) ||
            (rectB.left <= rectA.right &&
                rectB.left >= rectA.left &&
                rectB.bottom <= rectA.bottom &&
                rectB.bottom >= rectA.top) ||
            (rectB.left <= rectA.right &&
                rectB.left >= rectA.left &&
                rectB.top >= rectA.top &&
                rectB.top <= rectA.bottom)
        )
    }

    /**
     * Keep the targetted module in memory
     * @param {Event} ev The event
     * @param {number} index The index of the targetted module
     */
    handleMouseDown = (ev, index) => {
        let input = {}
        if (
            !ev.target.className.includes('module') &&
            !ev.target.className.includes('dragTarget') &&
            !ev.target.className.includes('lockTarget') &&
            !ev.target.className.includes('closeTarget')
        )
            return
        input.holding = index
        if (ev.target.className.includes('dragTarget')) {
            input.grabbing = true
        } else if (ev.target.className.includes('lockTarget')) {
            input.modulesLocked = this.state.modulesLocked
            input.modulesLocked[input.holding] = !input.modulesLocked[
                input.holding
            ]
            ev.target.className = `fas fa-lock${
                input.modulesLocked[input.holding] ? '' : '-open'
            } lockTarget`
            input.holding = input.modulesLocked[input.holding]
                ? input.holding
                : input.holding == 0 && input.modulesLocked.length > 1
                ? 1
                : 0
        } else if (ev.target.className.includes('closeTarget')) {
            this.handleRemoveModule(index)
            //input.holding = -1
            setTimeout(() => {
                this.updateModules()
                this.setState(() => ({ holding: -1 }))
            })
        }
        input.mouse = {
            x:
                ev.clientX -
                parseInt(this.state.modulesRefs[index].current.style.left, 10),
            y:
                ev.clientY -
                parseInt(this.state.modulesRefs[index].current.style.top, 10)
        }
        this.setState(() => input)
    }

    /**
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @returns {number} The value modified to stay between min and max
     */
    keepBetween(value, min, max) {
        return value < min ? min : value > max ? max : value
    }

    reorderModules({ modulesRefs, modulesLocked, modulesRatios }) {
        let leftOrder = []
        for (let i = 0; i < modulesRefs.length; i++) {
            leftOrder.push(parseInt(modulesRefs[i].current.style.left, 10))
        }
        let newOrder = [...leftOrder]
        newOrder.sort((a, b) => a > b)
        let mapOrder = []
        for (let i = 0; i < modulesRefs.length; i++) {
            let from = 0
            while (leftOrder[from] != newOrder[i] || mapOrder.includes(from))
                from++
            mapOrder.push(from)
        }
        let tmpRef = [...modulesRefs],
            tmpLocked = [...modulesLocked],
            tmpRatio = [...modulesRatios]
        for (let i = 0; i < modulesRefs.length; i++) {
            modulesRefs[i] = tmpRef[mapOrder[i]]
            modulesLocked[i] = tmpLocked[mapOrder[i]]
            modulesRatios[i] = tmpRatio[mapOrder[i]]
        }
        //console.log(mapOrder)
        //console.log(modulesRefs)
        return { modulesRefs, modulesLocked, modulesRatios, mapOrder }
    }

    /**
     * Prevent the modules from overlapping while dragging or resizing
     */
    updateModules = () => {
        let {
            modulesRefs,
            pixelStep,
            holding,
            modulesRatios,
            modulesLocked
        } = this.state
        if (holding === -1) return

        let order = this.reorderModules({
            modulesRefs: [...modulesRefs],
            modulesLocked: [...modulesLocked],
            modulesRatios: [...modulesRatios]
        })

        let rects = []
        for (let i = 0; i < modulesRefs.length; i++) {
            rects.push({
                left: parseInt(modulesRefs[i].current.style.left, 10),
                right:
                    parseInt(modulesRefs[i].current.style.left, 10) +
                    parseInt(modulesRefs[i].current.style.width, 10),
                top: parseInt(modulesRefs[i].current.style.top, 10),
                bottom:
                    parseInt(modulesRefs[i].current.style.top, 10) +
                    parseInt(modulesRefs[i].current.style.height, 10)
            })
        }

        let itemWidth = parseInt(modulesRefs[holding].current.style.width, 10)
        itemWidth = this.keepBetween(
            itemWidth,
            parseInt(modulesRefs[holding].current.style.minWidth, 10),
            parseInt(modulesRefs[holding].current.style.maxWidth, 10)
        )
        itemWidth =
            itemWidth % pixelStep < pixelStep / 2
                ? itemWidth - (itemWidth % pixelStep)
                : itemWidth + pixelStep - (itemWidth % pixelStep)

        let itemHeight = itemWidth * modulesRatios[holding]
        itemHeight = this.keepBetween(
            itemHeight,
            parseInt(modulesRefs[holding].current.style.minHeight, 10),
            parseInt(modulesRefs[holding].current.style.maxHeight, 10)
        )
        itemHeight =
            itemHeight % pixelStep < pixelStep / 2
                ? itemHeight - (itemHeight % pixelStep)
                : itemHeight + pixelStep - (itemHeight % pixelStep)

        rects[holding].right = rects[holding].left + itemWidth
        rects[holding].bottom = rects[holding].top + itemHeight

        //Computes
        {
            for (let y = 0; y < modulesRefs.length; y++) {
                let j = order.mapOrder[y]
                for (let x = modulesRefs.length - 1; x >= 0; x--) {
                    let i = order.mapOrder[x]
                    if (i !== j && j !== holding) {
                        /*while (
                            (!this.isOver(rects[i], rects[j]) ||
                                modulesRefs[j].current.style.display ===
                                    'none' ||
                                modulesRefs[i].current.style.display ===
                                    'none') &&
                            rects[j].top > 0 &&
                            !modulesLocked[j]
                        ) {
                            //put every module as close as possible to the top
                            rects[j].top -= pixelStep
                            rects[j].bottom -= pixelStep
                            if (rects[j].top < 0) {
                                rects[j].top = 0
                                rects[j].bottom += pixelStep + rects[j].top
                            }
                        }
                        while (
                            (!this.isOver(rects[i], rects[j]) ||
                                modulesRefs[j].current.style.display ===
                                    'none' ||
                                modulesRefs[i].current.style.display ===
                                    'none') &&
                            rects[j].left > 0 &&
                            !modulesLocked[j]
                        ) {
                            //put every module as close as possible to the left
                            rects[j].left -= pixelStep
                            rects[j].right -= pixelStep
                            if (rects[j].left < 0) {
                                rects[j].left = 0
                                rects[j].right += pixelStep + rects[j].left
                            }
                        }*/
                        while (
                            this.isOver(rects[i], rects[j]) &&
                            modulesRefs[j].current.style.display !== 'none' &&
                            modulesRefs[i].current.style.display !== 'none'
                        ) {
                            //TODO : More cases
                            if (rects[i].right > rects[j].right) {
                                //i overlaps j on the right
                                if (
                                    ((!modulesLocked[j] && !modulesLocked[i]) ||
                                        modulesLocked[i]) &&
                                    rects[j].left - pixelStep >= 0 //i is more or equally locked and possiblity to push j on the left
                                ) {
                                    //then push j on the left
                                    rects[j].left -= pixelStep
                                    rects[j].right -= pixelStep
                                    //console.log(1)
                                } else {
                                    //else keep i where it is on the x axis
                                    rects[i].left += pixelStep
                                    rects[i].right += pixelStep
                                    //console.log(2)
                                }
                            } else if (rects[i].right >= rects[j].left) {
                                //i overlaps j on the left
                                if (
                                    (!modulesLocked[j] && !modulesLocked[i]) ||
                                    modulesLocked[i] //i is more or equally locked
                                ) {
                                    //then push j on the right
                                    rects[j].left += pixelStep
                                    rects[j].right += pixelStep
                                } else if (
                                    modulesLocked[j] &&
                                    rects[j].left - itemWidth >= 0 //j is more locked and i can be pushed on the left
                                ) {
                                    //then keep i where it is on the x axis
                                    rects[i].left -= pixelStep
                                    rects[i].right -= pixelStep
                                } else {
                                    //else push i on the right
                                    rects[i].left += pixelStep
                                    rects[i].right += pixelStep
                                }
                                //console.log(3)
                            }
                        }
                    }
                }
            }
            for (let y = modulesRefs.length - 1; y >= 0; y--) {
                let j = order.mapOrder[y]
                for (let x = 0; x < modulesRefs.length; x++) {
                    let i = order.mapOrder[x]
                    if (i !== j /*&& j !== holding*/) {
                        while (
                            this.isOver(rects[i], rects[j]) &&
                            modulesRefs[j].current.style.display !== 'none' &&
                            modulesRefs[i].current.style.display !== 'none'
                        ) {
                            //TODO : More cases
                            if (rects[i].right > rects[j].right) {
                                //i overlaps j on the right
                                if (
                                    ((!modulesLocked[j] && !modulesLocked[i]) ||
                                        modulesLocked[i]) &&
                                    rects[j].left - pixelStep >= 0 //i is more or equally locked and possiblity to push j on the left
                                ) {
                                    //then push j on the left
                                    rects[j].left -= pixelStep
                                    rects[j].right -= pixelStep
                                    //console.log(1)
                                } else {
                                    //else keep i where it is on the x axis
                                    rects[i].left += pixelStep
                                    rects[i].right += pixelStep
                                    //console.log(2)
                                }
                            } else if (rects[i].right >= rects[j].left) {
                                //i overlaps j on the left
                                if (
                                    (!modulesLocked[j] && !modulesLocked[i]) ||
                                    modulesLocked[i] //i is more or equally locked
                                ) {
                                    //then push j on the right
                                    rects[j].left += pixelStep
                                    rects[j].right += pixelStep
                                } else if (
                                    modulesLocked[j] &&
                                    rects[j].left - itemWidth >= 0 //j is more locked and i can be pushed on the left
                                ) {
                                    //then keep i where it is on the x axis
                                    rects[i].left -= pixelStep
                                    rects[i].right -= pixelStep
                                } else {
                                    //else push i on the right
                                    rects[i].left += pixelStep
                                    rects[i].right += pixelStep
                                }
                                //console.log(3)
                            }
                        }
                    }
                }
            }
        }

        for (let i = 0; i < modulesRefs.length; i++) {
            modulesRefs[i].current.style.left = `${rects[i].left}px`
            modulesRefs[i].current.style.top = `${rects[i].top}px`
            if (i === holding) {
                modulesRefs[i].current.style.width = `${itemWidth}px`
                modulesRefs[i].current.style.height = `${itemHeight}px`
            }
        }
    }

    /**
     * Remove the targetted module from memory
     */
    handleMouseUp = () => {
        const { holding } = this.state
        if (holding === -1) return
        this.updateModules()
        console.log(holding)
        this.setState(() => ({
            holding: -1,
            grabbing: false
        }))
    }

    /**
     * Move the module according to mouse position
     * @param {Event} ev
     */
    moveModule = (ev) => {
        const { grabbing, holding, mouse, pixelStep, modulesRefs } = this.state
        if (holding !== -1) this.updateModules()
        if (holding === -1 || !grabbing) return

        ev.preventDefault()
        //let eRect = ev.target.getBoundingClientRect()
        let x = ev.clientX - mouse.x // - eRect.left //x position within the element.
        let y = ev.clientY - mouse.y // - eRect.top //y position within the element.

        let currentStyle = modulesRefs[holding].current.style

        if (
            (x >= parseInt(currentStyle.left, 10) &&
                x <= parseInt(currentStyle.left, 10) + pixelStep) ||
            (x <= parseInt(currentStyle.left, 10) &&
                x >= parseInt(currentStyle.left, 10) - pixelStep)
        )
            x = parseInt(currentStyle.left, 10)
        if (
            (y >= parseInt(currentStyle.top, 10) &&
                y <= parseInt(currentStyle.top, 10) + pixelStep) ||
            (y <= parseInt(currentStyle.top, 10) &&
                y >= parseInt(currentStyle.top, 10) - pixelStep)
        )
            y = parseInt(currentStyle.top, 10)

        if (x < 0) {
            x = 0
        } else x -= x % pixelStep
        if (y < 0) {
            y = 0
        } else y -= y % pixelStep

        modulesRefs[holding].current.style.top = `${y}px`
        modulesRefs[holding].current.style.left = `${x}px`
        this.updateModules()
    }

    /**
     * Save module references in memory after loading
     * @param {React.RefObject} ref
     */
    handleModuleLoading = (ref) => {
        const { modulesRefs, modulesRatios, modulesLocked } = this.state
        modulesRefs.push(ref)
        modulesRatios.push(
            parseInt(ref.current.style.height, 10) /
                parseInt(ref.current.style.width, 10)
        )
        modulesLocked.push(false)
        this.setState(() => ({
            modulesRefs: modulesRefs,
            modulesRatios: modulesRatios
        }))
    }

    /**
     * Remove a module by not displaying it
     * @param {number} index
     */
    handleRemoveModule = (index) => {
        const { modulesRefs } = this.state
        modulesRefs[index].current.style.display = 'none'
        modulesRefs[index].current.style.left = '0px'
        modulesRefs[index].current.style.top = '0px'
        this.setState(() => ({ modulesRefs: modulesRefs }))
    }

    /**
     * Load a module or display it again
     * @param {React.Component} Module
     */
    handleAddModule = (Module) => {
        let { modules, modulesRefs } = this.state

        console.log(modulesRefs)
        //existing Module
        if (modules.includes(Module)) {
            let i = 0
            for (i = 0; i < modules.length; i++) {
                if (modules[i] === Module) {
                    if (modulesRefs[i].current.style.display === 'none')
                        modulesRefs[i].current.style.display = 'initial'
                    else {
                        alert('Module already loaded !')
                    }
                    break
                }
            }
            this.setState(() => {
                setTimeout(() => {
                    this.updateModules()
                    this.setState(() => ({ holding: -1 }))
                })
                return {
                    holding: i
                }
            })
            return
        }

        //new Module
        modules.push(Module)
        this.setState(() => {
            setTimeout(() => {
                this.updateModules()
                this.setState(() => ({ holding: -1 }))
            })
            return {
                modules: modules,
                holding: modules.length - 1,
                modulesRefs: modulesRefs
            }
        })
    }

    /**
     * Show the settings window if bool equals true, hide it otherwise
     * @param {boolean} bool
     */
    settingsOnClick = (bool) => {
        const { settingsRef } = this.state
        settingsRef.current.style.display = bool ? 'initial' : 'none'
        this.setState(() => ({ settingsRef: settingsRef }))
    }

    /**
     * Get settings from the settings window
     * @param {{language:string}} settings
     */
    getSettings = (settings) => {
        this.setState(() => ({ settings: settings }))
    }

    render() {
        const { settings, modules } = this.state
        return (
            <div
                onMouseMove={(ev) => this.moveModule(ev)}
                onMouseUp={() => {
                    this.setState({ grabbing: false })
                }}>
                <Settings
                    onload={(ref) => {
                        this.setState(() => ({ settingsRef: ref }))
                    }}
                    close={this.settingsOnClick}
                    update={this.getSettings}
                />
                <nav className="nav justify-content-center bg-dark text-light">
                    <h1>Korbots</h1>
                </nav>
                <div className="container-fluid">
                    <div className="row row-height">
                        <LeftBar
                            settingsOnClick={this.settingsOnClick}
                            settings={settings}
                            onAddModule={this.handleAddModule}
                        />
                        <div className="col-10">
                            <div className="display-4 font-italic font-weight-light text-center my-2">
                                {settings.language === 'french' &&
                                    "Bonjour l'ami !"}
                                {settings.language === 'english' &&
                                    'Hello my friend !'}
                                {settings.language === 'german' &&
                                    'Hallo mein Freund !'}
                            </div>
                            <div className="modules">
                                {modules.map((Module, index) => (
                                    <Module
                                        key={index}
                                        index={index}
                                        onMouseDown={this.handleMouseDown}
                                        onMouseUp={this.handleMouseUp}
                                        onload={this.handleModuleLoading}
                                        socket={this.props.socket}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    socket: PropTypes.object
}

export default App
