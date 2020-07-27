import React from "react";
import "./App.css";
import { Index as Home } from "./Components/Index/Index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "././Components/Resume/Resume";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </Router>
  );
}

export default App;
