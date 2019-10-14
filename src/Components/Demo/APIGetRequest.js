import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class PersonList extends React.Component {
	state = {
		persons: [],
		isVerified: false
	};

	componentDidMount() {
		const { match: {params} } = this.props;

		console.log('hey', params)

		axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
		// axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				let status = res.status;
				console.log( res.data );
				if (status === 200) {
					this.setState({
						isVerified: true
					})
				}
				this.setState({ persons: res.data })
			})
	}

	render() {
		if (this.state.isVerified) {
			return <Redirect to = {{ pathname: '/login' }} />
		}
		return <React.Fragment>
			<ul>
				{/* {this.state.persons.map(
					person => <li key={person.id}>{person.name}</li>)} */}
			</ul>
		</React.Fragment>
	}
}
