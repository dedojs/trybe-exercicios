import React from 'react';
import './App.css';
import Newtopic from './Newtopic';
import TopicCard from './TopicCard';
import data from './data';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      topics: data
    }

    this.addNewTopic = this.addNewTopic.bind(this)
    this.removeTopic = this.removeTopic.bind(this)
  }
  
  addNewTopic(topic){
    this.setState((prevState) => ({topics: [...prevState.topics, topic]}))
  }
  
  removeTopic(title){
    const { topics } = this.state;
    this.setState(({topics: topics.filter((item) => item.title !== title)}))
  }

  render() {
    const { topics } = this.state
    return (
      <div className='form'>
        <Newtopic addNewTopic={this.addNewTopic}/>
        <div>
          {
            topics.map((topic) => (
              <div key={topic.title}>
                <TopicCard topic={topic} key={topic.title} removeTopic />
              </div>

            ))
          }
        </div>
      </div>
    )
  }


}


