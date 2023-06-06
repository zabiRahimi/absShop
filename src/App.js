import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap';

import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
