import React from 'react'
import LinkButton from '../Links/LinkButton'


function HeaderHome(videoLink, imageLink, paragraf, links) {
    return (

        <header className="header">

            <video
                className='header_desktop_video'
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Confirmed/Masthead_Top_Desktop_2880x1280.mp4"
                muted={true}
                autoPlay={true}
                loop={true}
            />
            <video
                className='header_mobile_video'
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Confirmed/Masthead_Top_Mobile_750x964.mp4"
                muted={true}
                autoPlay={true}
                loop={true}
            />
            <div className="header_placeholder">
                <div className="header_placeholder_wrapper"> <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/itIT/Images/QR_CODE_transparent_200_tcm213-635410.png" alt="" />

                    <div className="parag">Satisfaction is a state of mind. Step in to unlock it.</div>
                    <div className="header_links">
                        <LinkButton text={"SHOP MEN"}></LinkButton>
                        <LinkButton text={"SHOP WOMEN"}></LinkButton>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default HeaderHome
{/*
  <header className="header">
            <video
                src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/originals-ss21-zx-launch-hp-mh1-d_auspaa.mp4"
                muted={true}
                autoPlay={true}
                loop={true}
            ></video>
            <div className="header_placeholder">
                <div className={"header_placeholder_wrapper"}>
                    <img
                        src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/black-lockup-left_tcm221-614298.png"
                        alt=""
                    />

                    <div className="parag">Satisfaction is a state of mind. Step in to unlock it.</div>

                    <div className="header_links">
                        <LinkButton text={"SHOP MEN"}></LinkButton>
                        <LinkButton text={"SHOP WOMEN"}></LinkButton>
                    </div>
                </div>
            </div>
        </header>



*/}





