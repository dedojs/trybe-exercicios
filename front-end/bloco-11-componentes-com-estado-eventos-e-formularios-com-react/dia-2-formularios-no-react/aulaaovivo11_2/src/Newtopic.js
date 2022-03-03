import React from "react";
import './App.css';
import "./NewTopic.css";

export default class Newtopic extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            level: 1,
            thumbnail: '',
            projectFinished: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name } = event.target;
        const value  = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
        const { addNewTopic } = this.props;
        addNewTopic(this.state)
        this.setState({
            title: '',
            level: 1,
            thumbnail: '',
            projectFinished: false,
        })
    }

    
    render() {
        const { state: {
            title, level, thumbnail, projectFinished
        }, handleChange, handleSubmit} = this;

        console.log(this.state)

        return (
            <form className="form">
                <label htmlFor="title">
                    Title:
                    <input type='text' name='title' id='title' onChange={handleChange} value={title}/>
                </label>
                <label htmlFor="level">
                    Level:
                    <input type='number' min='1' max='5' name='level' id='level' onChange={handleChange} value={level}/>
                </label>
                <label htmlFor="thumbnail">
                    Image url:
                    <input type='text' name="thumbnail" id='thumbanil' onChange={handleChange} value={thumbnail}/>
                </label>
                <label htmlFor="projectFinished">
                    Projeto foi finalizado?
                    <input type='checkbox' name="projectFinished" onChange={handleChange} value={projectFinished} />
                </label>
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
        )
    }
}