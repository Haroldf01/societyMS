import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
	state = {
		name: '',
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();

		console.log('submit')

		const user = {
			name: this.state.name
		}

		axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}

	render() {
		return <React.Fragment>
			<form onSubmit={this.handleSubmit}>
				<label>Person Name:
					<input type="text" name="name" onChange={this.handleChange} />
				</label>

				<button type='submit' >Add</button>
			</form>
		</React.Fragment>
	}
}
