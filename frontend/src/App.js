import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//css
//Pages
import Home from './views/home/home';
import Dashboard from './views/dashboard/dashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;