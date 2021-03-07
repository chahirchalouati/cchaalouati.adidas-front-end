import React, { useState } from 'react'

function InputForm({ value, setData, data, name, label, error, placeholder, type }) {

    const [inputValue, setInputValue] = useState();


    return (
        <div className="box_input_form">
            <label htmlFor="">{label}</label>
            <input
                type={type || "text"}
                name={name}
                value={value === undefined ? "" : value}
                placeholder={placeholder}
                onChange={e => { setData({ ...data, [name]: e.target.value }) }}
            />
        </div>
    )
}

export default InputForm
