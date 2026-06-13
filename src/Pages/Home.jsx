import { Banner } from "../Components/Banner"
import { BestSell } from "../Components/BestSell"
import { Browse } from "../Components/Browse"
import { FlasSales } from "../Components/FlasSales"
import { Header } from "../Components/Header"
import { Music } from "../Components/Music"
import {OurP} from "../Components/OurP"
import { NavBar } from "../Components/NavBar"
import { New } from "../Components/New"
import { Free } from "../Components/Free"
import { Footer } from "../Components/Footer"


export const Home = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Banner/>
    <FlasSales/>
    <Browse/>
    <BestSell/>
    <Music/>
    <OurP/>
    <New/>
    <Free/>
    <Footer/>
    </>
  )
}
