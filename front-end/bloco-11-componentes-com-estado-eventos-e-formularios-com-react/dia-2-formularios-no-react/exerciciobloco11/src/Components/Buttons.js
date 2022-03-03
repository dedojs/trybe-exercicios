import React from "react";

export default class Buttons extends React.Component {
    render () {

        const { text, classe, funcao } = this.props
        return (
            <button className={classe} onClick={funcao} type='submit'>{text}</button>
        )
    }
}