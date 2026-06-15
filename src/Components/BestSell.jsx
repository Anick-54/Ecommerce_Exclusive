import { useState } from "react"
import { Container } from "./Container"
import { SecHead } from "./SecHead"
import {Card3} from "./Card3"
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"        
import "swiper/css"  

import Short from "../assets/B1 (2).png"
import Bag from "../assets/B2.png"
import Coller from "../assets/B3.png"
import Book from "../assets/B4.png"


const card3s = [
  { img: Short,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)" },
  { img: Bag, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)" },
  { img: Coller,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)"},
  { img: Book,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)" },
  
  { img: Short,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)" },
  { img: Bag, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)" },
  { img: Coller,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)"},
  { img: Book,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)" },
  
  { img: Short,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)" },
  { img: Bag, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)" },
  { img: Coller,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)"},
  { img: Book,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)" },
  
  { img: Short,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)" },
  { img: Bag, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)" },
  { img: Coller,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)"},
  { img: Book,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)" },
  

]


export const BestSell = () => {

  const[swiperInstance, setSwiperInstance] = useState (false)
  
  return (
    <>
     <Container>
        <div className="lg:flex items-center lg:justify-between pl-2.5">
          <div className="lg:flex lg:gap-[120px]">
            <SecHead
              title="This Month"
              heading="Best Selling Products"
            />
          </div>
          <div className=" flex lg:gap-3 gap-1.5 justify-center mt-10 lg:mt-25">
            <button onClick={() => swiperInstance?.slidePrev()}
              className="cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center
                    justify-center text-xl hover:bg-primary hover:text-white transition">
              <FaLongArrowAltLeft />
            </button>
            <button onClick={() => swiperInstance?.slideNext()}
              className="cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center
                    justify-center text-xl hover:bg-primary hover:text-white transition">
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={setSwiperInstance}
          spaceBetween={20}
          slidesPerView='1'
          breakpoints={{
            480:  { slidesPerView: 2 },
            768:  { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-10 ml-10! lg:ml-0!"
        >
          {card3s.map((card3, i) => (
            <SwiperSlide key={i}>
              <Card3
                img={card3.img}
                heading={card3.heading}
                price={card3.price}
                rating={card3.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
     </Container>




    </>
  )
}
