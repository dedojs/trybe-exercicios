import React, { Component } from "react";
// import deleteIcon from "../images/deleteIcon.png";

import "./TopicCard.css";

export default class TopicCard extends Component {
  render() {
    const {
      topic: { level, title, thumbnail, projectFinished }
    } = this.props;

    return (
      <div className="topic-card">
        <div className="topic-img">
          <img src={thumbnail} alt="topic" />
        </div>
        <div className="topic-info">
          <span>{title}</span>
          <span>Desempenho: {level}</span>
          <span>
            {projectFinished ? "Projeto finalizado =D" : "Projeto em andamento"}
          </span>
        </div>
        <div />
        <button className="btn" type="button">
           Delletar
        </button>
      </div>
    );
  }
}