import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages
import Home from "./views/home/home";
import Presentation from "./views/presentation/presentation";
import Coaching from "./views/coaching/coaching";
import ContactForm from "./views/contactForm/ContactForm";
import Login from "./views/Login";
import QuestionnaireStarter from "./views/QuestionnaireStarter";

// DASHBOARD
import DashboardAdmin from "./views/dashboard/dashboardAdmin";
import DashboardUser from "./views/dashboard/dashboardUser";
import DashboarSignup from "./views/dashboard/dashboardSignup";
import DashboardList from "./views/dashboard/dashboardList";

// CSS
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/presentation" element={<Presentation />} />
          <Route exact path="/coaching" element={<Coaching />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contact" element={<ContactForm />} />
          <Route
            exact
            path="/questionnaire/starter"
            element={<QuestionnaireStarter />}
          />

          <Route exact path="/dashboard/admin" element={<DashboardAdmin />} />
          <Route exact path="/dashboard/user" element={<DashboardUser />} />
          <Route
            exact
            path="/dashboard/admin/users"
            element={<DashboarSignup />}
          />
          <Route
            exact
            path="/dashboard/admin/list"
            element={<DashboardList />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      {/* </TasksContexts.Provider> */}
    </div>
  );
}

export default App;
