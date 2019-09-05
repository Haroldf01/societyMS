import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './Components/SignIn'
import SingUp from './Components/SignUp'
import Checkout from './Components/Forms/Checkout';
import Dashboard from './Components/Dashboard/Dashboard'
import SimpleSelect from './Components/Forms/SimpleSelect'

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/login' component={SignIn} />
                  <Route path='/signup' component={SingUp} />
                  <Route path='/society' component={Checkout} />
                  <Route path={'/dashboard'} component={Dashboard}/>
                  <Route path={'/select'} component={SimpleSelect}/>
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
