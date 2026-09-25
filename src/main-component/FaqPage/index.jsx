import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import FaqSection from '../../components/FaqSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const FaqPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'}/> 
            <FaqSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FaqPage;
