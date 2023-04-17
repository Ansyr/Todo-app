import React from 'react'
import ReactDOM from 'react-dom/client'
import {TasksList} from "./pages/TasksList/TasksList";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <TasksList/>
  </React.StrictMode>,
)
