import {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import SearchSection from '../../components/SearchSection'
import About from '../../components/about'
import Destination from '../../components/Destination'
import RoomSection from '../../components/RoomSection'
import VideoSection from '../../components/videoSection'
import Testimonial from '../../components/Testimonial'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import vdimg from '../../images/banner.png'

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero heroClass={'hero-style-1'} heroImg1={hero1} heroImg2={hero2} heroImg3={hero3}/>
            <SearchSection/>
            <About/>
            <Destination/>
            <RoomSection/>
            <VideoSection vdImg={vdimg}/>
            <Testimonial/>
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;