import React from 'react'
import {Link} from 'react-router-dom'
import fimg1 from '../../images/featured/1.jpg'
import fimg2 from '../../images/featured/2.jpg'
import fimg3 from '../../images/featured/3.jpg'
import fimg4 from '../../images/featured/4.jpg'
import fimg5 from '../../images/featured/5.jpg'
import fimg6 from '../../images/featured/6.jpg'

import './style.css'

const Features = (props) => {

    const features = [
        {
          Fimg:fimg1,
          heading:"Delicious Food",
          link:"/room-single",
        },
        {
          Fimg:fimg2,
          heading:"Swimming Pool",
          link:"/room-single",
        },
        {
          Fimg:fimg3,
          heading:"Spa salon",
          link:"/room-single",
        },
        {
          Fimg:fimg4,
          heading:"Game Room",
          link:"/room-single",
        },
        {
          Fimg:fimg5,
          heading:"Airport Taxi",
          link:"/room-single",
        },
        {
          Fimg:fimg6,
          heading:"Breakfast",
          link:"/room-single",
        },
    ]

    const ClickHandler = () =>{
      window.scrollTo(10, 0);
   }
    return(
        <div className="featured-area featured-sub">
            <div className="container-fluid">
                <div className="row grid ">
                    {features.map((feature, i) => (
                        <div className="col-lg-4 items col-md-6 col-sm-6 col-12" key={i}>
                            <div className="featured-wrap">
                                <div className="featured-img">
                                    <img src={feature.Fimg} alt=""/>
                                    <div className="featured-content">
                                        <Link onClick={ClickHandler} to={feature.link}>{feature.heading}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;