import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Service = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
      
    const serviceWrap = [
        {
           sIcon:'fi flaticon-tray',
           title:"Delicious Food",
           des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', 
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-pool',
           title:"Swimming Pool",
           des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',           
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-herbal',
           title:"Spa salon",
           des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-bowling',
           title:"Game Room",
           des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-taxi',
           title:"Airport Taxi",
           des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
           link:"/service-single"
        },
        {
           sIcon:'fi flaticon-bowling',
           title:"Breakfast",
           des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
           link:"/service-single"
        },
    ]

    return(
        <div className="service-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="wpo-section-title">
                        <span>Our Services</span>
                        <h2>What We Offer For You</h2>
                    </div>
                </div>
                <div className="row">
                    {serviceWrap.map((service, sev) => (
                        <div className="col col-lg-4 col-md-6 custom-grid col-12" key={sev}>
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className={service.sIcon}></i>
                                </div>
                                <div className="service-text">
                                    <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                    <p>{service.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service;