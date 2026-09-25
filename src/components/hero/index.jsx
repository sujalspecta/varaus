import { Component } from "react";
import Sliderc from "react-slick";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
const Slider = Sliderc.default || Sliderc

class Hero extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };
        return (

            <section className={`hero ${this.props.heroClass}`}>
                <div className="hero-slider">
                    <Slider {...settings}>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${this.props.heroImg1})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                                            <div className="slide-title">
                                                <h2>The Varaus Hotel & Resort</h2>
                                            </div>
                                            <div className="slide-subtitle">
                                                <p>Make Your Life Better and Bright! You must trip with Us!</p>
                                            </div>
                                            <div className="btns">
                                                <Link to="/room" className="theme-btn">Book A Room</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${this.props.heroImg2})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                                            <div className="slide-title">
                                                <h2>The Varaus Hotel & Resort</h2>
                                            </div>
                                            <div className="slide-subtitle">
                                                <p>Make Your Life Better and Bright! You must trip with Us!</p>
                                            </div>
                                            <div className="btns">
                                                <Link to="/room" className="theme-btn">Book A Room</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="slide-inner" style={{ backgroundImage: `url(${this.props.heroImg3})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col col-lg-8 col-md-12 col-12 slide-caption">
                                            <div className="slide-title">
                                                <h2>The Varaus Hotel & Resort</h2>
                                            </div>
                                            <div className="slide-subtitle">
                                                <p>Make Your Life Better and Bright! You must trip with Us!</p>
                                            </div>
                                            <div className="btns">
                                                <Link to="/room" className="theme-btn">Book A Room</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}
export default Hero;