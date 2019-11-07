import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, Button, TextField } from '@material-ui/core';
import { Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Copyright from '../Copyright';

export default function ResetPassword() {
	const classes = useStyles();

	document.title = 'Reset Password'

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5" align={'centers'}>
					Reset Password
				</Typography>

				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Email Address"
						name="email"
						disabled
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="New Password"
						type="password"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="CNFpassword"
						label="Confirm Password"
						type="password"
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						New Password
					</Button>

				</form>
			</div>
			<Box mt={3}>
				<Copyright />
			</Box>
		</Container>
	);
}
