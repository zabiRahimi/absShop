import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/hooks/ScrollToTop';
import Home from './components/home/Home';
import NotFound from './components/notFound/notFound';
import { AboutUs } from './components/aboutUs/AboutUs';
import { ContactUs } from './components/contactUs/ContactUs';
import SignIn from './components/user/SignIn';

import './App.css';
import 'bootstrap';
import UserContext, { useUserContext } from './components/contexts/UserContext';
import Profile from './components/user/Profile';
import PrivateRoute from './components/PrivateRoute';


function App() {

  const data = useUserContext();


  return (

    <Router  >

      <ScrollToTop />

      <UserContext.Provider value={data}>

        <Routes >

          <Route path='/' exact element={<Home />} />

          <Route path='aboutUs' exact element={<AboutUs />} />

          <Route path='contactUs' exact element={<ContactUs />} />

          <Route element={<PrivateRoute backPath='profile' isEffect={data.isEffect} isLogin={data.user.login} requiresLogin={false} />}>

            <Route path='signIn' exact element={<SignIn />} />

          </Route>


          {/* گارد روت، بعضی از روتها در صورتی که کار خاصی انجام گرفته باشد را در دست قرار می دهد، 
            * مانند دسترسی به پروفایل فقط در صورت لاگین بودن
          */}
          <Route element={<PrivateRoute backPath='signIn' isEffect={data.isEffect} isLogin={data.user.login} />}>

            <Route path="profile" element={<Profile />} />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>

      </UserContext.Provider>

    </Router>

  );

}

export default App;
