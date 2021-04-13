import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import './Navbar.css';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  );

  return (
    <>
    <nav className='navbar bg-dark'>
      <ul>
        <li>
          <Link to='/' className='fas fa-home'></Link>
        </li>
        <>{isAuthenticated ? authLinks : guestLinks}</>
      </ul>
    </nav>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
