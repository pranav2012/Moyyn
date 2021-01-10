import React, {useState,useEffect} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from '../Components/Header/DashboardHeader';
import Login from '../Components/AdminLogin/Login';
import Dashboard from '../Components/Dashboard/Dashboard';
import 'tachyons';
import Jobs from '../Components/Jobs/Joblist';
import Candidates from '../Components/Candidates/Candidateslist';

function App() {

  const [loggedin, setloggedin] = useState(false);

  const [jobdata, setjobdata] = useState([]);
  const [candidates, setcandidates] = useState([])

  useEffect(() => {
    let log = localStorage.getItem("logstate");
    setloggedin(JSON.parse(log));
  });

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
                <Header setlog={setloggedin}/>
                <Dashboard setjobdata={setjobdata}/>
              </div>
          </Route>
          <Route exact path='/jobs'>
            {loggedin?<Redirect to='/jobs'/>:<Redirect to='/'/>} 
            <div className="flex ma-4 w-90-l w-90-m w-100 center ">
              <Jobs jobs={jobdata} setcandidatedata={setcandidates}/>
            </div>
          </Route>
          <Route exact path='/candidates'>
            {loggedin?<Redirect to='/candidates'/>:<Redirect to='/'/>} 
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
