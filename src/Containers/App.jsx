import React, {useState} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import 'tachyons';
import Signup from '../Components/CompanySignUp/SignUp';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import Preloader from '../Components/Preloader';

function App(){
    const backend_url = "https://www.moyyn.com";
    const [registered, setregistered] = useState(localStorage.getItem('registered') || false);
    return (
      <div className='App flex flex-column items-center'>
        <Header/>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Signup backend_url={backend_url} registered={registered} setregistered={setregistered}/> 
            </Route>
            <Route exact path='/Dashboard'>
              {registered?<Redirect to='/Dashboard'/>:<Redirect to='/'/>} 
              <Preloader/>
              <Dashboard/>
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
