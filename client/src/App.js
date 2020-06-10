import './App.scss'

import React, { Component } from 'react'

import LeftBar from './LeftBar'
import modules from './Modules'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pixelStep: 10,
            holding: -1,
            grabbing: false,
            mouse: { x: 314, y: 163 },
            modules: modules,
            modulesRefs: [],
            modulesRatios: []
        }
    }

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

    handleMouseDown = (ev, index) => {
        let input = {}
        console.log(ev.target.className)
        if (ev.target.className === 'fas fa-arrows-alt dragTarget') {
            input.grabbing = true
            //input.mouse = { x: ev.clientX, y: ev.clientY }
            //console.log(input.mouse)
        }
        if (ev.target.className !== 'module' && input.grabbing !== true) return
        input.holding = index
        this.setState(() => input)
    }

    keepBetween(value, min, max) {
        return value < min ? min : value > max ? max : value
    }

    updateModules = () => {
        const { modulesRefs, pixelStep, holding, modulesRatios } = this.state
        if (holding === -1) return
        let rects = []

        for (let i = 0; i < modulesRefs.length; i++) {
            rects.push({
                left: parseInt(modulesRefs[i].current.style.left, 10),
                right:
                    parseInt(modulesRefs[i].current.style.left, 10) +
                    parseInt(modulesRefs[i].current.style.width, 10) +
                    pixelStep,
                top: parseInt(modulesRefs[i].current.style.top, 10),
                bottom:
                    parseInt(modulesRefs[i].current.style.top, 10) +
                    parseInt(modulesRefs[i].current.style.height, 10) +
                    pixelStep
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
            for (let j = 0; j < modules.length; j++) {
                if (i !== j && j !== holding) {
                    while (this.isOver(rects[i], rects[j])) {
                        //TODO : More cases
                        if (
                            rects[i].left <= rects[j].right &&
                            rects[i].right > rects[j].right &&
                            rects[j].left - pixelStep >= 0
                        ) {
                            rects[j].left -= pixelStep
                            rects[j].right -= pixelStep
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

        for (let i = 0; i < modules.length; i++) {
            modulesRefs[i].current.style.left = `${rects[i].left}px`
            modulesRefs[i].current.style.top = `${rects[i].top}px`
            if (i === holding) {
                modulesRefs[i].current.style.width = `${itemWidth}px`
                modulesRefs[i].current.style.height = `${itemHeight}px`
            }
        }
    }

    handleMouseUp = () => {
        const { holding } = this.state
        if (holding === -1) return
        this.updateModules()
        this.setState(() => ({
            holding: -1,
            grabbing: false
        }))
    }

    moveModule = (ev) => {
        const { grabbing, holding, mouse, pixelStep, modulesRefs } = this.state
        this.updateModules()
        if (holding === -1 || !grabbing) return

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

    handleModuleLoading = (ref) => {
        const { modulesRefs, modulesRatios } = this.state
        modulesRefs.push(ref)
        modulesRatios.push(
            parseInt(ref.current.style.height, 10) /
                parseInt(ref.current.style.width, 10)
        )
        this.setState(() => ({
            modulesRefs: modulesRefs,
            modulesRatios: modulesRatios
        }))
    }

    render() {
        return (
            <div
                onMouseMove={(ev) => this.moveModule(ev)}
                onMouseUp={() => {
                    this.setState({ grabbing: false })
                }}>
                <nav className="nav justify-content-center bg-dark text-light">
                    <h1>Korbots</h1>
                </nav>
                <div className="container-fluid">
                    <div className="row row-height">
                        <LeftBar></LeftBar>
                        <div className="col-10">
                            <div className="display-4 font-italic font-weight-light text-center my-2">
                                {"Bonjour l'ami !"}
                            </div>
                            <div className="modules">
                                {modules.map((Module, index) => (
                                    <Module
                                        key={index}
                                        index={index}
                                        onMouseDown={this.handleMouseDown}
                                        onMouseUp={this.handleMouseUp}
                                        onload={this.handleModuleLoading}
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

export default App
