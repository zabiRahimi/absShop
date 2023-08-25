import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/hooks/ScrollToTop';
import Home from './components/home/Home';
import NotFound from './components/notFound/notFound';
import { AboutUs } from './components/aboutUs/AboutUs';
import { ContactUs } from './components/contactUs/ContactUs';

import './App.css';
import 'bootstrap';

function App() {

  return (

    <Router  >

      <ScrollToTop />

      <Routes >

        <Route path='/' exact element={<Home />} />

        <Route path='aboutUs' exact element={<AboutUs />} />

        <Route path='contactUs' exact element={<ContactUs />} />


        <Route path="*" element={<NotFound />} />

      </Routes>

    </Router>

  );

}

export default App;
