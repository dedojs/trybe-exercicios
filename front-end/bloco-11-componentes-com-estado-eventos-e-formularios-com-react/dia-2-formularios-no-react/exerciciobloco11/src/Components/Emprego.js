import React from 'react'

export default class Emprego extends React.Component {
    render() {
        const { value, desc, handleChange } = this.props
        return (
            <fieldset className='form'>
                <legend>Dados do último emprego</legend>
                <li>
                    <label>Cargo</label>
                    <input value={value} type='text' required maxLength='401' onChange={handleChange} name='cargo'/>
                </li>
                <li>
                    <textarea name='cargoDesc' maxLength='500' required onChange={handleChange} placeholder='Resumo do Cargo' value={desc} className='textArea' />
                </li>
            </fieldset>
        );
    }
}