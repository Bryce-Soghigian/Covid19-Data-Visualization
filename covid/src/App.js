import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import State from './components/State/State';


function App() {
  return (
    <div className="App">
      <Route exact path = "/"/>
      <Route path="/State" component={State}/>
    </div>
  );
}

export default App;
