import React from 'react'

export default class Email extends React.Component {
    render() {
        const { value, handleChange } = this.props
        return (
            <li>
                <label>Email</label>
                    <input 
                    value={value} 
                    type='email' 
                    name='email' 
                    maxLength='50' 
                    required 
                    onChange={handleChange}/>
            </li>
        );
    }
}