import React from "react";
import './App.css';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const func = (arr) => {
      return (
          <div className='card1'>
              {
                conteudos.map(item =>
                    <div className="card">
                    <p>O conteúdo é : {item.conteudo}</p>
                    <p>Status: {item.status}</p> 
                    <p>Bloco: {item.bloco}</p>
                    </div>
                    )
                }
          </div>
      )
  }

class Content extends React.Component {
    render(){
        return (
            func(conteudos)
        )
    }
}

export default Content