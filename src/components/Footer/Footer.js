import React, { Component } from 'react'
import { inject, observer, PropTypes } from 'mobx-react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Footer.scss'

@inject('store')
@observer
class Footer extends Component {
    constructor(props) {
        super(props)

        // Bind handlers
        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        store: PropTypes.objectOrObservableObject
    }

    handleClick(event) {
        // Get the selected locale
        const locale = event.target.text

        // Change the locale (will change the time format in the other Component)
        this.props.store.setLocale(locale)
    }

    render() {
        const { user, locale } = this.props.store

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
