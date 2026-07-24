import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Validate a single field and return the error message (empty string = valid)
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        return value.length < 5 ? 'Name should have at least 5 characters' : '';
      case 'email':
        return (!value.includes('@') || !value.includes('.'))
          ? 'Email should contain @ and .'
          : '';
      case 'password':
        return value.length < 8 ? 'Password should have at least 8 characters' : '';
      default:
        return '';
    }
  };

  // handleChange - validates as the user types
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // handleSubmit - validates all fields on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password)
    };

    setErrors(newErrors);

    const isValid = !newErrors.name && !newErrors.email && !newErrors.password;

    if (isValid) {
      alert(`Registration successful!\n\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: '', email: '', password: '' });
      setErrors({ name: '', email: '', password: '' });
    } else {
      alert('Please fix the validation errors before submitting.');
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;