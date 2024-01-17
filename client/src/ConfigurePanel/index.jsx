/* eslint-disable react/prop-types */
import { useState } from "react"

const url = 'http://localhost:3000'

// eslint-disable-next-line no-unused-vars
function ConfigurePanel({ tasks, setTasks }) {
  const [task, setTask] = useState('')
  const [shortText, setShortText] = useState('')
  const [interval, setInterval] = useState('')

  function handleTask(e) {
    setTask(e.target.value)
  }
  function handleShortText(e) {
    setShortText(e.target.value)
  }
  function handleInterval(e) {
    setInterval(e.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      task, shortText: shortText.toUpperCase(),
      interval: Number(interval) * 60 * 1000,
      lastChecked: Date.now()
    }
    setTask('');
    setShortText('');
    setInterval('');


    let response = await fetch(url + '/tasks', {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(newTask), // body data type must match "Content-Type" header
    });

    response = await response.json();
    setTasks(prev => [...prev, response]) //* we do it like this so we can use _id from mongo as unique key for react
    return response; // parses JSON response into native JavaScript objects
  }

  return (
    <>
      <div className="configurePanel">
        <form onSubmit={handleSubmit} >
          <h3>Task Description</h3>
          <h4>Describe your task here</h4>
          <input type='text' value={task} name='task' onChange={handleTask}></input>
          <h3>Short Text</h3>
          <h4>A 3-5 character short code for your task</h4>
          <input type='text' value={shortText} name='shortText'
          onChange={handleShortText}
          ></input>
          <h3>Interval</h3>
          <h4>How often, in minutes, you need to repeat your task</h4>
          <input type='text' value={interval} name='interval'
          onChange={handleInterval}
          ></input>
          {/* <input type='range' className="range-slider"
          min="0" max="100" value="50" id="fader" step="20" list="volsettings"><datalist id="volsettings"><option>0</option>
          <option>20</option>
          <option>40</option>
          <option>60</option>
          <option>80</option>
          <option>100</option>
          </datalist>
          </input> */}
          <button type='submit' >ADD NEW</button>
        </form>
      </div>
    </>
  )
}

export default ConfigurePanel;