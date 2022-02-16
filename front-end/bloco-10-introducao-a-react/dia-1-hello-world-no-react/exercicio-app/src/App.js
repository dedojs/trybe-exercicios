import './App.css';

const values = ['React', 'Redux', 'Angular', 'Go']

const Task = (value) => {
  return (
    <div className = 'teste'>
    {
      value.map(item => <li>{item}</li>)
    }
    </div>
    
  )};

function App() {
  return Task(values);
}

export default App;
