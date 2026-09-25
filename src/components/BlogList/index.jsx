import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../ModalVideo'
import './style.css'
import blog1 from '../../images/blog/img-4.jpg'
import blog2 from '../../images/blog/img-5.jpg'
import blog3 from '../../images/blog/img-6.jpg'


const BlogList = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={blog1} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><Link onClick={ClickHandler} to="/blog-details"> By Robert harry</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details"> 25 Feb 2020</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Things You Must Need To See While You’re In Dubai</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of the graduate ut labore et dolore magna aliqua.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                    <ul>
                                        <li><i className="fi flaticon-heart"></i>80</li>
                                        <li><i className="fi flaticon-share"></i></li>
                                    </ul>
                                </div>
                                <div className="blog-thumb-badge">
                                    <div className="blog-thumb-text">
                                        <span>Travelling</span>
                                    </div>
                                </div>
                            </div>
                            <div className="post post-text-wrap">
                                <div className="blog-thumb-text">
                                    <span>Travelling</span>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link onClick={ClickHandler} to="/blog-details"> By Robert harry</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details"> 25 Feb 2020</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">17 places you cannot ignore in Paris</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of the graduate ut labore et dolore magna aliqua.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                    <ul>
                                        <li><i className="fi flaticon-heart"></i>80</li>
                                        <li><i className="fi flaticon-share"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post format-gallery">
                                <div className="entry-media post-slider">
                                    <img src={blog2} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><Link onClick={ClickHandler} to="/blog-details"> By Robert harry</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details"> 25 Feb 2020</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Things You Must Need To See While You’re In Dubai</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of the graduate ut labore et dolore magna aliqua.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                    <ul>
                                        <li><i className="fi flaticon-heart"></i>80</li>
                                        <li><i className="fi flaticon-share"></i></li>
                                    </ul>
                                </div>
                                <div className="blog-thumb-badge">
                                    <div className="blog-thumb-text">
                                        <span>Travelling</span>
                                    </div>
                                </div>
                            </div>
                            <div className="post post-text-wrap">
                                <div className="post-bloquote">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    <span>Robert Harry</span>
                                </div>
                                <div className="blog-thumb-text">
                                    <span>Travelling</span>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link onClick={ClickHandler} to="/blog-details"> By Robert harry</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details"> 25 Feb 2020</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">17 places you cannot ignore in Paris</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of the graduate ut labore et dolore magna aliqua.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                    <ul>
                                        <li><i className="fi flaticon-heart"></i>80</li>
                                        <li><i className="fi flaticon-share"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog3} alt="" />
                                    <VideoModal/>
                                </div>
                                <div className="blog-thumb-badge">
                                    <div className="blog-thumb-text">
                                        <span>Travelling</span>
                                    </div>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link onClick={ClickHandler} to="/blog-details"> By Robert harry</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details"> 25 Feb 2020</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Things You Must Need To See While You’re In Dubai</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of the graduate ut labore et dolore magna aliqua.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                    <ul>
                                        <li><i className="fi flaticon-heart"></i>80</li>
                                        <li><i className="fi flaticon-share"></i></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="post post-text-wrap">
                                <h5><i className="fi flaticon-chain"></i>Risus commodo viverra maecenas accumsan lacus vel.</h5>
                                <div className="blog-thumb-text">
                                    <span>Travelling</span>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link onClick={ClickHandler} to="/blog-details"> By Robert harry</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details"> 25 Feb 2020</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">17 places you cannot ignore in Paris</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of the graduate ut labore et dolore magna aliqua.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                    <ul>
                                        <li><i className="fi flaticon-heart"></i>80</li>
                                        <li><i className="fi flaticon-share"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link onClick={ClickHandler} to="/blog-details" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link onClick={ClickHandler} to="/blog-details">1</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details">2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details">3</Link></li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/blog-details" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft}/>
                </div>
            </div>
        </section>
     )
        
}

export default BlogList;
