import React from 'react'

const Select =({options, value, setValue})=>{

    return(
        <>
            <h3>selecione</h3>
            <select value={value} onChange={({target})=>setValue(target.value)}>
                {options.map(op => <option key={op} value={op}>{op}</option>)}
            </select>
            
        </>
    )
}

export default Select