/* eslint-disable react/prop-types */
// import items from './assets/items'
import './App.css'
import { useEffect, useState } from 'react'
import ButtonGrid from './ButtonGrid/index'
import ConfigurePanel from './ConfigurePanel/index';
// import apiService from './services';


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
      <div className='app'>
      <ButtonGrid time={time} tasks={tasks} setTasks={setTasks}/>
      <ConfigurePanel tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  )
}

export default App
