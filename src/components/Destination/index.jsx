import React from 'react'
import {Link} from 'react-router-dom'
import dsn1 from '../../images/destination/img-1.jpg'
import dsn2 from '../../images/destination/img-2.jpg'
import dsn3 from '../../images/destination/img-3.jpg'
import dsn4 from '../../images/destination/img-4.jpg'

import './style.css'

const Destination = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="destination-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="destination-text">
                            <div className="wpo-section-title">
                                <span>Populer Destination </span>
                                <h2>Choose Your Country </h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">Discover More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="destination-wrap">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 custom-grid">
                                    <div className="destination-left">
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn1} alt="" />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">Paris, France</Link></h5>
                                                    <small>11 Jun 2020 - 22 Jun 2020</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$835</h5>
                                                    <span>Per Day</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn2} alt="" />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">San Francisco</Link></h5>
                                                    <small>11 Jun 2020 - 22 Jun 2020</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$750</h5>
                                                    <span>Per Day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 custom-grid">
                                    <div className="destination-right">
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn3} alt="" />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">United Arab</Link></h5>
                                                    <small>11 Jun 2020 - 22 Jun 2020</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$750</h5>
                                                    <span>Per Day</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="destination-item">
                                            <div className="destination-img">
                                                <img src={dsn4} alt="" />
                                            </div>
                                            <div className="destination-content">
                                                <div className="content-left">
                                                    <h5><Link onClick={ClickHandler} to="/room-single">Singapore</Link></h5>
                                                    <small>11 Jun 2020 - 22 Jun 2020</small>
                                                </div>
                                                <div className="content-right">
                                                    <h5>$550</h5>
                                                    <span>Per Day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;