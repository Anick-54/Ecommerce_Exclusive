import { Outlet } from "react-router-dom"
import { Header } from "./Components/Header"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer"
import { useEffect, useState } from "react"
import { Container } from "./Components/Container"

export const RootLayOut = () => {

 const [isloading, setIsLoading] = useState(true)

  useEffect(()=>{
   const time = setTimeout(() => {
      setIsLoading(false)
    }, 2000);



    return () => clearTimeout(time);
  } ,[])

  

  if(isloading) {
    return <Container>
      <p className='text-primary font-bold font-poppins flex items-center text-[64px] mt-20'>Loading....</p>
    </Container>
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
