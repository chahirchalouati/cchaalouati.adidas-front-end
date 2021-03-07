import React from 'react'

function Select({ label, name, selectData, setData, data, optionDisplayedValue }) {
    return (
        <div className="box_input_form">
            <label htmlFor="">{label}</label>
            <select
                name={name}
                onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                }}
            >
                {selectData.map((d, i) => <option value={d} key={i}>{d[optionDisplayedValue]}</option>)}



            </select>
        </div>
    )
}

export default Select
