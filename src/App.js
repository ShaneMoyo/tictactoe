import React, { useState } from 'react';
import TicTacToe from './TicTacToe'; 
import GetGists from './GetGists'; 

import { 
  BrowserRouter as Router,
  Link, 
  Switch, 
  Route
} from 'react-router-dom'; 

import './App.css';

function App() {
 
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/gists">Gists</Link>
              </li>
              <li>
                <Link to="/tictactoe">Tic Tac Toe</Link>
              </li>
              <li>
               <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/tictactoe" component={TicTacToe} />
          <Route path="/gists" component={GetGists}/>
          <Route path="/">
            <h1>HOME</h1>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
