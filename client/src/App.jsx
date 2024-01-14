/* eslint-disable react/prop-types */
// import items from './assets/items'
import './App.css'
import { useEffect, useState } from 'react'
import ButtonGrid from './ButtonGrid/index'
// import apiService from './services';


function ConfigurePanel() {
  const[task, setTask] = useState('')
  const[shortText, setShortText] = useState('')
  const[interval, setInterval] = useState('')

  function handleTask (e) {
    setTask(e.target.value)
    console.log(task);
  }
  function handleShortText (e) {
    setShortText(e.target.value)
  }
  function handleInterval (e) {
    setInterval(e.target.value)
  }

  function handleSubmit (event) {
    console.log(task)
    event.preventDefault();
    setTask('');
    setShortText('');
    setInterval('');
  }

  return (
    <>
    <form className='configurePanel' >
      <h3>Name</h3>
    <input type='text' value={task} name='task' onChange={handleTask} ></input>
      <h3>Short text</h3>
    <input type='text' value={shortText} name = 'shortText' onChange={handleShortText}></input>
      <h3>interval</h3>
    <input type='text' value={interval} name = 'interval' onChange={handleInterval}></input>
    <button type='submit' onSubmit={handleSubmit}>ADD NEW</button>
    </form>

    </>
  )
}

function App() {
  const [time, setTime] = useState(Date.now());
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now());
    }, 1000)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/tasks').then((response) => {
    return response.json();
  }).then((data) => {
    setTasks(data);
    });
  }, [])

  return (
    <>
      {/* <div>{time}</div> */}

      <ButtonGrid time={time} tasks={tasks} setTasks={setTasks}/>
      <ConfigurePanel/>

    </>
  )
}

export default App




// className={item.toggle ? 'selected' : ''}



