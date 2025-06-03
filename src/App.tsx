import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MainOutletPage,Homepages, Work, Abouts, Contact} from './utils/PagestRoutes';

function App() {

const routers = createBrowserRouter([
  {
    path:'/',
    element: <MainOutletPage/>,
    children:[
      {index:true, element:<Homepages/> },
      {path:'works', element:<Work/>},
      {path:'about',element: <Abouts/>},
      {path:'contact', element: <Contact/>}
    ]
  }
])

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App;
