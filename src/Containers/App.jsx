import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import 'tachyons';
import Preloader from '../Components/Preloader';
import Signup from '../Components/CompanySignUp/SignUp';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';

function App(){
    return (
      <div className='App flex flex-column items-center'>
        <Header/>
        <Router>
          <Switch>
            <Route exact path='/'>
                <Signup/> 
            </Route>
            <Route exact path='/Dashboard'>
              <Preloader />
              <Dashboard />
            </Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
}

export default App;
