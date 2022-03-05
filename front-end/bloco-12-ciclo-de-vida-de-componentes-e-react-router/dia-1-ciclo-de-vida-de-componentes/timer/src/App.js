import React from "react";
import Timer from "./Timer";
import './index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTimer: false,
    }
  }

  toggleClick= () => {
    this.setState((prev) => ({
      showTimer: !prev.showTimer
    }))
  }

  render() {
    const { showTimer } = this.state
    return (
      <div className="container">
        <h1>Hora da meditação</h1>
        {showTimer && <Timer /> }
        <button
        type="button"
        onClick={ this.toggleClick }
        >
          {showTimer ? "Esconder" : "Mostrar"}
        </button>
      </div>
      
    )
  }
}