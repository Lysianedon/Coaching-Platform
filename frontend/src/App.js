import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//css
//Pages
import Home from './views/home/home';
import Dashboard from './views/dashboard/dashboard';
import DashboardUser from './views/dashboard-user/dashboardUser';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/user" component={DashboardUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;