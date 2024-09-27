import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import UserShow from './components/UserShow.jsx';
import Updated from './components/Updated.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/users",
    element: <UserShow/>,
    loader: () => fetch( 'http://localhost:5000/users' )
  },
  {
    path: "/update/:id",
    element: <Updated/>,
    loader: ({params}) => fetch( `http://localhost:5000/update/${params.id}` )
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
