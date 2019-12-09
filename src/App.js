import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SingUp from './Components/SignUp';
import RegisterSociety from './Components/Society';
import Dashboard from './Components/Dashboard/Dashboard';
import BillingDetails from './Components/AccountingAndBilling';
import Members from './Components/Member';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import Tracker from './Components/ExpenseTracker';
import EmailVerification from './Components/EmailVerification';
import FourOhFourError from './Components/Errors/FourOhFour';
import GeneralLedger from "./Components/GeneralLedger";
import LandingPage from './Components/LandingPage';

// import TableDemo from './Components/Member/TableDemo';
// import PersonList from './Components/Demo/APIGetRequest';
// import PersonInput from './Components/Demo/APIPostRequest';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path='/' exact component={LandingPage} />
					<Route path='/login' component={SignIn} />
					<Route path='/signup' component={SingUp} />
					<Route path='/society' component={RegisterSociety} />
					<Route path={'/dashboard'} component={Dashboard} />
					<Route path={'/billing'} component={BillingDetails} />
					<Route path={'/member'} component={Members} />
					<Route path={'/forgetpwd'} component={ForgetPassword} />
					<Route path={'/resetpwd'} component={ResetPassword} />
					<Route path={'/expense'} component={Tracker} />
					<Route path={'/emailverify/:u/:cd'} component={EmailVerification} />
					<Route path={'/gledger'} component={GeneralLedger} />
					<Route component={FourOhFourError} />

					{/* <Route path={'/table'} component={TableDemo} />
					<Route path={'/api/get/:userId'} component={PersonList} />
					<Route path={'/api/post'} component={PersonInput} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
