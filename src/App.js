import React from "react";
import "./App.css";
import { Index as Home } from "./Components/Index/Index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "././Components/Resume/Resume";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Portfolio from "././Components/Portfolio/Portfolio";
import Contact from "././Components/Contacts/Contacts";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
