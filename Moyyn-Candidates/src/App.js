import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { 
   Divider,
} from '@material-ui/core';
import Candidate from './pages/Candidate';
import Form from './pages/Form';
import './App.css';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'


const App = () => {

   const [email, setEmail] = useState('');
   const [suggestions, setSuggestions] = useState({moyyn: [], moberries: [], talentuno: []}); //should be an empty object

   return (
      <React.Fragment>
         <Header/>

            <Router>
                     <Switch>
                        <Route path='/application' >
                           <Form
                              setEmail={setEmail} 
                              setSuggestions={setSuggestions} 
                           />
                        </Route>
                        <Route path='/candidate'  >
                           <Candidate 
                              email={email}
                              setEmail={setEmail}
                              suggestions={suggestions} 
                              setSuggestions={setSuggestions} 
                             />
                        </Route>
                        <Redirect to='/application' />
                     </Switch>
            </Router>
         

         <Divider/>
         <Footer/>
      </React.Fragment>
   );
}

export default App;
