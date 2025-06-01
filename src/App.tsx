import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {MainOutletPage,Homepages} from './utils/PagestRoutes';

function App() {

const routers = createBrowserRouter([
  {
    path:'/',
    element: <MainOutletPage/>,
    children:[
      {index:true, element:<Homepages/> },
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
