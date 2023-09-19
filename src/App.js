import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sobre from './Sobre';
import Home from './Home'

function Apresentacao() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/apresentacao" style={{ padding: 5 }}>
          Apresentacao
          </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}