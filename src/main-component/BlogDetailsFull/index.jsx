import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsFull =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsFull;