import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react'
import Footer from './components/Footer';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasksFromServer = async () => {
      const res = await fetchTasks()
      setTasks(res)
    }

    getTasksFromServer()
  })

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => { // biz bosgan taskni qaytaradi
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const AddTaskHandler = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { ...task, id }
    // setTasks([...tasks, newTask])
  }

  const onDelete = async (id) => {
    // console.log('delete', id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const onRemind = async (id) => {
    const task = await fetchTask(id) // biz yangilamoqchi bo'lgan task
    const updTask = { ...task, remind: !task.remind } // yangilangan task tayyor

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json() // yangilangan task
    setTasks(tasks.map((task) => task.id === id ? { ...task, remind: !data.remind } : task))
  }

  // toggle AddTask
  const addTaskToggle = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header title={'Task tracker'} addToggle={addTaskToggle} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={AddTaskHandler} />}
      <Tasks tasks={tasks} onDelete={onDelete} onRemind={onRemind} />
      <Footer />
    </div>

  );
}

export default App;
