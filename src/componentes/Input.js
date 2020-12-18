import React from 'react'


const Input = ({id,label, onChange, onBlur,  value, type, error }) =>{
    return(
        <>
        <label htmlFor={id}>{label}</label>
            <input 
                type={type}
                id={id} 
                value={value}
                onChange={onChange}  
                onBlur= {onBlur}       
            />
            {error && <p>{error}</p>}
        </>
    );
}

export default Input