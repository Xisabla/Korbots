import './App.scss'

import React, { Component } from 'react'

import LeftBar from './LeftBar'
import modules from './Modules'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 10,
            holding: -1,
            grabbing: false,
            mouse: { x: 314, y: 163 },
            modules: modules,
            moduleStyles: [
                {
                    //Covid
                    width: '600px',
                    height: 'auto',
                    paddingBottom: '0%',
                    minWidth: '300px',
                    minHeight: '300px',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    left: '0px',
                    top: '0px'
                },
                {
                    //Weather
                    width: '300px',
                    height: 'auto',
                    paddingBottom: '0%',
                    minWidth: '300px',
                    minHeight: '300px',
                    maxWidth: '600px',
                    maxHeight: '600px',
                    left: '610px',
                    top: '0px'
                },
                {
                    //Weather
                    width: '300px',
                    height: 'auto',
                    paddingBottom: '0%',
                    minWidth: '300px',
                    minHeight: '300px',
                    maxWidth: '600px',
                    maxHeight: '600px',
                    left: '610px',
                    top: '400px'
                }
            ]
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

    handleMouseUp = (ev, index) => {
        const { modules, moduleStyles, holding, grabbing, offset } = this.state
        if (holding === -1 || grabbing) return
        let rects = []

        let tmp = modules[0]
        modules[0] = modules[index]
        modules[index] = tmp
        tmp = moduleStyles[0]
        moduleStyles[0] = moduleStyles[index]
        moduleStyles[index] = tmp

        for (let i = 0; i < modules.length; i++) {
            rects.push({
                left: parseInt(moduleStyles[i].left, 10),
                right:
                    parseInt(moduleStyles[i].left, 10) +
                    parseInt(moduleStyles[i].width, 10) +
                    offset,
                top: parseInt(moduleStyles[i].top, 10),
                bottom:
                    parseInt(moduleStyles[i].top, 10) +
                    parseInt(moduleStyles[i].height, 10) +
                    offset
            })
        }
        rects[index] = {
            left: rects[index].left,
            right: rects[index].left + ev.target.offsetWidth,
            top: rects[index].top,
            bottom: rects[index].top + ev.target.offsetHeight
        }

        for (let i = 0; i < modules.length; i++) {
            for (let j = 0; j < modules.length; j++) {
                if (i !== j) {
                    while (
                        this.isOver(rects[i], rects[j]) ||
                        this.isOver(rects[j], rects[i])
                    ) {
                        //TODO : More cases
                        if (rects[i].right >= rects[j].left) {
                            rects[j].left += offset
                            rects[j].right += offset
                        }
                    }
                }
            }
        }

        let buffer = moduleStyles
        let itemWidth = parseInt(moduleStyles[index].width, 10)
        itemWidth =
            itemWidth % offset < offset / 2
                ? itemWidth - (itemWidth % offset)
                : itemWidth + (itemWidth % offset)

        for (let i = 0; i < modules.length; i++) {
            let tempWidth = rects[i].right - rects[i].left - offset
            tempWidth -= tempWidth % offset
            buffer[i] = {
                left: rects[i].left + 'px',
                width: `${i === index ? itemWidth : tempWidth}px`,
                height: 'auto',
                top: rects[i].top + 'px',
                paddingBottom: '0%',
                minWidth: '300px',
                minHeight: '300px',
                maxWidth: '800px',
                maxHeight: '800px'
            }
        }
        this.setState(() => ({
            moduleStyles: buffer,
            holding: -1,
            grabbing: false
        }))
    }

    moveModule = (ev) => {
        const { grabbing, holding, moduleStyles, mouse, offset } = this.state
        if (!grabbing) return
        //let eRect = ev.target.getBoundingClientRect()
        let x = ev.clientX - mouse.x // - eRect.left //x position within the element.
        let y = ev.clientY - mouse.y // - eRect.top //y position within the element.

        if (
            (x >= parseInt(moduleStyles[holding].left, 10) &&
                x <= parseInt(moduleStyles[holding].left, 10) + offset) ||
            (x <= parseInt(moduleStyles[holding].left, 10) &&
                x >= parseInt(moduleStyles[holding].left, 10) - offset)
        )
            x = parseInt(moduleStyles[holding].left, 10)
        if (
            (y >= parseInt(moduleStyles[holding].top, 10) &&
                y <= parseInt(moduleStyles[holding].top, 10) + offset) ||
            (y <= parseInt(moduleStyles[holding].top, 10) &&
                y >= parseInt(moduleStyles[holding].top, 10) - offset)
        )
            y = parseInt(moduleStyles[holding].top, 10)

        if (x < 0) {
            x = 0
        } else x -= x % offset
        if (y < 0) {
            y = 0
        } else y -= y % offset
        console.log(x, y)

        let buffer = moduleStyles

        buffer[holding] = {
            left: x + 'px',
            width: moduleStyles[holding].width,
            top: y + 'px',
            paddingBottom: moduleStyles[holding].paddingBottom,
            minWidth: moduleStyles[holding].minWidth,
            minHeight: moduleStyles[holding].minHeight,
            maxWidth: moduleStyles[holding].maxWidth,
            maxHeight: moduleStyles[holding].maxHeight
        }
        this.setState(() => ({ moduleStyles: buffer }))
    }

    render() {
        const { moduleStyles } = this.state
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
                                        style={moduleStyles[index]}
                                        onMouseDown={this.handleMouseDown}
                                        onMouseUp={this.handleMouseUp}
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
