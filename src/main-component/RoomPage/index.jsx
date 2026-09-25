import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import RoomSection from '../../components/RoomSection'



const RoomPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Room'} pagesub={'Room'}/> 
            <RoomSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RoomPage;
