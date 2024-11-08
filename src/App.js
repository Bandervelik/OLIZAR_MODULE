import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  const name = "Михайло ОЛІЗАР";
  const city = "м. Василівка Запорізька обл.";
  const hobby = "Займаюся авто-електрикою";
  const group = "ІСТ";

  return (
    <Router>
      <div>
        <Header name={name} city={city} hobby={hobby} />

        <nav style={{ textAlign: 'center', margin: '10px' }}>
          <Link to="/page1" style={{ marginRight: '10px' }}>Сторінка 1</Link>
          <Link to="/page2">Сторінка 2</Link>
        </nav>

        <Routes>
          <Route path="/page1" element={<Page1 city={city} />} />
          <Route path="/page2" element={<Page2 hobby={hobby} />} />
        </Routes>

        <Footer group={group} />
      </div>
    </Router>
  );
}

export default App;
