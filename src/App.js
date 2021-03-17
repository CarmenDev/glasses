import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Urlaub from './components/Urlaub/Urlaub';
import Zimmer from './components/Zimmer/Zimmer';
import Geschlecht from './components/Geschlecht/Geschlecht';
import Gesichtsform from './components/Gesichtsform/Gesichtsform';
import Ergebnis from './components/Ergebnis/Ergebnis';

function App() {

  return (
    <>
      <Router>
          <div className='app'>
            <div className='app-container'>
             <Route path="/" exact component={Home} />
             <Route path="/urlaub" exact component={Urlaub} />
             <Route path="/zimmer" exact component={Zimmer} />
             <Route path="/geschlecht" exact component={Geschlecht} />
             <Route path="/gesichtsform" exact component={Gesichtsform} />
             <Route path='/ergebnis' exact component={Ergebnis} />
          </div>   
         </div>
      </Router>
    </>
  )
}

export default App
