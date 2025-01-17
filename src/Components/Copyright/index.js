import React from 'react';
import { Link, Typography } from '@material-ui/core/';


export default function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="http://arsalaan.net/">
				Arsalaan
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
