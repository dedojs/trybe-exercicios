import React from 'react'

export default class Estado extends React.Component {
    render() {
        const { value, handleInput } = this.props
        return (
            <label>
                Estado
                <select name='estado' value={value} onChange={handleInput}>
                    <option value=''></option>
                    <option value='Bahia'>Bahia</option>
                    <option value='SaoPaulo'>São Paulo</option>
                    <option value='RioDeJaneiro'>Rio de Janeiro</option>
                </select>
            </label>
        )
    }
} 