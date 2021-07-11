import React from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './routes/Home';
import Application from './routes/Application';
import About from './routes/About';
import Contact from './routes/Contact';


function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home}></Route>
          <Route path='/Application'>
            <Application />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
     </AnimatePresence>
    </div>
  );
}

export default App;
