import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, Button, TextField } from '@material-ui/core';
import { Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';

import axios from 'axios';
import useStyles from './styles';
import Copyright from '../Copyright'

export default function SignUp() {
  const classes = useStyles();
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    CNFpassword: ''
  });
  const [isVerified, setIsVerified] = React.useState(false);

  document.title = 'Sign Up'

  const handleChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  };

  const handlePost = event => {
    event.preventDefault();

    const user = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      contact_no: data.contact,
      password: data.password
    };

    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios.post(`http://192.168.0.104:8000/api/register/`, user, config)
      .then(res => {
        if (res.status === 201) {
          setIsVerified(true);
        }
      });
  };

  let msg =
    <Typography variant="h5" align="center">
      Your account has been created. Click on the link in your email to verify the account.
    </Typography>;

  if (isVerified) {
    return msg;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align={'center'}>
          Create Your CHMS Account
        </Typography>
        <Typography variant="subtitle1" align={'center'}>
          Continue to CHMS
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Contact"
                name="contact"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="CNFpassword"
                label="Confirm Password"
                type="password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handlePost}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/login' variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
