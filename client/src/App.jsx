import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MinorSportsPage from './pages/MinorSportsPage.jsx';
import MinorSportsDetailPage from './pages/MinorSportsDetailPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/minor-sports" element={<MinorSportsPage />} />
        <Route path="/minor-sports/:sportsId" element={<MinorSportsDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
