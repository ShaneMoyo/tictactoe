import React, { useState } from 'react';
import TicTacToe from './TicTacToe'; 
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
                <Link to="/">Home</Link>
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
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
