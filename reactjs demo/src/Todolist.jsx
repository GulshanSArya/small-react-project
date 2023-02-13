import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import YouTubeIcon from '@mui/icons-material/YouTube';


function TodoList() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [updating, setUpdating] = useState(false)

  function handleChange(e) {
    setTask(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(updating === false)
      setTasks([...tasks, task])
    else{
      tasks[updating] = task;
      setTasks([...tasks])
    }

    setTask('')
  }

  function handleDeletion(itemToDelete) {
     console.log(itemToDelete)
    setTasks(tasks.filter((item, index) => {
      return index !== itemToDelete
    }))
  }

  function handleUpdation(itemToUpdate) {
    setTask(tasks[itemToUpdate])
    setUpdating(itemToUpdate)
  }

  console.log(tasks)
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <input type="submit" value='Add' />
      </form>
      <ul>
        {
          tasks.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <CloseIcon className='cross' onClick={() => handleDeletion(index)} />
                <EditIcon className='pencil' onClick={() => handleUpdation(index)} />
                < YouTubeIcon />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
export default TodoList;
