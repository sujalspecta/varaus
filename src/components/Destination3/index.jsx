import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'
import dsn1 from '../../images/destination/img-6.jpg'
import dsn2 from '../../images/destination/img-5.jpg'
import dsn3 from '../../images/destination/img-9.jpg'
import dsn4 from '../../images/destination/img-7.jpg'
import dsn5 from '../../images/destination/img-8.jpg'


class Destination3 extends Component {3
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const destination = [
            {
                DImg: dsn1,
                Title:'United Arab',
                price: '$750',
                Date:'11 Jun 2021 - 22 Jun 2021',
                per: "Per Day",
                link: "/room-single",
            },
            {
                DImg: dsn2,
                Title:'Paris, France',
                price: '$835',
                Date:'11 Jun 2021 - 22 Jun 2021',
                per: "Per Day",
                link: "/room-single",
            },
            {
                DImg: dsn3,
                Title:'Singapore',
                price: '$870',
                Date:'11 Jun 2021 - 22 Jun 2021',
                per: "Per Day",
                link: "/room-single",
            },
            {
                DImg: dsn4,
                Title:'San Francisco',
                price: '$653',
                Date:'11 Jun 2021 - 22 Jun 2021',
                per: "Per Day",
                link: "/room-single",
            },
            {
                DImg: dsn5,
                Title:'Singapore',
                price: '$750',
                Date:'11 Jun 2021 - 22 Jun 2021',
                per: "Per Day",
                link: "/room-single",
            },
        ]

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <div className="destination-area-2 section-padding">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="destination-text">
                                <div className="wpo-section-title">
                                    <h2>Our Featured Destinations</h2>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="btns">
                                    <Link onClick={ClickHandler} to="/destination" className="theme-btn-s2">All Destination</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="country-r">
                                <div className="country-carousel">
                                    <Slider {...settings}>
                                        {destination.map((dest, dsn) => (
                                            <div className="item" key={dsn}>
                                            <div className="destination-item">
                                                <div className="destination-img">
                                                    <img src={dest.DImg} alt=""/>
                                                </div>
                                                    <div className="destination-content">
                                                        <div className="content-left">
                                                            <h5><Link onClick={ClickHandler} to={dest.link}>{dest.Title}</Link></h5>
                                                            <small>{dest.Date}</small>
                                                        </div>
                                                        <div className="content-right">
                                                            <h5>{dest.price}</h5>
                                                            <span>{dest.per}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Destination3;