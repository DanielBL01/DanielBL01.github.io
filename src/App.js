import React from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Sidebar from "./components/Sidebar";
import Test from "./components/content/Test";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Router>
          <div>
            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/content/test">
                <Test />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;