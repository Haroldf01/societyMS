import React, { forwardRef } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import useStyles from './styles';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function GeneralLedgerTable() {
	const [state, setState] = React.useState({
		columns: [
			{
				title: 'Date',
				editable: 'never',
				headerStyle: {
					width:50,
					maxWidth: 100
				}
			},
			{
				title: 'Participants',
				field: 'participants',
			},
			{ title: 'Credit', field: 'credit' },
			{ title: 'Debit', field: 'debit' },
			{
				title: 'Balance',
				field: 'balance',
			},
		],
		data: [
			// SECTION Here i can do an api call for populating data
		],
	});

	return (
		<MaterialTable
			icons={tableIcons}
			columns={state.columns}
			options={{
				search: false,
				showTitle: false
			}}
			components={{
				// Container: props => <div style={{ background: '##ffffff' }}>{props.children}</div>,
				Container: React.Fragment
			}}
			data={state.data}
			editable={{
				// NOTE If needed adding a row functionlity

				// onRowAdd: newData =>
				// 	new Promise(resolve => {
				// 		setTimeout(() => {
				// 			resolve();
				// 			const data = [...state.data];
				// 			data.push(newData);
				// 			setState({ ...state, data });
				// 		}, 600);
				// 	}),

					// NOTE If needed action like edit or delete

				// onRowUpdate: (newData, oldData) =>
				// 	new Promise(resolve => {
				// 		setTimeout(() => {
				// 			resolve();
				// 			const data = [...state.data];
				// 			data[data.indexOf(oldData)] = newData;
				// 			setState({ ...state, data });
				// 		}, 600);
				// 	}),
				// onRowDelete: oldData =>
				// 	new Promise(resolve => {
				// 		setTimeout(() => {
				// 			resolve();
				// 			const data = [...state.data];
				// 			data.splice(data.indexOf(oldData), 1);
				// 			setState({ ...state, data });
				// 		}, 600);
				// 	}),
			}}
		/>
	);
}

export default function Tracker() {
	const classes = useStyles();

	document.title = 'General Ledger';

	return (
		<React.Fragment>
			<CssBaseline />

			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant="h6" color={'textSecondary'} >
						General Ledger
					</Typography>
					<GeneralLedgerTable />
				</Paper>
			</main>

		</React.Fragment>
	);
}
