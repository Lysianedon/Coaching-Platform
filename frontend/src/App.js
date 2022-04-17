import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//css
//Pages
import Home from './views/home/home';
import Presentation from './views/presentation/presentation';
import Coaching from './views/coaching/coaching';
import Contact from './views/Contact';
import Login from './views/Login';
import QuestionaireStarter from './views/questionaireStarter/questionaireStarter';

// Dashboard
import DashboardAdmin from './views/dashboard/dashboardAdmin';
import DashboardUser from './views/dashboard/dashboardUser';
import DashboarSignup from './views/dashboard/dashboardSignup';
import DashboarModify from './views/dashboard/dashboardModify';


function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/presentation" component={Presentation} />
          <Route exact path="/coaching" component={Coaching} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/questionaire/starter" component={QuestionaireStarter} />

          <Route exact path="/dashboard/admin" component={DashboardAdmin} />
          <Route exact path="/dashboard/user" component={DashboardUser} />
          <Route exact path="/dashboard/admin/users" component={DashboarSignup} />
          <Route exact path="/dashboard/admin/users/modify" component={DashboarModify} />
          

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;