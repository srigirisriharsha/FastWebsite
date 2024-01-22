import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Docs from "./pages/docs";
import Version from "./pages/version";
import Footer from "./pages/footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/docs" component={Docs} />
          <Route path="/version" component={Version} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
export default App;
