import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WatchList from './pages/WatchList'
import Navbar from './components/Navigationbar';
import CreateIpo from './pages/CreateIpo';
import Research from './pages/Research';
import Bid from './pages/Bid';
import ClientBids from './pages/ClientBids';
import ClientAuction from './pages/ClientAuction';
import {Provider} from "react-redux";
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
      <Router>
      <Navbar />
        <div>
          <Switch>
          <Route path="/auction" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/createipo" component={CreateIpo} />
          <Route path="/research" component={Research} />
          <Route path="/bid" component={Bid} />
          <Route path='/clientbids' component={ClientBids}/>
          <Route path='/clientauction' component={ClientAuction}/>
          </Switch>
        </div>
      </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
