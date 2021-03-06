import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className = {props.class}>
                {props.text}
            </button>
        </div>
    )
}

export default Button