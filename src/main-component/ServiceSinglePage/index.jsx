import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import ServiceSingle from '../../components/ServiceSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServiceSinglePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Service Single'} pagesub={'Service'}/> 
            <ServiceSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServiceSinglePage;
