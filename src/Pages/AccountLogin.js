import React from "react";
import ContainerRoot from "../Components/Containers/ContainerRoot";
import LoginForm from "../Components/Forms/LoginForm";
import { AiOutlineCheck, HiOutlineArrowNarrowRight } from "react-icons/all";

function AccountLogin() {
    return (
        <ContainerRoot>
            <div className="auth_wrapper">
                <LoginForm></LoginForm>
                <div className='club_info'>
                    <h3>JOIN THE CLUB. GET REWARDED.</h3>
                    <div className='cb_info_item'><span>Join the adidas Creators Club membership program:</span></div>

                    <div className='cb_info_item'><AiOutlineCheck size={20} style={{ marginRight: '0.5em' }} /><span>Get immediate access to all Challenger level rewards.</span></div>
                    <div className='cb_info_item'><AiOutlineCheck size={20} style={{ marginRight: '0.5em' }} /><span>Get immediate access to all Challenger level rewards.</span></div>
                    <div className='cb_info_item'><AiOutlineCheck size={20} style={{ marginRight: '0.5em' }} /><span>Get immediate access to all Challenger level rewards.</span></div>
                    <div className='cb_info_item'><AiOutlineCheck size={20} style={{ marginRight: '0.5em' }} /><span>Get immediate access to all Challenger level rewards.</span></div>
                    <div className='cb_info_item'><AiOutlineCheck size={20} style={{ marginRight: '0.5em' }} /><span>Get immediate access to all Challenger level rewards.</span></div>

                    <div className='cb_info_item'><span> Join now and start earning points to access new levels and rewards. It's time to unlock the best of adidas.</span></div>
                    <div className="btn_wrapper">
                        <button type='button' className="btn_primary"><span>JOIN THE CLUB</span><HiOutlineArrowNarrowRight size={25} /></button>
                    </div>

                    <img className='club_info_img' src="https://www.adidas.com/glass/react/7991010/assets/img/CC2.0_my_account_register.jpg"
                        alt="Creators Club teaser"
                        height="100%"
                        width="100%"
                    />

                </div>



            </div>
        </ContainerRoot>
    );
}

export default AccountLogin;
