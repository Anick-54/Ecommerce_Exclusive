import { Banner } from "../Components/Banner"
import { BestSell } from "../Components/BestSell"
import { Browse } from "../Components/Browse"
import { FlasSales } from "../Components/FlasSales"

import { Music } from "../Components/Music"
import {OurP} from "../Components/OurP"

import { New } from "../Components/New"
import { Free } from "../Components/Free"



export const Home = () => {
  return (
    <>
   
    <Banner/>
    <FlasSales/>
    <Browse/>
    <BestSell/>
    <Music/>
    <OurP/>
    <New/>
    <Free/>
    
    </>
  )
}
