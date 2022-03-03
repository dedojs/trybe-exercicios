import React from 'react'

export default class Moradia extends React.Component {
    render() {
        const { value, handleChange } = this.props
        return (
            <div>
            <p>Moradia:</p>
                <div className='radio'>
                    <input value={value} type='radio' id='casa' name='tipo' onChange={handleChange} required></input>
                    <label>Casa</label>
                    <input value={value} type='radio' id='apartamento' name='tipo' onChange={handleChange} required></input>
                    <label>Apartamento</label>
                </div>
            </div>
        );
    }
}