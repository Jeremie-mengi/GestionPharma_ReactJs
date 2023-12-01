import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/login.jsx';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Products from './Pages/Products.jsx'
import ProductsList from './Pages/ProductsList.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'


const router = createBrowserRouter(
[
{
path:"/",
element: <Login/>
},
{
  path:"/Home",
  element: <Home/>
},
{
  path:"/About",
  element: <About/>
},
{
  path: "/Products",
  element: <Products/>,
  children:[
    {
      path:"",
      element:<ProductsList/>

  },
      {
          path:":id",
          element: <SingleProduct/>

      }
  ]
}
,

]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
