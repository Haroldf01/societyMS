import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Grid, TextField } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business'

const useStyles = makeStyles(theme => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 700,
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
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
	formControl: {
		minWidth: '100%',
		marginTop: '0px'
	}
}));

export default function Tracker() {
	const classes = useStyles();
	const [values, setValues] = React.useState('');
	const [ type, setType ] = React.useState({
		name: 'income',
		values: ['Selling of Flats', 'Selling of Scraps', 'Mobile Tower', 'Ad Hoardings', 'Club House Rental', 'Others']
	});

	let type_obj = {
		Expense: ['Security', 'House Keeping', 'Electricity Bills', 'Water Bills', 'HK Materials', 'Stationary', 'Staff Salary', 'fees', 'Gardner', 'Others'],
		
	};

	// const handleChange = (event) => {
	// 	setType(values);
	// }

	return (
		<React.Fragment>
			<CssBaseline />

			<main className={classes.layout}>
				<Paper className={classes.paper}>

					<Typography variant="h5" align="center">
						<BusinessIcon /> Income/Expense Tracker
          </Typography>
					<Grid container spacing={3}>
						<Grid item lg={4} md={4} sm={6} xs={6}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='expenseType'>Type</InputLabel>
								<Select value={values} onChange={e => setValues(e.target.value)}>
									<MenuItem value='Income'>Income</MenuItem>
									<MenuItem value='Expense'>Expense</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item lg={4} md={4} sm={6} xs={6}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='head'>Head</InputLabel>
								<Select value={values} onChange={e => setValues(e.target.value)}>
									<MenuItem value='Selling of Flats'>Selling of Flats</MenuItem>
									<MenuItem value='Selling of Scraps'>Selling of Scraps</MenuItem>
									<MenuItem value='Mobile Tower'>Mobile Tower</MenuItem>
									<MenuItem value='Ad Hoardings'>Ad Hoardings</MenuItem>
									<MenuItem value='Club House Rental'>Club House Rental</MenuItem>
									<MenuItem value='Others'>Others</MenuItem>
								</Select>
							</FormControl>
						</Grid>

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
				</Paper>

				<Paper className={classes.paper}>

				</Paper>
			</main>


		</React.Fragment>
	);
}
