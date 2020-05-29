import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { localeSet } from '../../actions'

class Footer extends Component {
    constructor(props) {
        super(props)

        // Bind handlers
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        // Get the selected locale
        const locale = event.target.text

        // Change the locale (will change the time format in the other Component)
        this.props.localeSet(locale)
    }

    render() {
        const { user, locale } = this.props

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

// Proptypes
Footer.propTypes = {
    locale: PropTypes.string.isRequired,
    user: PropTypes.exact({
        username: PropTypes.string.isRequired
    }).isRequired,
    localeSet: PropTypes.func.isRequired
}

// Redux
function mapState(state) {
    return {
        user: state.user,
        locale: state.locale
    }
}

const mapDispatch = {
    localeSet
}

export default connect(mapState, mapDispatch)(Footer)
