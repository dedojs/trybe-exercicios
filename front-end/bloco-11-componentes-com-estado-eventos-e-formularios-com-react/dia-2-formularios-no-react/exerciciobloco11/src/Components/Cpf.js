import React from 'react'

export default class Cpf extends React.Component {
    render() {
        const { value, handleChange } = this.props
        return (
            <li>
                <label>CPF</label>
                    <input 
                    value={value} 
                    type='text' 
                    name='cpf' 
                    maxLength='11' 
                    required 
                    onChange={handleChange}/>
            </li>
        );
    }
}