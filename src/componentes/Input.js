import React from 'react'


const Input = ({label, id, name, type, value, ...props}) =>{
    return(
        <>
        <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} value={value}/>
        </>
    );
}

export default Input