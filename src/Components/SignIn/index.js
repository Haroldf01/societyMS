import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, Button, TextField } from '@material-ui/core';
import { Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import useStyles from './styles';
import Copyright from '../Copyright';

export default function SignIn() {
  const classes = useStyles();
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });
  const [isVerified, setIsVerified] = React.useState(false);

  document.title = 'Login';

  const handleChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: data.email,
      password: data.password
    };

    let config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    let token;

    axios.post(`http://192.168.0.104:8000/api/login/`, user, config)
      .then(res => {
        token = res.data.token;
        console.log(typeof(token));
        localStorage.setItem('token', token);
        if (res.status === 200) {
          setIsVerified(true);
        }
      });
  };

  if (isVerified) {
    return <Redirect to={{ pathname: '/dashboard' }} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align={'center'}>
          Sign in
        </Typography>
        <Typography variant="subtitle1" align={'center'}>
          Continue to CHMS
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/forgetpwd' variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signup' variant="body2">
                {"Don't have an account? Sign Up"}
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
