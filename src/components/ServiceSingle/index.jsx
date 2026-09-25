import React from 'react'
import Sidebar from './singleComponet/sidebar'
import Description from './singleComponet/description'
import WhyChoose from './singleComponet/whyChose'
import Categorys from './singleComponet/categorys'
import './style.css'

const ServiceSingle = (props) => {

    return(
        <section className="service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12 order-lg-2">
                        <div className="service-single-content">
                           <Description/>
                           <WhyChoose/>
                           <Categorys/>
                        </div>
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </section>
    )
}

export default ServiceSingle;