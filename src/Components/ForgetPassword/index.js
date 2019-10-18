import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Avatar, Button, TextField } from '@material-ui/core';
import { Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import axios from 'axios';

import Copyright from '../Copyright';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function ForgetPassword() {
	const classes = useStyles();
	const [data, setData] = React.useState({
		email: ''
	});
	const [isVerified, setIsVerified] = React.useState(false);

	const handleChange = event => {
		setData({ ...data, [event.target.name]: event.target.value })
	};

	const handleSubmit = event => {
		event.preventDefault();

		const user = {
			email: data.email,
		};

		console.log(user);

		let config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		axios.post(`http://192.168.0.104:8000/api/forgot-password/`, user, config)
			.then(res => {
				console.log('status code', res.status)
				if (res.status === 200) {
					setIsVerified(true);
				}
			});
	};

	if (isVerified) {
	  return <Typography>Reset Password link sent on your email</Typography>;
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5" align={'center'}>
					Forget Password
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
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Reset
          </Button>
				</form>
			</div>
			<Box mt={3}>
				<Copyright />
			</Box>
		</Container>
	);
}
