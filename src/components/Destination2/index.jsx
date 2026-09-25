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


class Destination2 extends Component {
    

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
            <div className="destination-service section-padding">
                <div className="container">
                    <div className="col-12">
                        <div className="wpo-section-title text-center">
                            <span>Populer Destination</span>
                            <h2>Choose Your Country</h2>
                        </div>
                    </div>
                    <div className="destination-carousel">
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

        );
    }
}

export default Destination2;