import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact component={() => <Sidebar />} />
        <Route exact path={'/'} component={() => <About />} />
        <Route exact path={'/skills'} component={() => <Skills />} />
        <Route exact path={'/projects'} component={() => <Projects />} />
        <Route exact path={'/contacts'} component={() => <Contacts />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
