import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Service from '../../components/Service'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServicePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <Service/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;
