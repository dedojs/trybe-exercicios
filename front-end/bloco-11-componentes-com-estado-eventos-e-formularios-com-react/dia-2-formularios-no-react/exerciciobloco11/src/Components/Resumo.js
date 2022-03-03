import React from 'react'

export default class Resumo extends React.Component {
    render() {
        const { desc, handleChange } = this.props
        return (
            <fieldset className='form'>
                <legend>Escolaridade, Cursos e informações adicionais</legend>
                <li>
                    <textarea value={desc} name='resumo' maxLength='1000' required onChange={handleChange} placeholder='Resumo do Cúrriculo' className='textArea2' />
                </li>
            </fieldset>
        );
    }
}