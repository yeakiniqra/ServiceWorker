import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import FormPage from './routes/Form';
import ResultsPage from './routes/Display';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  </Router>
);

export default App;
