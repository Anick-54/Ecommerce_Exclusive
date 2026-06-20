import { Container } from "./Container"

import { List } from "./List"
import { ListItem } from "./ListItem"
import { Images } from "./Images"
import banner from "../assets/banner.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination,} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { IoIosArrowForward } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { useState } from "react"


export const Banner = () => {

  const[show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  }  
  return (
    <>
      <Container>
        <div className="lg:flex lg:gap-10">
          <div className="flex lg:hidden gap-2 text-2xl items-center font-bold pl-2.5 mt-5">
            <BiCategoryAlt onClick={handleClick} className="lg:hidden cursor-pointer"/>
            <h2>Category</h2>
          </div>
          <div className={` ${show ? 'block' : 'hidden'} lg:flex w-[233px]  sm:w-1/4 lg:border-r border-secondary border-r-0 pl-2.5`}>
            <List className="lg:mt-10 text-[16px] mt-4 lg:leading-[38px]">
              <ListItem className="lg:flex lg:gap-30 items-center flex justify-between">Woman's Fashion <IoIosArrowForward className="text-2xl" /></ListItem>
              <ListItem className="lg:flex lg:justify-between items-center flex justify-between">Men's Fashion <IoIosArrowForward className="text-2xl" /></ListItem>
              <ListItem>Electronics</ListItem>
              <ListItem>Home & Lifestyle</ListItem>
              <ListItem>Medicine</ListItem>
              <ListItem>Sports & Outdoor</ListItem>
              <ListItem>Baby's & Toys</ListItem>
              <ListItem>Groceries &</ListItem>
              <ListItem>Health & Beauty</ListItem>
            </List>
          </div> 
          <div className="flex-1 overflow-hidden mt-14">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide><Images src={banner} className="w-full h-full"/></SwiperSlide>
              <SwiperSlide><Images src={banner} className="w-full h-full"/></SwiperSlide>
              <SwiperSlide><Images src={banner} className="w-full h-full"/></SwiperSlide>
              <SwiperSlide><Images src={banner} className="w-full h-full"/></SwiperSlide>
              <SwiperSlide><Images src={banner} className="w-full h-full"/></SwiperSlide>
              <SwiperSlide><Images src={banner} className="w-full h-full"/></SwiperSlide>
            </Swiper>

          </div>
        </div>
      </Container>
    </>
  )
}