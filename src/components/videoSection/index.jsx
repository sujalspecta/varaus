import React from 'react'
import VideoModal from '../ModalVideo'
import './style.css'

const VideoSection = (props) => {

    return(
        <div className="video-banner-area">
            <div className={`container ${props.vClass}`}>
                <div className="row">
                    <div className="col-12">
                        <div className="banner-img">
                            <img src={props.vdImg} alt=""/>
                            <ul className="banner-video">
                                <li className="video-holder">
                                   <VideoModal/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection;