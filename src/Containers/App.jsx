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
import DashboardHeader from '../Components/Header/DashboardHeader';
import JobPostForm from '../Components/PostJob/JobForm';
import Settings from '../Components/Settings/Settings';
import Candidates from '../Components/Candidates/Candidateslist';
import {postjobinitialvalues,signupforminitialvalues} from "../util/data/initial-values";
import EditJob from '../Components/PostJob/EditJob';

function App(){

    const backend_url = "https://www.moyyn.com";
    const [registered, setregistered] = useState(false);
    const [loggedin] = useState(true); 
    const [data,setdata] = useState(undefined);
    const [candidatedata] = useState([1,2,3,4,5,6,7,8,9,1,1,1,11,undefined]);

    return (
      <div className='App w-100 vh-100 flex flex-column items-center'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header/>
              <Signup backend_url={backend_url} registered={registered} setregistered={setregistered} signupforminitialvalues={signupforminitialvalues}/> 
              <Footer/>
            </Route>
            <Route exact path='/conformation'>
              {registered?<Redirect to='/conformation'/>:<Redirect to='/'/>} 
              <Header/>
              <Preloader/>
              <RegistrationConformation/>
              <Footer/>
            </Route>
            <Route exact path='/dashboard'>
              {loggedin?<Redirect to='/dashboard'/>:<Redirect to='/'/>} 
              <DashboardHeader/>
              <Dashboard data={data}/>
            </Route>
            <Route exact path='/postjob'>
              {loggedin?<Redirect to='/postjob'/>:<Redirect to='/'/>} 
              <DashboardHeader/>
              <JobPostForm setdata={setdata} postjobinitialvalues={postjobinitialvalues}/>
            </Route>
            <Route exact path='/Settings'>
              {loggedin?<Redirect to='/Settings'/>:<Redirect to='/'/>} 
              <DashboardHeader/>
              <Settings/>
            </Route>
            <Route exact path='/Candidates'>
              {loggedin?<Redirect to='/Candidates'/>:<Redirect to='/'/>} 
              <DashboardHeader/>
              <Candidates candidates={candidatedata}/>
            </Route>
            <Route exact path='/EditJob'>
              {loggedin?<Redirect to='/EditJob'/>:<Redirect to='/'/>} 
              <DashboardHeader/>
              <EditJob setdata={setdata}/>
            </Route>
            <Route>
              <Redirect to='/'/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
