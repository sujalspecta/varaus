import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import RoomSingleSection from '../../components/RoomSingleSection'



const RoomSinglePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Lake View Room'} pagesub={'Lake View Room'}/> 
            <RoomSingleSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RoomSinglePage;
