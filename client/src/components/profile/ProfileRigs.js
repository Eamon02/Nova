import React from 'react';
import PropTypes from 'prop-types';

const ProfileRigs = ({ rigs: { name, telescope, mount, camera } }) => (
	<div>
		<h3 className='text-dark'>{name}</h3>

		<p>
			<strong>Telescope: </strong> {telescope}
		</p>
		<p>
			<strong>Mount: </strong> {mount}
		</p>
		<p>
			<strong>Camera: </strong> {camera}
		</p>
	</div>
);

ProfileRigs.propTypes = {
	rigs: PropTypes.object.isRequired,
};

export default ProfileRigs;
