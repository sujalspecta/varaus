import React from 'react';
import {Link} from 'react-router-dom'
import rb1 from '../../images/recent-posts/img-1.jpg'
import rb2 from '../../images/recent-posts/img-2.jpg'
import rb3 from '../../images/recent-posts/img-3.jpg'

import inst1 from '../../images/instragram/1.jpg'
import inst2 from '../../images/instragram/2.jpg'
import inst3 from '../../images/instragram/3.jpg'
import inst4 from '../../images/instragram/4.jpg'
import inst5 from '../../images/instragram/5.jpg'
import inst6 from '../../images/instragram/6.jpg'

import about from '../../images/blog/profile.png'
import bicon from '../../images/blog/icon.png'


import './style.css'

const BlogSidebar = (props) => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="wpo-blog-sidebar">
                <div className="widget profile-widget">
                    <div className="profile-img">
                        <img src={about} alt="" />
                        <h2>Noumi Bartler</h2>
                        <p>Hi! here is our blog. Read our post - and be with us</p>
                    </div>
                    <div className="pro-social">
                        <ul>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-instagram"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="ti-google"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Enter Keyword..."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Hotel Management<span>(8)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Vacational Plan<span>(5)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">World Tour <span>(7)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Guide Information<span>(3)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Travelling <span>(6)</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Hotel Room <span>(2)</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={rb1} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-details-left">Top 10 wonderful place in the world.</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={rb2} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-details-left">5 Simple Steps to a Happier, Healthier You</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={rb3} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-details-left">Opening your Dream Hostel the Simple 5-Step</Link></h4>
                                <span className="date">22 Sep 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget instagram">
                    <h3>Service</h3>
                    <ul className="d-flex">
                        <li><Link onClick={ClickHandler} to="/service-single"><img src={inst1} alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single"><img src={inst2} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single"><img src={inst3} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single"><img src={inst4} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single"><img src={inst5} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single"><img src={inst6} alt=""/></Link></li>
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Travelling</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Hotel</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Restaurant</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Destination</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">World Tour</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Hotel Room</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Spa</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-details-left">Guide</Link></li>
                    </ul>
                </div>
                <div className="widget get-intouch">
                    <div className="get-item">
                        <img src={bicon} alt=""/>
                        <h2>Let’s start your dreamy journey</h2>
                        <Link onClick={ClickHandler} className="theme-btn" to="/contact">Get in touch</Link>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
