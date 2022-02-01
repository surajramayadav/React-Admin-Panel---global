import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./views/About/About";
import Form from "./views/Form/Form";
import Home from "./views/Home/Home";
import Panels from "./views/Panels/Panels";

import Calendar from './views/Calendar/Calendar'
import ButtonPage from './views/Button/ButtonPage'
import RegularTables from './views/Tables/RegularTables/RegularTables'
import "./App.css";
import SweetAlerts from "./views/SweetAlerts/SweetAlerts";
import ExtendedForms from "./views/Form/ExtendedForms/ExtendedForms";
import Wizard from "./views/Form/Wizard/Wizard";
import Regularforms from "./views/Form/Regularforms/Regularforms";
import NotificationPage from "./views/Notifications/NotificationPage";
import VectorMap from "./views/Maps/VectorMap";
import DataTable from "./components/DataTable/DataTable";
import DataTablePage from "./views/Tables/DataTables/DataTablePage"; 

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <>
          <div className="layout">
            <Navbar />
            <div className="body">
              <Sidebar />
              <div className="right-body">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/navbar" component={Navbar} />
                <Route exact path="/panels" component={Panels} />
                <Route exact path="/sweet-alert" component={SweetAlerts} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/extended-form" component={ExtendedForms} />
                <Route exact path="/regular-form" component={Regularforms} />
                <Route exact path="/wizard" component={Wizard} />
                <Route exact path="/regular-tables" component={RegularTables} />
                <Route exact path="/button" component={ButtonPage} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/notification" component={NotificationPage} />
                <Route exact path="/vector-map" component={VectorMap} />
                <Route exact path="/data-table" component={DataTablePage} /> 
              </div>
            </div>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
