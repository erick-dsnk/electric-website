import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Download from './components/pages/Download';
import Documentation from './components/pages/Documentation';

import Header from './components/Header';

const Page404 = (location) => {
  return (
    <h1>
      Oops! Looks like there's no page at <code>{location.pathname}</code>. Click <a href="/">here</a> to return home.
    </h1>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/download" component={Download} exact />
          <Route path="/documentation" component={Documentation} exact />

          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
