import { Navbar, Sidebar } from "./components"
import Feed from "./components/Feed"

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <Feed />
      </div>

    </>
  )
}

export default App
