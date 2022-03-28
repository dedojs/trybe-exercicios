import React from 'react'
import { connect } from 'react-redux';

class Teste extends React.Component {
  render() {
    const { title, relese } = this.props;
    return (
      <div>
        <h1>Teste de elementos</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  testeEstado: state.NomeReducer.EstadoReducer,
})

export default connect(mapStateToProps, null)(Teste);