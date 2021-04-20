import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ auth: { isAuthenticated, loading } }) => {
	const authLinks = (
		<>
			<div className='header'>
				<Link to='/mainpage' className='x-large'>
					NOVA
				</Link>
			</div>
		</>
	);

	const guestLinks = <></>;

	return <>{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}</>;
};

Header.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Header);
