import React from "react";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            phases: ['...Inspire...', '...Segure...', '...Expire...'],
            phaseIndex: 0,
        }
    }

    //utilizar para alteração inicial do estado
    componentDidMount(){
        const ONE_SECOND = 1000
        this.intervalId = setInterval(() => {
            this.setState((prev) => ({
                seconds: prev.seconds +1
            }))
        }, ONE_SECOND)
    }

    //atualizando o estado segundos
    componentDidUpdate(prevProsp, prevState) {
        const timerLimit = 5;
        const two = 2;
        const zero = 0;
        if (prevState.seconds === timerLimit) {
            this.setState({
                seconds: zero,
                phaseIndex: prevState.phaseIndex === two ? zero : prevState.phaseIndex +1,
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        //pega valor atualizado sem delay
        return true
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    render() {
        const { seconds, phaseIndex, phases } = this.state;
        return (
            <section>
                <h1>{ phases[phaseIndex] }</h1>
                <h2>{ seconds }</h2>
            </section>
        )
    }
}