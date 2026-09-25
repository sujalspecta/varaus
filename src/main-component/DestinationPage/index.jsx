import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Destination2 from '../../components/Destination2'



const DestinationPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Destination'} pagesub={'Destination'}/> 
            <Destination2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DestinationPage;
