import React from 'react'

export default class Nome extends React.Component {
    render() {
        const { value, handleChange } = this.props
        return (
            <li>
                <label>Nome</label>
                    <input 
                    value={value} 
                    type='text' 
                    name='nome' 
                    maxLength='40' 
                    required 
                    onChange={handleChange}/>
            </li>
        );
    }
}