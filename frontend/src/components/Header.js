import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Techvaly</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FontAwesomeIcon icon={faCartPlus} /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  Sign In <FontAwesomeIcon icon={faSignInAlt} />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
