import React from 'react';

export default class Nome extends React.Component {
    render() {
        const { value, handleInput } = this.props
        return (
            <label>Nome
                <input
                type='text'
                name='nome'
                value={value}
                onChange={handleInput}/>
            </label>
        )
    }
}