import React from 'react'
import ReactDOM from 'react-dom/client'
import {TasksList} from "./pages/TasksList/TasksList";
import {App} from "@/app";
import "./styles/defaults.scss"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
)
