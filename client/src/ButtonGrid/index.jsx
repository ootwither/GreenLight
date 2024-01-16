/* eslint-disable react/prop-types */

function ButtonGrid({ time, tasks, setTasks }) {

  async function taskReset (item) {
    const newTime = Date.now();
    setTasks(
      tasks.map((task) => {
        return task._id === item._id ? {
          ...task, lastChecked: newTime
        } : task;
      })
    )

    let updatedTask = {};
    Object.assign(updatedTask, item);
    updatedTask.lastChecked = newTime;
    await fetch('http://localhost:3000/tasks', {
      method: "PUT",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(updatedTask), // body data type must match "Content-Type" header
    })
  }

  return (
    <>
      <div className='buttonGrid'>
        {tasks.map(item =>
          <button key={item._id}
            onClick={() => taskReset(item)}
          >
            <div className={time > (item.lastChecked + item.interval) ? 'WARNING' :
            time > (item.lastChecked + item.interval*0.25) ? 'SOON' : ''
            }>
              <h3>{item.shortText}</h3>
            </div>
          </button>
        )}
      </div>
    </>
  )
}

export default ButtonGrid;