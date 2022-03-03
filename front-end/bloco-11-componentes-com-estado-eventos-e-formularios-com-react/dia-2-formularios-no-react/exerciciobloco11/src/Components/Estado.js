import React from 'react'

export default class Estado extends React.Component {
    render() {
        const { value, handleChange } = this.props
        const estados = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"]
        return (
            <li>
                <label>Estado</label>
                    <select value={value} name='estado' required onChange={handleChange} placeholder='Escolha seu Estado'>
                    <option>Escolha o Estado</option>
                    {
                        estados.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })
                    }
                    </select>
            </li>
        );
    }
}