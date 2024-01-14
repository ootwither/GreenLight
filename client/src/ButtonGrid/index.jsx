/* eslint-disable react/prop-types */

function ButtonGrid({ time, tasks, setTasks }) {

  function taskReset (item) {
    setTasks(
      tasks.map((task) => {
        return task._id === item._id ? {
          ...task, lastChecked: Date.now()
        } : task;
      })
    )
  }

  return (
    <>
      <div className='buttonGrid'>
        {tasks.map(item =>
          <button key={item._id}
            onClick={() => taskReset(item)}
          >
            <div className={time > (item.lastChecked + item.interval) ? 'WARNING' : ''}>
              {item.shortText}
            </div>
          </button>
        )}
      </div>
    </>
  )
}

export default ButtonGrid;