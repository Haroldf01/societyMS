import React from 'react'

class DocumentInput extends React.Component {
	render() {
		return <input
			type="text"
			name={`document-${this.props.index}-document`}
		/>;
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

// ReactDOM.render(
// 	<DocumentsFieldSet />,
// 	document.getElementById('container')
// );
