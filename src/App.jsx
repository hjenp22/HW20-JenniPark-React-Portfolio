import { Outlet } from "react-router-dom"
import Header from "./components/NavBar"


function App() {
 
  return (
    <>
    
      <Header />
      <Outlet />
    </>
  )
}

export default App;

