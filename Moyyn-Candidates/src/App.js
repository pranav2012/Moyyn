import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Candidate from './pages/Candidate';
import Form from './pages/Form';
import './App.css';
import Header from './components/Header/header'
import DashboardHeader from './components/Header/DashboardHeader';
import Footer from './components/Footer/footer'
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import EditProfile from './pages/EditProfile';


const App = () => {

   const [email, setEmail] = useState('');
   const [suggestions, setSuggestions] = useState({moyyn: [], moberries: [], talentuno: []}); //should be an empty object
   //console.log(suggestions);

   // useEffect(()=>{
   //    let mail = JSON.parse(localStorage.getItem("email"));
   //    let sug = JSON.parse(localStorage.getItem("suggestions"));
   //    localStorage.setItem("email",JSON.stringify(email));
   //    localStorage.setItem("suggestions",JSON.stringify(suggestions));
   // },[email,suggestions]);

   return (
      <React.Fragment>
            <Router>
                     <Switch>
                        <Route path='/application' >
                           <Header/>
                           <Form
                              setEmail={setEmail} 
                              setSuggestions={setSuggestions} 
                           />
                        </Route>
                        <Route path='/candidate'  >
                           <Header/>
                           <Candidate 
                              email={email}
                              setEmail={setEmail}
                              suggestions={suggestions} 
                              setSuggestions={setSuggestions} 
                             />
                             <Footer/>
                        </Route>
                        {/* <Route path='/login'  >
                           <Header/>
                           <Login/>
                           <Footer/>
                        </Route> */}
                        <Route path='/dashboard' >
                           <DashboardHeader/>
                           <Dashboard email={email} suggestions={suggestions} />
                        </Route>
                        <Route path='/editprofile'  >
                           <DashboardHeader/>
                           <EditProfile/>
                        </Route>
                        <Route path='/settings'  >
                           <DashboardHeader/>
                           <Settings/>
                        </Route>
                        <Redirect to='/application' />
                     </Switch>
            </Router>
         

         {/* <Divider/> */}
         
      </React.Fragment>
   );
}

export default App;
