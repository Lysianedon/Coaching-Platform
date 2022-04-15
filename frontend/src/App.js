import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//css
//Pages
import Home from './views/home/home';
import DashboardAdmin from './views/dashboard-admin/dashboardAdmin';
import DashboardUser from './views/dashboard-user/dashboardUser';
import Contact from './views/contact/contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard/admin" component={DashboardAdmin} />
          <Route exact path="/dashboard/user" component={DashboardUser} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;