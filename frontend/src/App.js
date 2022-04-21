import { React, useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./views/home/home";
import Presentation from "./views/presentation/presentation";
import Coaching from "./views/coaching/coaching";
import Contact from "./views/Contact";
import Login from "./views/Login";
import QuestionnaireStarter from "./views/QuestionnaireStarter";

// Dashboard
import DashboardAdmin from './views/dashboard/dashboardAdmin';
import DashboardUser from './views/dashboard/dashboardUser';
import DashboarSignup from './views/dashboard/dashboardSignup';
import DashboardList from './views/dashboard/dashboardList';

// Composant test
import ContactForm from "./views/test contact/ContactForm";
//Axios
import axios from 'axios';

// export const TasksContexts = createContext();

function App() {

  return (
    <div>
          {/* <TasksContexts.Provider value={tasksContext}> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/presentation" element={<Presentation />} />
          <Route exact path="/coaching" element={<Coaching />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/questionnaire/starter"
            element={<QuestionnaireStarter />}
          />
          {/* Route test */}
          <Route exact path="/contact-form" element={<ContactForm />} />

          <Route exact path="/dashboard/admin" element={<DashboardAdmin/>} />
          <Route exact path="/dashboard/user" element={<DashboardUser/>} />
          <Route exact path="/dashboard/admin/users" element={<DashboarSignup/>} />
          <Route exact path="/dashboard/admin/list" element={<DashboardList/>} />
         
        </Routes>
      </BrowserRouter>
          {/* </TasksContexts.Provider> */}
    </div>
  );
}

export default App;
