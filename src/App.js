/* eslint-disable */
import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "././Components/Resume/Resume";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Projects from "././Components/Projects/Projects";
import Contact from "././Components/Contacts/Contacts";
import About from "././Components/About/About";
import Community from "././Components/Community/Community";
import Announcement from "././Components/Announcement/Announcement";
import Working from "./Components/Working/Working";
import Academics from "./Components/Academics/Academics";
import Certificates from "./Components/Certifications/Certification";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/community" component={Community} />
        <Route path="/announcements" component={Announcement} />
        <Route path="/working" component={Working} />
        <Route path="/academics" component={Academics} />
        <Route path="/certificates" component={Certificates} />
      </Router>
    </React.Fragment>
  );
};

export default App;
