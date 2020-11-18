import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import 'tachyons';
import Preloader from '../Components/Preloader';
import Signup from '../Components/CompanySignUp/SignUp';
import Footer from '../Components/Footer/footer';

function App(){
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <div className='flex flex-column items-center'>
                <Signup/> 
                <Footer/>
              </div>
            </Route>
            <Route exact path='/users'>
              <Preloader />
              <Dashboard />
              <Footer/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
