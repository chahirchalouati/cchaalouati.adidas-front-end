import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import LoginForm from '../Forms/LoginForm'
import SignInForm from '../Forms/SignInForm';
import InputBox from '../Inputs/InputBox';

function SignInModal({ setOpenModal }) {

 
    return (
        <div className="modal">


            <div className="auth_wrapper_sign">
                <div className="modal_btn_close"><GrClose onClick={e => setOpenModal(prev => false)} size={25}></GrClose></div>
                <SignInForm></SignInForm>
            </div>
        </div>
    )
}

export default SignInModal
