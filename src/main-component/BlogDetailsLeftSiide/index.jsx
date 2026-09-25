import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogSidebarLeft from '../../components/BlogDetailsLeft'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsLeftSiide =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogSidebarLeft/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


