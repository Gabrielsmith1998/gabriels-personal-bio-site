import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../api/auth';

function Navigation({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gabriels Personal Bio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {user?.isAdmin && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/createPortal">
                    Dev Portal
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={signOutUser}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-info"
                    type="button"
                    onClick={signInUser}
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = { user: null };

export default Navigation;
