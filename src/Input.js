import React from 'react'

const Input = (props) => {
    return (
        <div className = "signin">
            <label htmlFor = "fname" className = "label">{props.label} </label><br></br>
            <input type = "text" id = "fname" className = "input" name = "fname" placeholder = {props.placeholder} />
        </div>
    )
}

export default Input