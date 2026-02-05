import { Route, Routes } from "react-router-dom"
import Categories from "./pages/Categories"
import Home from "./pages/Home"
import Orders from "./pages/Orders"
import OrderDetails from "./pages/OrderDetails"
import ControlPanel from "./Dashboard/ControlPanel"
import Dashboardgrid from "./Dashboard/Dashboard-grid"
import OrdersControlPanel from "./Dashboard/Orders"
import Notefications from "./Dashboard/Notefications"
import Profile from "./Dashboard/Profile"
import Users from "./Dashboard/Users"
import Menu from "./Dashboard/Menu"


function App() {

  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
          <Route path="/orderDetails/:id" element={<OrderDetails/>}></Route>
          <Route path="/dashboard" element={<Dashboardgrid/>}>
            <Route path="" element={<ControlPanel/>}></Route>
            <Route path="orders" element={<OrdersControlPanel/>}></Route>
            <Route path="notefications" element={<Notefications/>}></Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="users" element={<Users/>}></Route>
            <Route path="menu" element={<Menu/>}></Route>
          </Route>
       </Routes>
    </div>
  )
}

export default App
