import React, {useState} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from '../Components/Header/DashboardHeader';
import Login from '../Components/AdminLogin/Login';
import Dashboard from '../Components/Dashboard/Dashboard';
import 'tachyons';
import Jobs from '../Components/Jobs/Joblist';
import {dummyjobposts as jobdata, dummycandidates as candidates} from '../util/data/dummy'; 
import Candidates from '../Components/Candidates/Candidateslist';

function App() {

  const [loggedin, setloggedin] = useState(localStorage.getItem("user")|| false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            {loggedin?<Redirect to='/dashboard'/>:<Redirect to='/'/>} 
            <Login setlog={setloggedin}/>
          </Route>
          <Route exact path='/dashboard'>
              {loggedin?<Redirect to='/dashboard'/>:<Redirect to='/'/>} 
              <div>
                <Header/>
                <Dashboard/>
              </div>
          </Route>
          <Route exact path='/jobs'>
            <div className="flex ma-4 w-90-l w-90-m w-100 center ">
              <Jobs jobs={jobdata}/>
            </div>
          </Route>
          <Route exact path='/candidates'>
            <Candidates candidates={candidates}/>
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
