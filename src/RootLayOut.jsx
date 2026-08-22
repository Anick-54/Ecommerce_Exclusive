import { Outlet } from "react-router-dom"
import { Header } from "./Components/Header"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer"
import { useEffect, useState } from "react"
import { Container } from "./Components/Container"
 





export const RootLayOut = () => {

//  const [isloading, setIsLoading] = useState(true)

//   useEffect(()=>{
//    const time = setTimeout(() => {
//       setIsLoading(false)
//     }, 2000);


//     return () => clearTimeout(time);
//   } ,[])

  
//   if(isloading) {
//     return <Container>
//         <div>
//           <div className="mt-50">
//             <h2 className="text-[42px] font-bold font-poppins text-purple-800 text-center">Please Wait For The Details...</h2>
//           </div>
//         </div>
//     </Container>
//   }
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
