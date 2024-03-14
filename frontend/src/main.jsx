import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';


import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import User from './comp/User'
import Create from './comp/Create'
import Update from './comp/Update'
import Admin from './comp/Admin';

const router = createBrowserRouter([
  {
  
    path :'/',
    element:<Admin/>,
    errorElement :<h1>Error</h1>


},
{
  path :'/create',
  element:<Create/>,
},
{
  path :'/update/:id',
  element:<Update/>,
   
},
{
  path :"/user",
  element:<User/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
