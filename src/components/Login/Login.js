import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '150px',
    boxSizing:'border-box',
    padding:'20px',
    border:'1px solid grey'
  },
  textField: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setEmailError('Please enter a valid email');
    }
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 6;
    if (!isValid) {
      setPasswordError('Password must be at least 6 characters');
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      // Perform login logic here
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <Container maxWidth="xs" className={classes.container}>
      <img style={{width:140,padding:'10px 0px'}} src={require('../../assets/logo.png')} alt="app Logo" />
      <Typography sx={{fontFamily:'Regular',textAlign:'center'}} variant='h5' >Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          size='small'
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
          error={!!emailError}
          helperText={emailError}
          className={classes.textField}
          fullWidth
          required
          sx={{my:2}}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          size='small'
          onChange={handlePasswordChange}
          onBlur={validatePassword}
          error={!!passwordError}
          helperText={passwordError}
          className={classes.textField}
          fullWidth
          required
        />
        <Link to={'/Signup'} > Don't Have Account? </Link>
        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          fullWidth
          sx={{my:2,backgroundColor:"#730775"}}
          disableElevation
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
