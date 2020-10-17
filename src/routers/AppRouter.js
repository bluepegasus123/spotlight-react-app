import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import SearchPage from "../components/SearchPage"
import BusinessSubmission from "../components/BusinessSubmission"

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/contact" component={BusinessSubmission}/>
    </Switch>
  </BrowserRouter>
);


export default AppRouter;