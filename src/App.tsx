import { Route, Routes } from "react-router-dom"
import Categories from "./pages/Categories"
import Home from "./pages/Home"

function App() {

  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
       </Routes>
    </div>
  )
}

export default App
