import React from 'react'
import TextField from '@material-ui/core/TextField';

class DocumentInput extends React.Component {
	render() {
		return (
			<React.Fragment>
				<TextField
					required
					id="penaltyAmt"
					label="Penalty Amount"
					fullWidth
				/>

				<TextField
					required
					id="penaltyAmt"
					label="Penalty Amount"
					fullWidth
				/>

			</React.Fragment>
		);
	}
}

class DocumentsFieldSet extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			rows: []
		}

		this.add = this.add.bind(this);
	}

	add() {
		const rows = this.state.rows.concat(DocumentInput);
		this.setState({ rows });
	}

	render() {
		const rows = this.state.rows.map((Element, index) => {
			return <Element key={index} index={index} />
		});

		return <div>
			<button onClick={this.add}>Add</button>

			<div className="inputs">
				{rows}
			</div>
		</div>
	}
}

export default DocumentsFieldSet;
