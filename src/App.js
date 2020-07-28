/* eslint-disable */
import React from "react";
import "./App.css";
import { Index as Home } from "./Components/Index/Index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "././Components/Resume/Resume";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Portfolio from "././Components/Portfolio/Portfolio";
import Contact from "././Components/Contacts/Contacts";
import About from "././Components/About/About";
import Community from "././Components/Community/Community";
import Announcement from "././Components/About/About";
import Working from "./Components/Working/Working";
import University from "../src/Components/MyUniversity/MyUniversity";
import Main from "../src/Components/Main/Main";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/community" component={Community} />
          <Route path="/announcements" component={Announcement} />
          <Route path="/working" component={Working} />
          <Route path="/myuniversity" component={University} />
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
