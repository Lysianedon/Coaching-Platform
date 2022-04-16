import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//css
//Pages
import Home from './views/home/home';
import DashboardAdmin from './views/dashboard/dashboardAdmin';
import DashboardUser from './views/dashboard/dashboardUser';
import DashboarSignup from './views/dashboard/dashboardSignup';
import DashboarModify from './views/dashboard/dashboardModify';
import Contact from './views/contact/contact';
import Login from './views/login/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard/admin" component={DashboardAdmin} />
          <Route exact path="/dashboard/user" component={DashboardUser} />
          <Route exact path="/dashboard/admin/users" component={DashboarSignup} />
          <Route exact path="/dashboard/admin/users/modify" component={DashboarModify} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;