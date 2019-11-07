import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Grid, Typography } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';

import useStyles from './styles';


const tableIcons = {
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};

function IncomeExpenseTable() {
	const [state, setState] = React.useState({
		columns: [
			{
				title: 'Head',
				field: 'head',
				headerStyle: {
					width: 50,
					maxWidth: 100
				}
			},
			{ title: 'Date', field: 'date' },
			{ title: 'Method', field: 'method', lookup: { 0: 'Cash', 1: 'Cheque' }, },
			{ title: 'Participant', field: 'participant' },
			{ title: 'Status', field: 'status' },
			{ title: 'Amount', field: 'amount' },
		],
		data: [
			{ head: 'Income', date: '22/10/19', method: '0', participant: 'CHMS', status: 'Done', amount: 12345 },
		],
	});
	
	return (
		<MaterialTable
			icons={tableIcons}
			// title=''
			columns={state.columns}
			options={{
				showTitle: false
			}}
			components={{
				Container: React.Fragment
			}}
			data={state.data}
			editable={{
				onRowUpdate: (newData, oldData) =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							const data = [...state.data];
							data[data.indexOf(oldData)] = newData;
							setState({ ...state, data });
						}, 600);
					}),
			}}
		/>
	);
}


export default function Tracker() {
	const classes = useStyles();
	const [selectType, setSelectType] = React.useState('Income');
	const [value, setValue] = React.useState('');

	document.title = 'Income & Expense Tracker';

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
		setValue(view.value[newIndex]);
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
									{view.value.map(function (v, index) {
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
					<React.Fragment>
						<Typography variant="h6" color={'textSecondary'}>
							Incomes &amp; Expenses
						</Typography>
						<IncomeExpenseTable />
					</React.Fragment>
				</Paper>
			</main>
		</React.Fragment>
	);
}
