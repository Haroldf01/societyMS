import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Typography, Select } from '@material-ui/core';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	formControl: {
    minWidth: '100%',
    marginTop: '0px'
  }
}));

export default function IncomeTracker() {
	const classes = useStyles()
	const [values, setValues] = React.useState('');

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Income Tracker
			</Typography>

			<Grid container spacing={3}>
				<Grid item lg={4} md={4} sm={6} xs={6}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor='unitType'>Unit Type</InputLabel>
						<Select value={values} onChange={e => setValues(e.target.value)}>
							<MenuItem value='Flat'>Flat</MenuItem>
							<MenuItem value='Shop'>Shop</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}
