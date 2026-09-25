import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import RoomPage from '../RoomPage'
import RoomSinglePage from '../RoomSinglePage'
import DestinationPage from '../DestinationPage'
import AboutPage from '../AboutPage'
import ShopPage from '../ShopPage'
import ShopSinglePage from '../ShopSinglePage'
import ServicePage from '../ServicePage'
import ServiceSinglePage from '../ServiceSinglePage'
import FaqPage from '../FaqPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='home3' element={<Homepage3 />} />
          <Route path='room' element={<RoomPage />} />
          <Route path='room-single' element={<RoomSinglePage />} />
          <Route path='destination' element={<DestinationPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='shop-single' element={<ShopSinglePage />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='service-single' element={<ServiceSinglePage />} />
          <Route path='faq' element={<FaqPage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-details' element={<BlogDetails />} />
          <Route path='blog-details-left' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-details-fullwidth' element={<BlogDetailsFull />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
