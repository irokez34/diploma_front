import { useState } from 'react';
import { Form, LabelForm, InputForm, BtnForm } from './LoginForm.styled';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const { username, password } = e.target.elements;
    login({ username: username.value, password: password.value });
    form.reset();
    setFormData({ username: '', password: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Username
        <InputForm
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
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
      </LabelForm>
      <BtnForm
        onClick={() => {
          navigate('/diploma_front/auth/register');
        }}
      >
        Sign Up
      </BtnForm>
     
      <BtnForm type="submit">Log In</BtnForm>
    </Form>
  );
};
