import { Navbar, Sidebar } from "./components"
import Feed from "./components/Feed"

function App() {

  return (
    <>
      <Navbar />
      <div className="flex mt-16">
        <Sidebar />
        <Feed />
      </div>

    </>
  )
}

export default App
