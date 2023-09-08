import Layout from "./components/Layout";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Listing from "./components/Listing";
import Details from "./components/Details";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/repos" element={<Listing darkMode={darkMode} />} />
          <Route path="/repos/:repoId" element={<Details darkMode={darkMode} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
