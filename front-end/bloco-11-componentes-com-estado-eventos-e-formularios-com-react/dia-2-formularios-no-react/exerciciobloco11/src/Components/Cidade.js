import React from 'react'

export default class Cidade extends React.Component {
    render() {
        const { value, handleChange } = this.props
        return (
            <li>
                <label>Cidade</label>
                    <input 
                    value={value} 
                    type='text' 
                    name='cidade' 
                    maxLength='28' 
                    required
                    onChange={handleChange}/>
            </li>
        );
    }
}