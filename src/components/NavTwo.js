import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { signInUser, signOutUser } from '../api/auth';
import '../api/assets/gsNav.png';

const NavTwo = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="SignInNOut">
      <Navbar className="navbar" light expand="md">
        <NavbarBrand className="nav-title" href="/">
          Gabriel Smith
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <>
              <NavItem>
                <NavLink href="/" className="navColor">
                  Home
                </NavLink>
              </NavItem>
              {user?.isAdmin && (
                <NavItem>
                  <NavLink href="/createPortal" className="navColor">
                    Dev Portal
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink href="/projects" className="navColor">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" className="navColor">
                  Contact
                </NavLink>
              </NavItem>
            </>
          </Nav>
          {user ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={signOutUser}
            >
              Sign Out
            </button>
          ) : (
            <button type="button" className="btn btn-info" onClick={signInUser}>
              Sign In
            </button>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

NavTwo.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

NavTwo.defaultProps = { user: {} };

export default NavTwo;
