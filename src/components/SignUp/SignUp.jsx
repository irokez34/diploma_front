import { useState } from 'react';
import { Form, LabelForm, BtnForm, InputForm } from './SignUp.styled';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = ({ signUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    repeatPassword: '',
    username: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: '',
    password: '',
    repeatPassword: '',
    username: '',
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.repeatPassword.trim()) {
      newErrors.repeatPassword = 'Please repeat your password';
    } else if (formData.password !== formData.repeatPassword) {
      newErrors.password = 'Passwords do not match';
      newErrors.repeatPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      signUp(formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </LabelForm>
      <LabelForm>
        Username
        <InputForm
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </LabelForm>
      <LabelForm>
        Password
        <InputForm
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </LabelForm>
      <LabelForm>
        Repeat password
        <InputForm
          type="password"
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
          autoComplete="new-password"
        />
        {errors.repeatPassword && (
          <p style={{ color: 'red' }}>{errors.repeatPassword}</p>
        )}
      </LabelForm>
      <BtnForm type="submit">Sign Up</BtnForm>
      <BtnForm
        type="button"
        onClick={() => {
          navigate('/diploma_front/auth/login');
        }}
      >
        Back to Log In
      </BtnForm>
    </Form>
  );
};
