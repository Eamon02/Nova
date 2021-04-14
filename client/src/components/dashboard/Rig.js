import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteRig } from '../../actions/profile';

const Rig = ({ rig, deleteRig }) => {
  const rigs = rig.map((rig) => (
    <tr key={rig._id}>
      <td>{rig.name}</td>
      <td className='hide-sm'>{rig.telescope}</td>
      <td className='hide-sm'>{rig.mount}</td>
      <td className='hide-sm'>{rig.camera}</td>
      <td className='hide-sm'>{rig.guidescope}</td>
      <td>
        <button onClick={() => deleteRig(rig._id)} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className='my-2'>Rigs</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Rigs</th>
            <th className='hide-sm'>Telescope</th>
            <th className='hide-sm'>Mount</th>
            <th className='hide-sm'>Camera</th>
            <th className='hide-sm'>Guidescope</th>
            <th />
          </tr>
        </thead>
        <tbody>{rigs}</tbody>
      </table>
    </>
  );
};

Rig.propTypes = {
  rig: PropTypes.array.isRequired,
  deleteRig: PropTypes.func.isRequired,
};

export default connect(null, { deleteRig })(Rig);
