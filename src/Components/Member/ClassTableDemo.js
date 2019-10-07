import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';

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

class Editable extends React.Component {
	tableIcons = {
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

	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{ title: 'Vehicle ID', field: 'vehicleID', type: 'numeric' },
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
				{ vehicleID: '1', registrationNo: 'MH-02-BW-6471', vehicleType: 0, parkingType: 1 },
			]
		}
	}

	render() {
		return (
			<MaterialTable
				icons={this.tableIcons}
				title="Editable Preview"
				columns={this.state.columns}
				options={{
					search: false
				}}
				data={this.state.data}
				editable={{
					onRowAdd: newData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								{
									const data = this.state.data;
									data.push(newData);
									this.setState({ data }, () => resolve());
								}
								resolve()
							}, 1000)
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								{
									const data = this.state.data;
									const index = data.indexOf(oldData);
									data[index] = newData;
									this.setState({ data }, () => resolve());
								}
								resolve()
							}, 1000)
						}),
					onRowDelete: oldData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								{
									let data = this.state.data;
									const index = data.indexOf(oldData);
									data.splice(index, 1);
									this.setState({ data }, () => resolve());
								}
								resolve()
							}, 1000)
						}),
				}}
			/>
		)
	}
}

export default Editable;