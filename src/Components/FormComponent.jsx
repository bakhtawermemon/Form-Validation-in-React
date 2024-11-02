import React, { useState } from 'react';

function FormComponent() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
  };

  const validateForm = () => {
    const errors = {};
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
   
  <form onSubmit={handleSubmit} className="p-5 border border-4 border-warning rounded-4 shadow-sm bg-danger" style={{ maxWidth: '600px' }}>
       <div className='row'>
          <div className="mb-3">
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              className="form-control w-100"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          </div>
      
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Confirm Password"
          />
          {formErrors.confirmPassword && (
            <div className="text-danger mt-1">
              {formErrors.confirmPassword}
            </div>
          )}
        </div>
        
        <button type="submit" className="mt-4 fw-bold btn btn-warning w-100">
          Submit
        </button>
      </form>

  );
}

export default FormComponent;

