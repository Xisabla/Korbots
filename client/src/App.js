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
        input.holding = index
        if (ev.target.className.includes('dragTarget')) {
            input.grabbing = true
        } else if (ev.target.className.includes('lockTarget')) {
            input.modulesLocked = this.state.modulesLocked
            input.modulesLocked[index] = !input.modulesLocked[index]
            ev.target.className = `fas fa-lock${
                input.modulesLocked[index] ? '' : '-open'
            } lockTarget`
            input.holding = input.modulesLocked[index] ? index : 0
        }
        if (
            !ev.target.className.includes('module') &&
            input.grabbing !== true &&
            !ev.target.className.includes('lockTarget')
        )
            return
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
    /**
     * Prevent the modules from overlapping while dragging or resizing
     */
    updateModules = () => {
        const {
            modulesRefs,
            pixelStep,
            holding,
            modulesRatios,
            modulesLocked
        } = this.state
        if (holding === -1) return
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

        for (let i = 0; i < modulesRefs.length; i++) {
            for (let j = 0; j < modulesRefs.length; j++) {
                if (i !== j && j !== holding) {
                    while (
                        !this.isOver(rects[i], rects[j]) &&
                        rects[j].left > 0 &&
                        !modulesLocked[j]
                    ) {
                        rects[j].left -= pixelStep
                        rects[j].right -= pixelStep
                        if (rects[j].left < 0) {
                            rects[j].left = 0
                            rects[j].right += pixelStep + rects[j].left
                        }
                    }
                    while (this.isOver(rects[i], rects[j])) {
                        //TODO : More cases
                        if (
                            rects[i].left <= rects[j].right &&
                            rects[i].right > rects[j].right &&
                            rects[j].left - pixelStep >= 0
                        ) {
                            if (
                                (!modulesLocked[j] && !modulesLocked[i]) ||
                                (modulesLocked[j] && modulesLocked[i])
                            ) {
                                rects[j].left -= pixelStep
                                rects[j].right -= pixelStep
                            } else {
                                rects[i].left += pixelStep
                                rects[i].right += pixelStep
                            }
                        } else if (
                            rects[i].left <= rects[j].right &&
                            rects[i].right > rects[j].right &&
                            rects[j].left - pixelStep < 0
                        ) {
                            rects[i].left += pixelStep
                            rects[i].right += pixelStep
                        } else if (rects[i].right >= rects[j].left) {
                            rects[j].left += pixelStep
                            rects[j].right += pixelStep
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
     * @param {*} ref
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

    handleAddModule = (Module) => {
        const { modules } = this.state
        if (modules.includes(Module)) {
            alert('Module already loaded')
            return
        }
        modules.push(Module)
        this.setState(() => {
            setTimeout(() => {
                this.updateModules()
                this.setState(() => ({ holding: -1 }))
            }, 50)
            return {
                modules: modules,
                holding: modules.length - 1
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
