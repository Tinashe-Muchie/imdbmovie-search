import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Add from './Components/Add/Add'
import Watched from './Components/Watched/Watched'
import TopRated from './Components/TopRated/TopRated'
import Upcoming from './Components/Upcoming/Upcoming'
import WatchList from './Components/WatchList/WatchList'
import GlobalContext from './Components/GlobalContext/GlobalContext'
import './App.css';

function App() {
  return (
    <div className="App">
    <GlobalContext>
    <Router>
      <>
        <Header />

        <Switch>
          <Route exact path='/'>
            <WatchList />
          </Route>
          <Route path='/TopRated'>
            <TopRated />
          </Route>
          <Route path='/Upcoming'>
            <Upcoming />
          </Route>
          <Route path='/Watched'>
            <Watched />
          </Route>
          <Route path='/Add'>
            <Add />
          </Route>
        </Switch>
      </>
      </Router>
      </GlobalContext>
    </div> 
  );
}

export default App;
