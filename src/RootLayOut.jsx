import { Outlet } from "react-router-dom"
import { Header } from "./Components/Header"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer"

export const RootLayOut = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Outlet />
        <Footer/>
    </div>
  )
}
