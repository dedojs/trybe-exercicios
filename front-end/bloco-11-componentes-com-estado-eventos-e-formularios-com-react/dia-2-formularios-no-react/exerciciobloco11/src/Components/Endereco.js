import React from 'react'

export default class Endereco extends React.Component {
    render() {
        const { value, handleChange } = this.props
        return (
            <li>
                <label>Endereco</label>
                    <input 
                    value={value} 
                    type='text' 
                    name='endereco' 
                    maxLength='200' 
                    required
                    placeholder='Rua, nº, Bairro'
                    onChange={handleChange}/>
            </li>
        );
    }
}