import "@aws-amplify/ui-react/styles.css";
import React from 'react';
import './App.css';
import Layout from "./pages/layout"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import Contact from "./pages/contact"
import NoPage from "./pages/nopage"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;