import { Route, Routes } from "react-router-dom"
import Categories from "./pages/Categories"
import Home from "./pages/Home"
import Orders from "./pages/Orders"
import OrderDetails from "./pages/OrderDetails"

function App() {

  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
          <Route path="/orderDetails/:id" element={<OrderDetails/>}></Route>
       </Routes>
    </div>
  )
}

export default App
