import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            nome: '',
            idade: 0,
            casado: false,
            cidade:'',
            estado: '',
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.fileInput = React.createRef()

    }

    handleFile(event) {
        event.preventDefault()
        alert(
            `Arquivo Selecionado - ${this.fileInput.current.files[0].name}`
        )
    }

    handleInput({target}) {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const { handleInput } = this
        return (
            <div>
                <fieldset className='form'>
                    <legend>Formulário React</legend>
                    <label>Nome
                        <input type='text' name='nome' value={this.state.nome} onChange={handleInput}/>
                    </label>
                    
                    <label>Idade
                        <input type='number' name='idade' value={this.state.idade} onChange={handleInput}/>
                    </label>

                    <label>Estado Civil:
                        <input type='checkbox' id='casado' name='casado' onChange={handleInput}/>Casado
                    </label>

                    <label>Cidade
                        <input type='text' name='cidade' value={this.state.cidade} onChange={handleInput}/>
                    </label>

                    <label>
                        Estado
                        <select name='estado' value={this.state.estado} onChange={handleInput}>
                            <option value=''></option>
                            <option value='Bahia'>Bahia</option>
                            <option value='SaoPaulo'>São Paulo</option>
                            <option value='RioDeJaneiro'>Rio de Janeiro</option>
                        </select>
                    </label>

                    <label>
                        <input type='file' ref={this.fileInput} onChange={this.handleFile}/>
                    </label>
                </fieldset>
            </div>
        )
    }
}