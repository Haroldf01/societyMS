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
	const [selectType, setSelectType] = React.useState('Income');
	const [value, setValue] = React.useState('');

	const VIEWS = [
		{
			name: 'Income',
			value: ['Selling of Flats', 'Selling of Scraps', 'Mobile Tower', 'Ad Hoardings', 'Club House Rental', 'Others']
		}, {
			name: 'Expense',
			value: ['Security', 'House Keeping', 'Electricity Bills', 'Water Bills', 'HK Materials', 'Stationary', 'Staff Salary', 'fees', 'Gardner', 'Others']
		}
	]

	const handleChange = (newIndex) => {
		setValue( view.value[newIndex] );
	}

	const view = VIEWS.filter(({ name }) => name === selectType)[0]

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
								<Select value={selectType} onChange={e => setSelectType(e.target.value)}>
									{VIEWS.map(({ name }) => (
										<MenuItem key={name} value={name}>{name}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>

						{/* Review: https://stackoverflow.com/questions/35379140/reactjs-materialui-selectfield-event-handling */}
						
						<Grid item lg={4} md={4} sm={6} xs={6}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='head'>Head</InputLabel>
								<Select value={value} onChange={(e, newIndex) => handleChange(newIndex)} >
									{view.value.map(function(v, index) {
										return <MenuItem key={index} value={v}>{v}</MenuItem>
									})}
								</Select>
							</FormControl>
						</Grid>

						<Grid item lg={4} md={4} sm={6} xs={6}>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='unitType'>Payment Type</InputLabel>
								<Select value={value} onChange={e => setValue(e.target.value)}>
									<MenuItem value='Cash'>Cash</MenuItem>
									<MenuItem value='Cheque'>Cheque</MenuItem>
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
