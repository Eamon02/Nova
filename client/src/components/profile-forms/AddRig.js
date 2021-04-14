import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRig } from '../../actions/profile';

const AddRig = ({ addRig, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    telescope: '',
    mount: '',
    camera: '',
    guidescope: '',
    description: '',
  });

  // const { name, telescope, mount, camera, guidescope, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className='large text-primary'>Add A Rig</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Add equipment to create a Rig
      </p>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addRig(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name your Rig'
            name='name'
            // value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='telescope'
            name='telsecope'
            // value={telescope}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='mount'
            name='mount'
            // value={mount}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='camera'
            name='camera'
            // value={camera}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='guidescope'
            name='guidescope'
            // value={guidescope}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Job Description'
            // value={description}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </>
  );
};

AddRig.propTypes = {
  addRig: PropTypes.func.isRequired,
};

export default connect(null, { addRig })(AddRig);
