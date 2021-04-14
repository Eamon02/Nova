import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteRig } from '../../actions/profile';

const Rig = ({ rig, deleteRig }) => {
  const rigs = rig.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.telescope}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <button onClick={() => deleteRig(exp._id)} className='btn btn-danger'>
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
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
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
