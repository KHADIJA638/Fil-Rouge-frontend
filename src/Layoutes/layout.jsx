
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function layout() {
  return (
    <div className="flex flex-col">
      <Nav/>
      <main> 
      <Outlet/>  
      </main>
      <Footer/>
    </div>
  )
}
