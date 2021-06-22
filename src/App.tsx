import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/homepage/index';
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/notfound';
import CryptoDetail from './components/homepage/crypto-detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/hompage" component={MainPage} />
        <Route exact path="/hompage/:id" component={CryptoDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
