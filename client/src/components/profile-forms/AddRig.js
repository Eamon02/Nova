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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className='large text-primary'>Add A Rig</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Add a telescope rig and equipment
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
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='telescope'
            name='telsecope'
            // value={telescope}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='mount'
            name='mount'
            // value={mount}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='camera'
            name='camera'
            // value={camera}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='guidescope'
            name='guidescope'
            // value={guidescope}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Job Description'
            // value={description}
            onChange={onChange}
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
