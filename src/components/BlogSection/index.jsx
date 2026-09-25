import React from 'react'
import blg1 from '../../images/blog/1.jpg'
import blg2 from '../../images/blog/2.jpg'
import blg3 from '../../images/blog/3.jpg'
import {Link} from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const Blog = [
         {
           blogImg: blg1,
           title:"Things You Must Need To See While You’re In Dubai",
           Thumb:'Travelling',
           date:'21 Jan 2021',
           link:"/blog-details"
         },
         {
           blogImg:  blg2,
           title:"Be Careful About This, When You Are In Snow",
           Thumb:'Travelling',
           date:'21 Jan 2021',
           link:"/blog-details"
         },
         {
           blogImg: blg3,
           title:"17 places you cannot ignore in Paris",
           Thumb:'Travelling',
           date:'21 Jan 2021',
           link:"/blog-details"
         },
     ]
    return(
        <div className="blog-area ptb-100-70">
            <div className="container">
                <div className="col-12">
                    <div className="wpo-section-title">
                        <span>Blog Post</span>
                        <h2>Our Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    {Blog.map((blog, blg) => (
                        <div className="col-lg-4 col-md-6 col-12" key={blg}>
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blog.blogImg} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <ul className="post-meta">
                                        <li><Link onClick={ClickHandler} to={blog.link}>{blog.Thumb}</Link></li>
                                        <li>{blog.date}</li>
                                    </ul>
                                    <h3><Link onClick={ClickHandler} to={blog.link}>{blog.title}</Link></h3>
                                    <Link onClick={ClickHandler} to={blog.link}>Continue</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSection;