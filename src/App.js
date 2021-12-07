import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Prods from './Pages/Prods';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Products" component={Prods}/>
      </Switch> 
    </>
  )
}

export default App;
