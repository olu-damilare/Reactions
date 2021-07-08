import React from 'react'

const Social = (props) => {
    return (
        <button className = {props.class}>
            <img htmlFor = "social" src = {props.src} />
            {props.text}
        </button>
    )
}

export default Social