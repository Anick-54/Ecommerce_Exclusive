import { Outlet } from "react-router-dom"
import { Header } from "./Components/Header"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer"
import { useEffect, useState } from "react"

export const RootLayOut = () => {

 const [isloading, setIsLoading] = useState(true)

  useEffect(()=>{
   const time = setTimeout(() => {
      setIsLoading(false)
    }, );



    return () => clearTimeout(time);
  } ,[])


  


  if(isloading) {
    return <p className='text-red-500'>loading....</p>
  }

  return (
    <div>
       <div className="sticky top-0 z-[9999] bg-white">
         <Header/>
        <NavBar/>
       </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}
