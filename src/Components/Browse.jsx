import { useState } from "react"                          
import { Swiper, SwiperSlide } from "swiper/react"        
import "swiper/css"                                      
import { Card2 } from "./Card2"                          
import { Container } from "./Container"
import { SecHead } from "./SecHead"
import Mobail from "../assets/c1.svg"
import Comp from "../assets/c2.svg"
import SmartW from "../assets/c3.png"
import Camera from "../assets/c4.png"
import HeadP from "../assets/c5.png"
import GameP from "../assets/c6.png"
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaLongArrowAltLeft } from "react-icons/fa"

const card2s = [
  { img: Mobail, devName: "Phones" },
  { img: Comp, devName: "Computer" },
  { img: SmartW, devName: "Smartwatch" },
  { img: Comp, devName: "Camera" },
  { img: HeadP, devName: "Headphone" },
  { img: GameP, devName: "Gamepad" },
  { img: Mobail, devName: "Phones" },
  { img: Comp, devName: "Computer" },
  { img: SmartW, devName: "Smartwatch" },
  { img: Comp, devName: "Camera" },
  { img: HeadP, devName: "Headphone" },
  { img: GameP, devName: "Gamepad" },
  { img: Mobail, devName: "Phones" },
  { img: Comp, devName: "Computer" },
  { img: SmartW, devName: "Smartwatch" },
  { img: Comp, devName: "Camera" },
  { img: HeadP, devName: "Headphone" },
  { img: GameP, devName: "Gamepad" },
]

export const Browse = () => {
  const [swiperInstance, setSwiperInstance] = useState(false)

  return (
    <Container>
      <div className="lg:flex lg:justify-between pl-2.5">
        <div className="lg:flex lg:gap-[120px]">
          <SecHead 
          title="Categories" 
          heading="Browse By Category" 
          />
        </div>
        <div className=" flex lg:gap-3 gap-1.5 justify-center mt-10 lg:mt-25">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center
                       justify-center text-xl hover:bg-primary hover:text-white transition"
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center
                       justify-center text-xl hover:bg-primary hover:text-white transition"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperInstance}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480:  { slidesPerView: 2 },
          768:  { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="mt-10 !ml-25 lg:!ml-0 "
      >
        {card2s.map((card2, i) => (
          <SwiperSlide key={i}>
            <Card2                      
              img={card2.img}
              devName={card2.devName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="border-b-1 border-secondary mt-15 mb-20" />
    </Container>
  )
}