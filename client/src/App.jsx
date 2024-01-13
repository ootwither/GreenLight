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

    </>
  )
}

export default App


// function ConfigurePanel() {
//   return (
//     <>
//     <form>

//     </form>

//     </>
//   )
// }

// className={item.toggle ? 'selected' : ''}



