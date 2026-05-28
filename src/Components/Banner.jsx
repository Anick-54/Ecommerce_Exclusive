import { Container } from "./Container"
import { Flex } from "./Flex"
import { List } from "./List"
import { ListItem } from "./ListItem"
import { Images } from "./Images"
import banner from "../assets/banner.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export const Banner = () => {
  
  return (
    <>
      <Container>
        <Flex className="gap-10">
          <div className="w-[233px]  border-r-1 border-[#b3b3b3]">
            <List className=" mt-10 text-[16px] leading-[38px]">
              <ListItem>Woman's Fashion</ListItem>
              <ListItem>Men's Fashion</ListItem>
              <ListItem>Electronics</ListItem>
              <ListItem>Home & Lifestyle</ListItem>
              <ListItem>Medicine</ListItem>
              <ListItem>Sports & Outdoor</ListItem>
              <ListItem>Baby's & Toys</ListItem>
              <ListItem>Groceries &</ListItem>
              <ListItem>Health & Beauty</ListItem>
            </List>
          </div>
          <div className="flex-1 overflow-hidden mt-10">
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
        </Flex>
      </Container>
    </>
  )
}