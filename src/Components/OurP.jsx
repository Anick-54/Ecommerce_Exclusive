import { Card } from "./Card"
import { Container } from "./Container"
import { SecHead } from "./SecHead"
import Dry from "../assets/E1.png"
import Camra from "../assets/E2.png"
import Laptop from "../assets/E3.png"
import Crim from "../assets/E4.png"
import { Grid } from "swiper/modules" 
import "swiper/css/grid" 

import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react"
import "swiper/css"
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa"

const cards = [
  { img: Dry,    heading: "Breed Dry Dog Food",      price: "$100", rating: "(35)", discount:"$0"  },
  { img: Camra,  heading: "CANON EOS DSLR Camera",   price: "$960", rating: "(95)", discount:"$0"  },
  { img: Laptop, heading: "ASUS FHD Gaming Laptop",  price: "$370", rating: "(325)", discount:"$0" },
  { img: Crim,   heading: "Curology Product Set",    price: "$375", rating: "(145)", discount:"$0" },
  { img: Dry,    heading: "Breed Dry Dog Food",      price: "$100", rating: "(35)", discount:"$0"  },
  { img: Camra,  heading: "CANON EOS DSLR Camera",   price: "$960", rating: "(95)", discount:"$0"  },
  { img: Laptop, heading: "ASUS FHD Gaming Laptop",  price: "$370", rating: "(325)", discount:"$0" },
  { img: Crim,   heading: "Curology Product Set",    price: "$375", rating: "(145)", discount:"$0" },
  { img: Dry,    heading: "Breed Dry Dog Food",      price: "$100", rating: "(35)", discount:"$0"  },
  { img: Camra,  heading: "CANON EOS DSLR Camera",   price: "$960", rating: "(95)", discount:"$0" },
  { img: Laptop, heading: "ASUS FHD Gaming Laptop",  price: "$370", rating: "(325)", discount:"$0" },
  { img: Crim,   heading: "Curology Product Set",    price: "$375", rating: "(145)", discount:"$0" },
  { img: Dry,    heading: "Breed Dry Dog Food",      price: "$100", rating: "(35)", discount:"$0"  },
  { img: Camra,  heading: "CANON EOS DSLR Camera",   price: "$960", rating: "(95)", discount:"$0"  },
  { img: Laptop, heading: "ASUS FHD Gaming Laptop",  price: "$370", rating: "(325)", discount:"$0" },
  { img: Crim,   heading: "Curology Product Set",    price: "$375", rating: "(145)", discount:"$0" },
  { img: Dry,    heading: "Breed Dry Dog Food",      price: "$100", rating: "(35)", discount:"$0"  },
  { img: Camra,  heading: "CANON EOS DSLR Camera",   price: "$960", rating: "(95)", discount:"$0"  },
  { img: Laptop, heading: "ASUS FHD Gaming Laptop",  price: "$370", rating: "(325)", discount:"$0" },
  { img: Crim,   heading: "Curology Product Set",    price: "$375", rating: "(145)", discount:"$0" },
]

export const OurP = () => {
  const [swiperInstance, setSwiperInstance] = useState(null)

  return (
    <Container className="lg:mt-[163px] mb-[168px] mt-15 pl-2.5">
      <div className="lg:flex lg:justify-between">
        <div className="lg:flex lg:gap-[120px]">
          <SecHead
            title="Our Products"
            heading="Explore Our Products"
          />
        </div>

        <div className="flex lg:gap-3 gap-1.5 justify-center mt-10 lg:mt-25">
          <button
            aria-label="Previous slide"
            onClick={() => swiperInstance?.slidePrev()}
            className="cursor-pointer w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center
                       justify-center text-xl hover:bg-primary hover:text-white transition"
          >
            <FaLongArrowAltLeft />
          </button>
          <button
            aria-label="Next slide"
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
        modules={[Grid]}
        spaceBetween={20}
        slidesPerView={1}
        grid={{rows:'2', fill:'row'}}
        breakpoints={{
          480:  { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
          768:  { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
          1024: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
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
      <button
        className="cursor-pointer hover:bg-red-800 w-[234px] h-[56px] bg-primary text-white
                   text-[16px] font-medium font-poppins flex justify-center items-center
                   rounded-[4px] mx-auto mt-7"
      >
        View All Products
      </button>
    </Container>
  )
}