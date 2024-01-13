/* eslint-disable react/prop-types */
import items from './assets/items'
import './App.css'
import { useEffect, useState } from 'react'

function ButtonGrid({ time }) {
  const [tasks, setTasks] = useState(items);

  function taskReset (item) {
    setTasks(
      tasks.map((task) => {
        return task.id === item.id ? {
          ...task, lastChecked: Date.now()
        } : task;
      })
    )
  }

  return (
    <>
      <div className='buttonGrid'>
        {tasks.map(item =>
          <button key={item.id}
            onClick={() => taskReset(item)}
          >
            <div className={time > (item.lastChecked + item.interval) ? 'WARNING' : ''}>
              {item.short}
            </div>
          </button>
        )}
      </div>
    </>
  )
}

function ConfigurePanel() {
  const[name, setName] = useState('')
  const[shortText, setShortText] = useState('')
  const[interval, setInterval] = useState('')

  function handleName (e) {
    setName(e.target.value)
    log
  }
  function handleShortText (e) {
    setShortText(e.target.value)
  }
  function handleInterval (e) {
    setInterval(e.target.value)
  }

  function handleSubmit (event) {
    console.log(name)
    event.preventDefault();
    setName('');
    setShortText('');
    setInterval('');
  }

  return (
    <>
    <form className='configurePanel' >
      <h3>Name</h3>
    <input type='text' value={name} name='name' onChange={handleName} ></input>
      <h3>Short text</h3>
    <input type='text' value={shortText} name = 'shortText' onChange={handleShortText}></input>
      <h3>interval</h3>
    <input type='text' value={interval} name = 'interval' onChange={handleInterval}></input>
    <button type='submit' onSubmit={handleSubmit}></button>
    </form>

    </>
  )
}

function App() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now());
    }, 1000)
  }, [])

  return (
    <>
      {/* <div>{time}</div> */}

      <ButtonGrid time={time} />
      <ConfigurePanel/>

    </>
  )
}

export default App




// className={item.toggle ? 'selected' : ''}



