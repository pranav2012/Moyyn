import React, {useState} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import RegistrationConformation from '../Components/RegistrationConformation/RegistrationConformation';
import 'tachyons';
import Signup from '../Components/CompanySignUp/SignUp';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import Preloader from '../Components/Preloader/Preloader';
import Dashboard from '../Components/Dashboard/Dashboard';
import DashboardHeader from '../Components/Dashboard/Header/DashboardHeader';
import JobPostForm from '../Components/PostJob/JobForm';

function App(){

    const backend_url = "https://www.moyyn.com";
    const [registered, setregistered] = useState(false);
    const [loggedin] = useState(true); 
    
    return (
      <div className='App flex flex-column items-center'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header/>
              <Signup backend_url={backend_url} registered={registered} setregistered={setregistered}/> 
            </Route>
            <Route exact path='/conformation'>
              {registered?<Redirect to='/conformation'/>:<Redirect to='/'/>} 
              <Header/>
              <Preloader/>
              <RegistrationConformation/>
            </Route>
            <Route exact path='/dashboard'>
              {loggedin?<Redirect to='/dashboard'/>:<Redirect to='/'/>} 
              <DashboardHeader/>
              <Dashboard/>
            </Route>
            <Route exact path='/postjob'>
              {loggedin?<Redirect to='/postjob'/>:<Redirect to='/'/>} 
              <DashboardHeader/>
              <JobPostForm/>
            </Route>
            <Route>
              <Redirect to='/'/>
            </Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
}

export default App;
