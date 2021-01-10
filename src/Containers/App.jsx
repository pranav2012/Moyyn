import React, {useState,useEffect} from 'react';
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
import {dummyjobposts } from '../util/data/dummy';
import ResetEmail from '../Components/Reset Password/EmailtoReset';
import ResetPass from '../Components/Reset Password/Resetpass';
import Login from '../Components/Login/Login';

function App(){

    const backend_url = "https://www.moyyn.com";
    const [registered, setregistered] = useState(false);

    const [loggedin,setloggedin] = useState(false); 

    const [data,setdata] = useState(dummyjobposts);
    const [candidatedata,setcandidatedata] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
      let test = localStorage.getItem("loggedin");
      setloggedin(JSON.parse(test));
    })

    return (
      <div className='App w-100 vh-100 flex flex-column items-center'>
        <Router>
          <Switch>
            <Route exact path='/'>
            {loggedin?<Redirect to="/dashboard"/>:''}
              <Header/>
              <Signup backend_url={backend_url} registered={registered} setregistered={setregistered} signupforminitialvalues={signupforminitialvalues}/> 
              <Footer/>
            </Route>
            <Route exact path='/login'>
              {loggedin?<Redirect to="/dashboard"/>:''}
              <Header/>
              <Login setlog={setloggedin}/>
              <Footer/>
            </Route>
            <Route exact path='/conformation'>
              {registered?'':<Redirect to='/'/>} 
              <Header/>
              <Preloader/>
              <RegistrationConformation/>
              <Footer/>
            </Route>
            <Route exact path='/dashboard'>
              {loggedin?'':<Redirect to='/'/>} 
              <DashboardHeader logout={setloggedin}/>
              <Dashboard data={data} setcandidatedata={setcandidatedata}/>
            </Route>
            <Route exact path='/postjob'>
              {loggedin?'':<Redirect to='/'/>} 
              <DashboardHeader logout={setloggedin}/>
              <JobPostForm setdata={setdata} postjobinitialvalues={postjobinitialvalues} data={data}/>
            </Route>
            <Route exact path='/Settings'>
              {loggedin?'':<Redirect to='/'/>} 
              <DashboardHeader logout={setloggedin}/>
              <Settings/>
            </Route>
            <Route exact path='/Candidates'>
              {loggedin?'':<Redirect to='/'/>} 
              <DashboardHeader logout={setloggedin}/>
              <Candidates candidates={candidatedata}/>
            </Route>
            <Route exact path='/EditJob'>
              {loggedin?'':<Redirect to='/'/>} 
              <DashboardHeader logout={setloggedin}/>
              <EditJob setdata={setdata}/>
            </Route>
            <Route exact path='/email'>
              <Header/>
              <ResetEmail/>
              <Footer/>
            </Route>
            <Route exact path='/pass'>
              <Header/>
              <ResetPass/>
              <Footer/>
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
