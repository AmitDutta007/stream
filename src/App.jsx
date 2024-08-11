import { Navbar } from "./components"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Watch from "./components/Watch"
import Feed from "./components/Feed"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Feed/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
  } 
])

function App() {

  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
