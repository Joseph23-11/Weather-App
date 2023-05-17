import React from 'react';
import logoImg from '../assets/images/login-img.png';
import arrowRight from '../assets/icons/arrow-right.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Box, TextField } from '@mui/material';

const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
});

const initialValuesLogin = {
  email: '',
  password: '',
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate('/dashboard');
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  return (
    <div>
      <div className='login-page'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='background'>
              <h1>Selamat Datang!!</h1>
              <img src={logoImg} alt='Login' />
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='input-data'>
              <h1>Sistem Penutupan Ruang Jemuran</h1>
              <p>Isi data Anda</p>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValuesLogin}
                validationSchema={loginSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  resetForm,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box>
                      <TextField
                        label='Email'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name='email'
                        error={Boolean(
                          touched.email && Boolean(errors.password)
                        )}
                        helperText={touched.email}
                        sx={{
                          width: '346px',
                          height: '56px',
                          m: '15px',
                          gridColumn: 'span-4',
                        }}
                      />

                      <TextField
                        label='Password'
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name='password'
                        error={
                          Boolean(touched.password) && Boolean(errors.password)
                        }
                        helperText={touched.password}
                        sx={{
                          width: '346px',
                          height: '56px',
                          gridColumn: 'span-4',
                          m: '15px',
                        }}
                      />
                    </Box>

                    <button
                      class='btn btn-primary d-flex align-content-center flex-wrap justify-content-center button'
                      type='submit'
                    >
                      Submit <img src={arrowRight} alt='arrow-right' />
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
