import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/hooks/ScrollToTop';
import Home from './components/home/Home';
import NotFound from './components/notFound/notFound';
import { AboutUs } from './components/aboutUs/AboutUs';
import { ContactUs } from './components/contactUs/ContactUs';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';

import './App.css';
import 'bootstrap';
import UserContext, { useUserContext } from './components/contexts/UserContext';
import Profile from './components/user/Profile';
import UserGuardRoute from './components/privateRoutes/UserGuardRoute';
import InitialVerifyMobileGuardRoute from './components/privateRoutes/InitialVerifyMobileGuardRoute';
import InitialVerifyMobile from './components/user/InitialVerifyMobile';
import InitialVerifyMobileContext, { useInitialVerifyMobileContext } from './components/contexts/InitialVerifyMobileContext';
import { useEffect } from 'react';


function App() {

  const userData = useUserContext();

  const signUpData = useInitialVerifyMobileContext();


  return (

    <Router  >

      <ScrollToTop />

      <UserContext.Provider value={userData}>

        <InitialVerifyMobileContext.Provider value={signUpData} >

          <Routes >

            <Route path='/' exact element={<Home />} />

            <Route path='aboutUs' exact element={<AboutUs />} />

            <Route path='contactUs' exact element={<ContactUs />} />

            <Route element={<InitialVerifyMobileGuardRoute isEffect={signUpData.isEffect} fromSignUp={signUpData.signUpData.fromSignUp} />}>

              <Route path='initialVerifyMobile' element={<InitialVerifyMobile />} />

            </Route>

            <Route element={<UserGuardRoute backPath='profile' isEffect={userData.isEffect} isLogin={userData.user.login} requiresLogin={false} />}>

              <Route path='signIn' exact element={<SignIn />} />
              <Route path='signUp' exact element={<SignUp />} />

            </Route>


            {/* گارد روت، بعضی از روتها در صورتی که کار خاصی انجام گرفته باشد را در دست قرار می دهد، 
            * مانند دسترسی به پروفایل فقط در صورت لاگین بودن
          */}
            <Route element={<UserGuardRoute backPath='signIn' isEffect={userData.isEffect} isLogin={userData.user.login} />}>

              <Route path="profile" element={<Profile />} />

            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>

        </InitialVerifyMobileContext.Provider>

      </UserContext.Provider>

    </Router>

  );

}

export default App;
