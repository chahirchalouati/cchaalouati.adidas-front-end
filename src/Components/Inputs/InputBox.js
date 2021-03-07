import React, { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr';

function InputBox({ inputValue, setInputValue, InputType, errorMessage, labelText, name, acceptFileTypes, required }) {
    const [inputShowText, setinputShowText] = useState(false);
    return (
        <div className="input_box">

            <label className="input_box__label">{labelText}</label>
            {InputType === 'password' &&
                <div className="hider" onClick={e => { setinputShowText(prev => !prev) }}>
                    {inputShowText ? <><BiHide size={25} /><span>Hide</span></> : <> <BiShow size={25} /><span>Show</span></>}
                </div>}

            <div className="input__wrapper">


                {InputType === 'password' &&
                    <input
                        type={inputShowText ? "text" : "password"}
                        value={inputValue}
                        className="input_box__input"
                        name={name | ''}
                        onChange={e => { setInputValue(e.target.value) }}
                        required={required}
                    />}

                {(InputType !== 'password' && InputType !== 'file') &&
                    <input
                        type={inputShowText | "text"}
                        value={inputValue}
                        className="input_box__input"
                        name={name | ''}
                        onChange={e => { setInputValue(e.target.value) }}
                        required={required}
                    />}

                {InputType === 'file' &&
                    <input
                        accept={acceptFileTypes}
                        type="file"
                        value={inputValue}
                        className="input_box__input"
                        name={name | ''}
                        onChange={e => { setInputValue(e.target.files) }}
                        required={required}
                    />}
                {
                    (inputValue && inputValue.length) > 0 &&
                    <div className="input_box__input_delete"
                        onClick={e => { setInputValue('') }}>
                        <GrClose size={25} />
                    </div>
                }
            </div>
            <div className="errors">{errorMessage}</div>
        </div>
    )
}

export default InputBox
