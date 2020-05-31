import './Footer.scss'

import { inject, observer, PropTypes } from 'mobx-react'
import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

@inject('date') // Inject the "date" store to the props from the Provider
@inject('user') // Inject the "user" store to the props from the Provider
@observer
class Footer extends Component {
    constructor(props) {
        super(props)

        // Bind handlers
        this.handleClick = this.handleClick.bind(this)
    }

    // Set the proptypes
    static propTypes = {
        date: PropTypes.objectOrObservableObject,
        user: PropTypes.objectOrObservableObject
    }

    handleClick(event) {
        // Get the selected locale
        const locale = event.target.text

        // Change the locale (will change the time format in the other Component)
        this.props.date.setLocale(locale)
    }

    render() {
        // Get data from the props (stores) instead of the internal state
        const { locale } = this.props.date
        const { user } = this.props

        // Automatically show the current locale on the dropdown title
        const localeTitle = { title: `Locale: ${locale}` }

        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
                <Navbar.Brand href="#home">{user.username}</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavDropdown {...localeTitle} drop="up">
                        <NavDropdown.Item onClick={this.handleClick}>
                            fr-FR
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={this.handleClick}>
                            en-US
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer
