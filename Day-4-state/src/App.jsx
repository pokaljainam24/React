import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'HTML & CSS Me Croma.'
    },
    {
      id: 2,
      name: 'MIVI Web app using bootstrap'
    },
    {
      id: 3,
      name: 'MIVI Web app using React'
    },
    {
      id: 4,
      name: 'MIVI Web app using React Native'
    },
    {
      id: 5,
      name: 'MIVI Web app using Node.js'
    },
    {
      id: 6,
      name: 'MIVI Web app using Express.js'
    },
    {
      id: 7,
      name: 'MIVI Web app using MongoDB'
    }
  ]);

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <>
      <caption><h2>Task</h2></caption>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>
                  <button onClick={() => handleDelete(task.id)} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App