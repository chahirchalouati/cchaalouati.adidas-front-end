import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Modal from "../Modals/SignInModal";

function RootFooter() {
    const [OpenModal, setOpenModal] = useState(false);

    return (
        <div className="root_footer">
            <div className="footer_header">
                <h3 className='text'>JOIN OUR CREATORS CLUB & GET 15% OFF</h3>

                <div className="btn_wrapper">
                    <button onClick={(e) => {
                        setOpenModal((pev) => !OpenModal);
                    }}
                        type='button'
                        className="btn_primary">
                        <span>SIGN UP FOR FREE</span>
                        <HiOutlineArrowNarrowRight size={25} />
                    </button>
                </div>


            </div>
            <div className="footer_body"></div>
            <div className="footer_footer">
                <div className="footer_links">
                    {[
                        "Cookie",
                        "Settings",
                        "Data settings",
                        "Do not sell my personal information",
                        "Privacy Policy",
                        "Terms and Conditions",
                        "© 2021 Chahir Chalouati Inc.",
                    ].map((link, i) => (
                        <span className="footer_footer_link" key={i}>
                            {link}
                        </span>
                    ))}
                </div>
            </div>
            {OpenModal && <Modal setOpenModal={setOpenModal}></Modal>}
        </div>
    );
}

export default RootFooter;
{
    /**
       
      "Cookie",
      "Settings",
      "Data settings",
      "Do not sell my personal information",
      "Privacy Policy",
      "Terms and Conditions", 
      "© 2021 adidas America Inc.",
       */
}
