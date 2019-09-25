import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './Components/SignIn'
import SingUp from './Components/SignUp'
import RegisterSociety from './Components/Forms/RegisterSociety';
import Dashboard from './Components/Dashboard/Dashboard';
import BillingDetails from './Components/Forms/CaptureBillingDetails';
import Members from './Components/Member';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/login' component={SignIn} />
					<Route path='/signup' component={SingUp} />
					<Route path='/society' component={RegisterSociety} />
					<Route path={'/dashboard'} component={Dashboard} />
					<Route path={'/billing'} component={BillingDetails} />
					<Route path={'/member'} component={Members} />
					<Route path={'/forgetpwd'} component={ForgetPassword} />
					<Route path={'/resetpwd'} component={ResetPassword} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home</h1>
	</div>
);

export default App;
