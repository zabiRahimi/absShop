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
import Dashboard from './components/user/dashboard/Dashboard';
import UserGuardRoute from './components/privateRoutes/UserGuardRoute';
import InitialVerifyMobileGuardRoute from './components/privateRoutes/InitialVerifyMobileGuardRoute';
import InitialVerifyMobile from './components/user/InitialVerifyMobile';
import InitialVerifyMobileContext, { useInitialVerifyMobileContext } from './components/contexts/InitialVerifyMobileContext';
import { useEffect } from 'react';
import OrderInProcess from './components/user/dashboard/OrderInProcess';
import PurchasesReceived from './components/user/dashboard/PurchasesReceived';
import ReturnPurchases from './components/user/dashboard/ReturnPurchases';
import MyComments from './components/user/dashboard/MyComments';
import ShopMessages from './components/user/dashboard/ShopMessages';
import ShopWarnings from './components/user/dashboard/ShopWarnings';
import UsersMessages from './components/user/dashboard/UsersMessages';
import MyVisits from './components/user/dashboard/MyVisits';
import MyFavorites from './components/user/dashboard/MyFavorites';
import MyScores from './components/user/dashboard/MyScores';


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

              <Route path="dashboard" element={<Dashboard />}>

                <Route path="orderInProcess" element={<OrderInProcess />} />
                <Route path="purchasesReceived" element={<PurchasesReceived />} />
                <Route path="returnPurchases" element={<ReturnPurchases />} />
                <Route path="myComments" element={<MyComments />} />
                <Route path="shopMessages" element={<ShopMessages />} />
                <Route path="shopWarnings" element={<ShopWarnings />} />
                <Route path="usersMessages" element={<UsersMessages />} />
                <Route path="myVisits" element={<MyVisits />} />
                <Route path="myFavorites" element={<MyFavorites />} />
                <Route path="MyScores" element={<MyScores />} />
                {/* <Route path="" element={< />} /> */}
                {/* <Route path="" element={< />} /> */}

              </Route>
              {/* <Route path="dashboard/orderInProcess" element={<OrderInProcess />} /> */}

            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>

        </InitialVerifyMobileContext.Provider>

      </UserContext.Provider>

    </Router>

  );

}

export default App;
