import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero from '../../components/hero'
import SearchSection from '../../components/SearchSection'
import About2 from '../../components/about2'
import Destination2 from '../../components/Destination2'
import RoomSection from '../../components/RoomSection'
import Features from '../../components/Features'
import Testimonial from '../../components/Testimonial'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import hero1 from '../../images/slider/slide-4.jpg'
import hero2 from '../../images/slider/slide-5.jpg'
import hero3 from '../../images/slider/slide-6.jpg'

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <Hero heroClass={'hero-style-2'} heroImg1={hero1} heroImg2={hero2} heroImg3={hero3}/>
            <SearchSection/>
            <About2/>
            <Destination2/>
            <RoomSection/>
            <Features/>
            <Testimonial/>
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;