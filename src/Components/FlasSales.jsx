import { Card } from "./Card"
import { Container } from "./Container"
import { Counter } from "./Counter"
import { SecHead } from "./SecHead"
import Gamepad from "../assets/F1.png"
import KeyBoard from "../assets/F2.png"
import Monitor from "../assets/F3.png"
import Chair from "../assets/F4.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react"
import "swiper/css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";



const cards = [
  { img: Gamepad,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)", discount: "-40%" },
  { img: KeyBoard, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)", discount: "-35%" },
  { img: Monitor,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)", discount: "-30%" },
  { img: Chair,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)", discount: "-25%" },
  { img: Gamepad,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)", discount: "-40%" },
  { img: KeyBoard, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)", discount: "-35%" },
  { img: Monitor,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)", discount: "-30%" },
  { img: Chair,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)", discount: "-25%" },
  { img: Gamepad,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)", discount: "-40%" },
  { img: KeyBoard, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)", discount: "-35%" },
  { img: Monitor,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)", discount: "-30%" },
  { img: Chair,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)", discount: "-25%" },
  { img: Gamepad,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)", discount: "-40%" },
  { img: KeyBoard, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)", discount: "-35%" },
  { img: Monitor,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)", discount: "-30%" },
  { img: Chair,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)", discount: "-25%" },
  { img: Gamepad,  heading: "HAVIT HV-G92 Gamepad",   price: "$120", rating: "(88)", discount: "-40%" },
  { img: KeyBoard, heading: "AK-900 Wired Keyboard",  price: "$960", rating: "(75)", discount: "-35%" },
  { img: Monitor,  heading: "IPS LCD Gaming Monitor", price: "$370", rating: "(99)", discount: "-30%" },
  { img: Chair,    heading: "S-Series Comfort Chair", price: "$375", rating: "(99)", discount: "-25%" },

]

export const FlasSales = () => {
  const [swiperInstance, setSwiperInstance] = useState(false)

  return (
    <>
      <Container className="lg:mt-[163px] mt-15 pl-2.5">
        <div className="lg:flex lg:justify-between">
          <div className="lg:flex lg:gap-[120px]">
            <SecHead 
            title="Today's" 
            heading="Flash Sales" 
            />
            <Counter />
          </div>
          <div className="flex lg:gap-3 gap-1.5 justify-center mt-10  lg:mt-25">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className=" cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center
                         justify-center text-xl hover:bg-primary hover:text-white transition"
            >
              <FaLongArrowAltLeft />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className=" cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center
                         justify-center text-xl hover:bg-primary hover:text-white transition"
            >
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
          className="mt-10 !ml-10 lg:!ml-0"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <Card
                img={card.img}
                heading={card.heading}
                price={card.price}
                rating={card.rating}
                discount={card.discount}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="  hover:bg-red-800 w-[234px] h-[56px] bg-primary text-white text-[16px] font-medium
                        font-poppins flex justify-center items-center rounded-[4px]
                        mx-auto mt-7 ">
          <button className="cursor-pointer">View All Products</button>
        </div>

        <div className="border-b-1 border-secondary mt-15 mb-20" />

      </Container>
    </>
  )
}