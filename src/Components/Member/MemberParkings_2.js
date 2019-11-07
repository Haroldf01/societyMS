import React, { forwardRef } from 'react';
import { Typography } from '@material-ui/core';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
};

function TableDemo() {
	const [state, setState] = React.useState({
		columns: [
			// {
			// 	field: 'tableData.id',
			// 	type: 'numeric',
			// 	editable: 'never',
			// },
			{
				title: 'Vehicle Type',
				field: 'vehicleType',
				lookup: { 0: 'Two Wheeler', 1: 'Four Wheeler' }
			},
			{ title: 'Registration No.', field: 'registrationNo' },
			{
				title: 'Parking Type',
				field: 'parkingType',
				lookup: { 0: 'Society Owned', 1: 'Self Owned' },
			},
		],
		data: [
			{ registrationNo: 'MH-02-BW-6471', vehicleType: 0, parkingType: 1 },
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
				onRowAdd: newData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							const data = [...state.data];
							data.push(newData);
							setState({ ...state, data });
						}, 600);
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							const data = [...state.data];
							data[data.indexOf(oldData)] = newData;
							setState({ ...state, data });
						}, 600);
					}),
				onRowDelete: oldData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							const data = [...state.data];
							data.splice(data.indexOf(oldData), 1);
							setState({ ...state, data });
						}, 600);
					}),
			}}
		/>
	);
}

export default function MemberParking() {
	return (
		<React.Fragment>
			<Typography variant="h6" color={'textSecondary'}>
				Add Parking
			</Typography>
			<TableDemo />
		</React.Fragment>
	);
}
