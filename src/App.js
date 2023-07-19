import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowBooks from './components/ShowBooks';
import Categories from './components/Categories';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShowBooks />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
