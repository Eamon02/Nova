import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { logout } from '../../../actions/auth';

const Header = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <>
      <div className='header'>
        <Link to='/mainpage' className='x-large'>
          NOVA
        </Link>
      </div>
      {/* <ul>
        <li>
          <a onClick={logout} href='#!'>
            <i className='fas fa-sign-out-alt' />{' '}
            <span className='hide-sm'>Logout</span>
          </a>
        </li>
      </ul> */}
    </>
  );

  const guestLinks = <></>;

  return <>{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}</>;
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
