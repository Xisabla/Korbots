import './App.scss'

import React, { Component } from 'react'

import LeftBar from './LeftBar'
import modules from './Modules'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            holding: -1,
            modules: modules,
            moduleStyles: [
                {
                    //Covid
                    width: '600px',
                    height: '547px',
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
                    height: '332px',
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
                    height: '332px',
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
        if (ev.target.className !== 'module') return
        this.setState({ holding: index })
        console.log(index)
    }

    handleMouseUp = (ev, index) => {
        const { modules, moduleStyles, holding } = this.state
        if (holding === -1) return
        let rects = []

        for (let i = 0; i < modules.length; i++) {
            rects.push({
                left: parseInt(moduleStyles[i].left, 10),
                right:
                    parseInt(moduleStyles[i].left, 10) +
                    parseInt(moduleStyles[i].width, 10) +
                    10,
                top: parseInt(moduleStyles[i].top, 10),
                bottom:
                    parseInt(moduleStyles[i].top, 10) +
                    parseInt(moduleStyles[i].height, 10) +
                    10
            })
        }
        rects[index] = {
            left: ev.target.offsetLeft,
            right: ev.target.offsetLeft + ev.target.offsetWidth + 8,
            top: ev.target.offsetTop,
            bottom: ev.target.offsetTop + ev.target.offsetHeight
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
                            rects[j].left++
                            rects[j].right++
                        }
                    }
                }
            }
        }

        let buffer = moduleStyles
        for (let i = 0; i < modules.length; i++) {
            buffer[i] = {
                left: rects[i].left + 'px',
                width:
                    i === index
                        ? rects[i].right - rects[i].left - 10 + 'px'
                        : moduleStyles[i].width,
                top: rects[i].top + 'px',
                paddingBottom: '0%',
                minWidth: '300px',
                minHeight: '300px',
                maxWidth: '800px',
                maxHeight: '800px'
            }
        }

        this.setState({ moduleStyles: buffer, holding: -1 })
    }

    render() {
        const { moduleStyles } = this.state
        return (
            <div>
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
