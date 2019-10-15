var Select = React.createClass({
	getInitialState: function () {
		return {
			companies: [
				{ name: 'company1', jobs: ['job1-1', 'job1-2', 'job1-3'] },
				{ name: 'company2', jobs: ['job2-1', 'job2-2', 'job2-3'] },
				{ name: 'company3', jobs: ['job3-1', 'job3-2', 'job3-3'] }
			],
			selectedCompany: 'company1'
		}
	},
	handleChange: function (e) {
		console.log(this.state)
		this.setState({ selectedCompany: e.target.value })
	},
	render: function () {
		let company = this.state.companies.filter(company => {
			return company.name === this.state.selectedCompany
		})
		return (
			<div>
				jobs
		  <select>
				{
					company[0].jobs.map((job, i) => {
						return <option>{job}</option>
					})
				}
			</select>

				companies
		  <select value={this.state.selectedCompany} onChange={this.handleChange.bind(this)}>
					{
						this.state.companies.map((company, i) => {
							return <option>{company.name}</option>
						})
					}
				</select>
			</div>
		)
	}
});